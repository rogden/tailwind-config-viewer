<template>
  <div>
    <div class="md:flex items-center mb-6">
      <!-- <label for="transition-duration" class="font-medium text-sm mb-1">Duration</label> -->
      <div class="mb-2 md:mb-0 md:mr-4">
        <CanvasBlockLabel
          :label="`duration-${selectedDurationKey}`"
        />
        <div class="relative w-full mt-2 md:w-32">
          <svg
            class="absolute pointer-events-none"
            style="right: 10px; top: calc(50% - 6px);"
            width="11" height="11" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.657 4.243h3.76a.2.2 0 0 1 .141.341l-3.76 3.76a.2.2 0 0 1-.283 0l-3.76-3.76a.2.2 0 0 1 .142-.341h3.76z" fill="#B8C2CC"></path></svg>
          <select
            id="transition-duration"
            class="h-full w-full px-4 py-2 border bg-white border-gray-400 rounded text-sm appearance-none"
            v-model="selectedDurationKey"
          >
            <option v-for="(value, key) in data.duration" :key="key" :value="key">{{ value }}</option>
          </select>
        </div>
      </div>
      <div>
        <div class="flex items-center">
          <CanvasBlockLabel
            :label="`delay-${selectedDelayKey}`"
          />
        </div>
        <div class="relative w-full mt-2 md:w-32">
          <svg
            class="absolute pointer-events-none"
            style="right: 10px; top: calc(50% - 6px);"
            width="11" height="11" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.657 4.243h3.76a.2.2 0 0 1 .141.341l-3.76 3.76a.2.2 0 0 1-.283 0l-3.76-3.76a.2.2 0 0 1 .142-.341h3.76z" fill="#B8C2CC"></path></svg>
          <select
            id="transition-duration"
            class="h-full w-full px-4 py-2 border bg-white border-gray-400 rounded text-sm appearance-none"
            v-model="selectedDelayKey"
          >
            <option v-for="(value, key) in data.delay" :key="key" :value="key">{{ value }}</option>
          </select>
        </div>
      </div>
      <label for="enableDelay" class="inline-flex items-center mt-8 ml-4">
        <input id="enableDelay" class="mr-1" type="checkbox" v-model="enableDelay">
        <span class="text-xs text-gray-600">Enable Delay</span>
      </label>
    </div>
    <VueDraggableResizable
      parent
      :draggable="false"
      :handles="['mr']"
      w="auto"
      :min-width="128"
      max-width="auto"
      class="foo"
      h="100%"
    >
      <div class="space-y-4">
        <div
          v-for="(value, key) in data.timing"
          :key="key"
        >
            <div class="transition-container relative mb-2 h-32 bg-gray-200">
              <div
                class="transition-container__block absolute w-32 h-32 bg-gray-400"
                :style="{
                  transitionTimingFunction: value,
                  transitionDuration: selectedDuration,
                  transitionDelay: enableDelay ? selectedDelay : '0s'
                }">
              </div>
            </div>

          <div class="sm:flex mb-2 sm:mb-0 sm:divide-x">
            <CanvasBlockLabel
              :label="`ease-${key}`"
              :value="value"
            />
          </div>
        </div>
      </div>
    </VueDraggableResizable>
  </div>
</template>

<script>
import CanvasBlockLabel from '../CanvasBlockLabel'
import VueDraggableResizable from 'vue-draggable-resizable'

export default {
  components: {
    CanvasBlockLabel,
    VueDraggableResizable
  },

  props: {
    data: {
      type: Object,
      required: true
    }
  },

  data () {
    return {
      selectedDurationKey: Object.keys(this.data.duration)[0],
      selectedDelayKey: Object.keys(this.data.delay)[0],
      enableDelay: false
    }
  },

  computed: {
    selectedDuration () {
      return this.data.duration[this.selectedDurationKey]
    },

    selectedDelay () {
      return this.data.delay[this.selectedDelayKey]
    }
  }
}
</script>

<style lang="scss">
.transition-container {
  &__block {
    right: calc(100% - theme('spacing.32'));
  }

  &:hover &__block {
    right: 0;
  }
}

.resizable {
  position: relative;
}

.handle-mr {
  display: flex !important;
  @apply
    items-center
    justify-around
    absolute
    z-50
    border-l
    ml-1
    w-5;
    height: calc(100% - 52px);
    left: 100%;

    &:hover {
      cursor: col-resize;
    }

    &:after,
    &:before {
      content: '';
      margin-top: -50px;
      height: 36px;
      width: 2px;
      @apply bg-gray-300;
    }

    &:after {
      margin-right: 5px;
    }

    &:before {
      margin-left: 5px;
    }
}
</style>
