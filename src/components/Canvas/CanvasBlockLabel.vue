<template>
  <div class="relative">
    <div
      :class="{show: showCopyTooltip}"
      class="tooltip pointer-events-none absolute py-1 px-2 text-sm bg-gray-800 text-white rounded">{{ copyText }}</div>
    <input
      class="
        inline-block
        appearance-none bg-transparent
        text-sm text-gray-800
        font-mono hover:text-teal-600
        cursor-pointer focus:outline-none
      "
      readonly
      ref="label"
      :value="prefixClassName(label)"
      @click="copy"
      @mouseover="showCopy"
      @mouseout="hideCopy"
    >
    <div v-if="value" class="text-sm text-gray-600 break-words">
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
