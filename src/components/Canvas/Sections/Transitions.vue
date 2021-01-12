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
      <ToggleSwitch
        name="enable-delay"
        class="mt-8 md:ml-4"
        v-model="enableDelay"
        label="Enable Delay"
      />
    </div>
    <VueDraggableResizable
      parent
      :draggable="false"
      :handles="['mr']"
      w="auto"
      h="auto"
      :min-width="220"
    >
      <div class="space-y-6">
        <div
          v-for="(value, key) in data.timing"
          :key="key"
        >
          <CanvasSectionRow class="transition-container relative" v-slot="{blockClasses}">
            <div
              :class="['transition-container__block absolute w-28', blockClasses]"
              :style="{
                transitionTimingFunction: value,
                transitionDuration: selectedDuration,
                transitionDelay: enableDelay ? selectedDelay : '0s'
              }">
            </div>
          </CanvasSectionRow>

          <div class="sm:flex mb-2 sm:mb-0 sm:divide-x">
            <CanvasBlockLabel
              :label="removeDefaultSuffix(`ease-${key}`)"
              :value="value"
            />
          </div>
        </div>
      </div>
    </VueDraggableResizable>
  </div>
</template>

<script>
import VueDraggableResizable from 'vue-draggable-resizable'
import CanvasBlockLabel from '../CanvasBlockLabel'
import CanvasSectionRow from '../CanvasSectionRow'
import Select from '../../Select'
import ToggleSwitch from '../../ToggleSwitch'
import { removeDefaultSuffix } from '@/utils'

export default {
  components: {
    CanvasBlockLabel,
    CanvasSectionRow,
    VueDraggableResizable,
    Select,
    ToggleSwitch
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
  },

  methods: {
    removeDefaultSuffix
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

    .mode-dark & {
      @apply border-gray-700;

      &:after,
      &:before {
        @apply bg-gray-700;
      }
    }

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
