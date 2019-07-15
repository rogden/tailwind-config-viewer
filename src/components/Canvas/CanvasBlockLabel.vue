<template>
  <div class="relative">
    <div
      :class="{show: showCopyTooltip}"
      class="tooltip pointer-events-none absolute py-1 px-2 text-sm bg-gray-800 text-white rounded">{{ copyText }}</div>
    <input
      class="
        text-sm text-gray-700
        font-semibold hover:text-teal-600
        bg-transparent
        inline-block rounded
        cursor-pointer focus:outline-none
      "
      readonly
      ref="label"
      :value="label"
      @click="copy"
      @mouseover="showCopy"
      @mouseout="hideCopy"
    >
    <div class="text-sm text-gray-600 break-words">
      {{ value }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
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
      this.$refs.label.select()
      this.copyText = 'Copied'
      document.execCommand('copy')
      this.$refs.label.blur()
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
