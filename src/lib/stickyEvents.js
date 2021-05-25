/**
 * Fork of https://github.com/ryanwalters/sticky-events/blob/master/sticky-events.js
 * in order to fix bug that caused sticky element to not fire event in random className
 *
 * Todo:
 * - Allow adding new stickies to a set of stickies
 * - Allow bottom stickies
 * - Allow deleting stickies? Is this needed?
 * - Add tests...
 */

const ClassName = {
  SENTINEL: 'sticky-events--sentinel',
  SENTINEL_TOP: 'sticky-events--sentinel-top',
  SENTINEL_BOTTOM: 'sticky-events--sentinel-bottom'
}

// StickyEvents class

export default class StickyEvents {
  /**
   * Initialize a set of sticky elements with events
   *
   * @param {Element|Document} container
   * @param {boolean} enabled
   * @param {string} stickySelector
   */

  constructor ({ container = document, enabled = true, stickySelector = '.sticky-events' } = {}) {
    this.container = container
    this.observers = []
    this.stickyElements = Array.from(this.container.querySelectorAll(stickySelector))
    this.stickySelector = stickySelector
    this.state = new Map()

    if (enabled) {
      this.enableEvents()
    }
  }

  /**
   * Initialize the state for a sticky:
   * 1. Default isSticky to false
   * 2. Create and observe a header sentinel
   * 3. Create and observe a footer sentinel
   *
   * @param {HTMLElement|Node} sticky
   */

  setState (sticky) {
    if (this.state.get(sticky)) {
      return
    }

    this.state.set(sticky, {
      isSticky: false,
      headerSentinel: this.addSentinel(sticky, ClassName.SENTINEL_TOP),
      footerSentinel: this.addSentinel(sticky, ClassName.SENTINEL_BOTTOM)
    })
  }

  /**
   * Initialize the intersection observers on `.sticky` elements within the specified container.
   * Container defaults to `document`.
   */

  enableEvents () {
    if (window.self !== window.top) {
      // eslint-disable-next-line
      console.warn('StickyEvents: There are issues with using IntersectionObservers in an iframe, canceling initialization. Please see https://github.com/w3c/IntersectionObserver/issues/183')

      return
    }

    // Create IntersectionObservers for header and footer sentinels

    this.observers = {
      header: this.createHeaderObserver(),
      footer: this.createFooterObserver()
    }

    // Then, initialize the sticky's state

    this.stickyElements.forEach((sticky) => {
      this.setState(sticky)
    })
  }

  /**
   * Reset the DOM to it's pre-sticky state.
   * 1. (Optionally) Fire a sticky-unstuck event on all stickies to reset them to their original unstuck state
   * 2. Disconnect and remove IntersectionObservers
   * 3. Clear out the global state
   *
   * @param {boolean} resetStickies
   */

  disableEvents (resetStickies = true) {
    if (resetStickies) {
      this.stickyElements.forEach(sticky => this.fire(false, sticky))
    }

    Object.values(this.observers).forEach(observer => observer.disconnect())

    this.observers = null

    this.state.clear()
  }

  /**
   * Add a list of stickies to the existing set
   *
   * @param {NodeList} stickies
   */

  addStickies (stickies) {
    this.stickyElements.push(...stickies)
    this.stickyElements.forEach(sticky => this.setState(sticky))
  }

  /**
   * Add a single sticky to the existing set
   *
   * @param {Node} sticky
   */

  addSticky (sticky) {
    this.stickyElements.push(sticky)
    this.setState(sticky)
  }

  /**
   * Create and observe a sentinel for given sticky. Type of sentinel is determined by className.
   *
   * @param {HTMLElement} sticky
   * @param {string} className
   * @returns {Element}
   */

  addSentinel (sticky, className) {
    const sentinel = document.createElement('div')
    const stickyParent = sticky.parentElement

    // Apply styles to the sticky element

    sticky.style.cssText = `
      position: -webkit-sticky;
      position: sticky;
    `

    // Apply default sentinel styles

    sentinel.classList.add(ClassName.SENTINEL, className)

    Object.assign(sentinel.style, {
      left: 0,
      position: 'absolute',
      right: 0,
      visibility: 'hidden'
    })

    switch (className) {
      case ClassName.SENTINEL_TOP: {
        stickyParent.insertBefore(sentinel, sticky)

        // Apply styles specific to the top sentinel

        Object.assign(
          sentinel.style,
          this.getSentinelPosition(sticky, sentinel, className),
          { position: 'relative' }
        )

        // Observe the sentinel

        this.observers.header.observe(sentinel)

        break
      }

      case ClassName.SENTINEL_BOTTOM: {
        stickyParent.appendChild(sentinel)

        // Apply styles specific to the bottom sentinel

        Object.assign(sentinel.style, this.getSentinelPosition(sticky, sentinel, className))

        // Observe the sentinel

        this.observers.footer.observe(sentinel)

        break
      }
    }

    return sentinel
  }

