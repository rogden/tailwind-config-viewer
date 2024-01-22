<template>
  <div>
    <StickySectionHeader id="section-colors">
      <ButtonGroup>
        <Button
          class="w-full sm:w-32"
          :selected="selectedProp === 'backgroundColor'"
          @click="selectedProp = 'backgroundColor'"
        >
          Background
        </Button>
        <Button
          class="w-full sm:w-32"
          :selected="selectedProp === 'textColor'"
          @click="selectedProp = 'textColor'"
        >
          Text
        </Button>
        <Button
          class="w-full sm:w-32"
          :selected="selectedProp === 'borderColor'"
          @click="selectedProp = 'borderColor'"
        >
          Border
        </Button>
      </ButtonGroup>
    </StickySectionHeader>
    <div class="flex flex-wrap -mb-4 mt-6">
      <div
        v-for="(value, prop) in selectedColorItems"
        :key="prop"
        class="w-full md:w-36 mb-4 md:mr-4"
      >
        <div
          class="mb-2 flex-none w-full md:w-36 h-16 md:h-36 flex items-center justify-center"
          :class="{'border border-gray-300': selectedProp === 'textColor'}"
          :style="tileStyle(value)"
        >
          <span
            class="text-3xl"
            :style="{
              color: value
            }"
            v-if="selectedProp === 'textColor'">Aa</span>
        </div>
        <CanvasBlockLabel
          :label="`${selectedPropClassPrefix}-${prop}`"
          :value="value"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CanvasBlockLabel from '../CanvasBlockLabel.vue'
import ButtonGroup from '../../ButtonGroup.vue'
import Button from '../../Button.vue'
import StickySectionHeader from '../../StickySectionHeader.vue'

export default {
  components: {
    CanvasBlockLabel,
    ButtonGroup,
    Button,
    StickySectionHeader
  },

  props: {
    data: {
      type: Object,
      required: true
    }
  },

  data () {
    return {
      selectedProp: 'backgroundColor'
    }
  },

  computed: {
    selectedColorItems () {
      return this.data[this.selectedProp]
    },

    selectedPropClassPrefix () {
      const map = {
        backgroundColor: 'bg',
        textColor: 'text',
        borderColor: 'border'
      }

      return map[this.selectedProp]
    }
  },

  methods: {
    tileStyle (value) {
      if (this.selectedProp === 'backgroundColor') {
        return {
          backgroundColor: value
        }
      }

      if (this.selectedProp === 'borderColor') {
        return {
          border: `2px solid ${value}`
        }
      }
    }
  }
}
</script>
