<template>
  <div class="relative">
    <div
      :class="{show: showCopyTooltip}"
      class="tooltip pointer-events-none absolute py-1 px-2 text-sm bg-gray-800 text-white rounded">{{ copyText }}</div>
    <input
      class="hidden"
      readonly
      ref="label"
      :value="prefixClassName(label)"
    >
    <div
      class="
        inline-block
        text-sm text-gray-800 dark:text-gray-400
        font-mono hover:text-teal-600 dark-hover:text-teal-400
        cursor-pointer break-words
      "
      @click="copy"
      @mouseover="showCopy"
      @mouseout="hideCopy"
    >
      {{ prefixClassName(label) }}
    </div>
    <div v-if="value" class="text-sm text-gray-600 dark:text-gray-500 break-words">
      {{ value }}
    </div>
  </div>
</template>

<script>
export default {
  inject: [
    'prefixClassName'
  ],

  props: {
    label: {
      type: String,
      required: true
    },

    value: {
      type: String
    }
  },

  data () {
    return {
      showCopyTooltip: false,
      copyText: 'Copy'
    }
  },

  methods: {
    copy () {
      // input needs to be visible in order for text to be selected/copied
      this.$refs.label.classList.remove('hidden')
      this.$refs.label.select()
      this.copyText = 'Copied'
      document.execCommand('copy')
      this.$refs.label.blur()
      // hide input now that we copied the text to clipoard
      this.$refs.label.classList.add('hidden')
      window.getSelection().removeAllRanges()
    },

    showCopy () {
      this.copyText = 'Copy'
      this.showCopyTooltip = true
    },

    hideCopy () {
      this.showCopyTooltip = false
    }
  }
}
</script>

<style scoped>
.tooltip {
  bottom: 100%;
  opacity: 0;
  transform: translateY(10px);
  visibility: hidden;
  transition: .15s ease-out;
}

.tooltip.show {
  opacity: 1;
  transform: translateY(0);
  visibility: visible;
}
</style>