  /**
   * Sets up an intersection observer to notify `document` when elements with the `ClassName.SENTINEL_TOP` become
   * visible/hidden at the top of the sticky container.
   *
   * @returns {IntersectionObserver}
   */

  createHeaderObserver () {
    return new IntersectionObserver(([record]) => {
      const { boundingClientRect, isIntersecting, rootBounds } = record
      const stickyParent = record.target.parentElement
      const stickyTarget = stickyParent.querySelector(this.stickySelector)

      stickyParent.style.position = 'relative'

      if (boundingClientRect.bottom < rootBounds.bottom && isIntersecting) {
        this.fire(false, stickyTarget, StickyEvents.POSITION_TOP)
      } else if (boundingClientRect.bottom <= rootBounds.top && !isIntersecting) {
        this.fire(true, stickyTarget, StickyEvents.POSITION_TOP)
      }
    }, Object.assign({
      threshold: 0
    }, !(this.container instanceof HTMLDocument) && {
      root: this.container
    }))
  }

  /**
   * Sets up an intersection observer to notify `document` when elements with the `ClassName.SENTINEL_BOTTOM` become
   * visible/hidden at the bottom of the sticky container.
   *
   * @returns {IntersectionObserver}
   */

  createFooterObserver () {
    return new IntersectionObserver(([record]) => {
      const { boundingClientRect, isIntersecting, rootBounds } = record
      const stickyTarget = record.target.parentElement.querySelector(this.stickySelector)

      if (boundingClientRect.top < rootBounds.top && boundingClientRect.bottom < rootBounds.bottom && !isIntersecting) {
        this.fire(false, stickyTarget, StickyEvents.POSITION_BOTTOM)
      } else if (boundingClientRect.bottom > rootBounds.top && this.isSticking(stickyTarget) && isIntersecting) {
        this.fire(true, stickyTarget, StickyEvents.POSITION_BOTTOM)
      }
    }, Object.assign({
      threshold: 1
    }, !(this.container instanceof HTMLDocument) && {
      root: this.container
    }))
  }

  /**
   * Dispatch the following events:
   * - `sticky-change`
   * - `sticky-stuck` or `sticky-unstuck`
   *
   * @param {Boolean} isSticky
   * @param {Element} stickyTarget
   * @param {StickyEvents.POSITION_BOTTOM|StickyEvents.POSITION_TOP} position
   */

  fire (isSticky, stickyTarget, position) {
    // Fire some events if the state is changing

    stickyTarget.dispatchEvent(new CustomEvent(StickyEvents.CHANGE, { detail: { isSticky, position }, bubbles: true }))
    stickyTarget.dispatchEvent(new CustomEvent(isSticky ? StickyEvents.STUCK : StickyEvents.UNSTUCK, { detail: { isSticky, position }, bubbles: true }))

    // Update the sticky state

    this.state.set(stickyTarget, { isSticky })
  }

  /**
   * Determine the position of the sentinel
   *
   * @param {Element|Node} stickyElement
   * @param {Element|Node} sentinel
   * @param {String} className
   * @returns {Object}
   */

  getSentinelPosition (stickyElement, sentinel, className) {
    const stickyStyle = window.getComputedStyle(stickyElement)
    const parentStyle = window.getComputedStyle(stickyElement.parentElement)

    switch (className) {
      case ClassName.SENTINEL_TOP:
        return {
          top: `calc(${stickyStyle.getPropertyValue('top')} * -1)`,
          height: 1
        }

      case ClassName.SENTINEL_BOTTOM:
        const parentPadding = parseInt(parentStyle.paddingTop)

        return {
          bottom: stickyStyle.top,
          height: `${stickyElement.getBoundingClientRect().height + parentPadding}px`
        }
    }
  }

  /**
   * Determine if the sticky element is currently sticking in the browser
   *
   * @param {Element} stickyElement
   * @returns {boolean}
   */

  isSticking (stickyElement) {
    const topSentinel = stickyElement.previousElementSibling

    const stickyOffset = stickyElement.getBoundingClientRect().top
    const topSentinelOffset = topSentinel.getBoundingClientRect().top
    const difference = Math.round(Math.abs(stickyOffset - topSentinelOffset))

    const topSentinelTopPosition = Math.abs(parseInt(window.getComputedStyle(topSentinel).getPropertyValue('top')))

    return difference !== topSentinelTopPosition
  }
}

// Events

StickyEvents.CHANGE = 'sticky-change'
StickyEvents.STUCK = 'sticky-stuck'
StickyEvents.UNSTUCK = 'sticky-unstuck'

// Position

StickyEvents.POSITION_BOTTOM = 'bottom'
StickyEvents.POSITION_TOP = 'top'
