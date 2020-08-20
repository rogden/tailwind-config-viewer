<template>
  <div>
    <div class="md:flex items-center mb-6">
      <div class="mb-2 md:mb-0 md:mr-4">
        <CanvasBlockLabel
          :label="`duration-${selectedDurationKey}`"
        />
        <Select
          class="w-full mt-2 md:w-32"
          :options="data.duration"
          v-model="selectedDurationKey"
        />
      </div>
      <div>
        <div class="flex items-center">
          <CanvasBlockLabel
            :label="`delay-${selectedDelayKey}`"
          />
        </div>
        <Select
          class="w-full mt-2 md:w-32"
          :options="data.delay"
          v-model="selectedDelayKey"
        />
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
            <div class="transition-container relative mb-2 h-28 bg-gray-200">
              <div
                class="transition-container__block absolute w-28 h-28 bg-gray-400"
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
import Select from '../../Select'
import VueDraggableResizable from 'vue-draggable-resizable'

export default {
  components: {
    CanvasBlockLabel,
    VueDraggableResizable,
    Select
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
    right: calc(100% - theme('spacing.28'));
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
