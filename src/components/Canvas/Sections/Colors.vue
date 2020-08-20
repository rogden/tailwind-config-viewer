<template>
  <div>
    <ButtonGroup class="mb-6">
      <Button
        class="w-full sm:w-32"
        :selected="selectedProp === 'bg'"
        @click="selectedProp = 'bg'"
      >
        Background
      </Button>
      <Button
        class="w-full sm:w-32"
        :selected="selectedProp === 'text'"
        @click="selectedProp = 'text'"
      >
        Text
      </Button>
      <Button
        class="w-full sm:w-32"
        :selected="selectedProp === 'border'"
        @click="selectedProp = 'border'"
      >
        Border
      </Button>
    </ButtonGroup>
    <div class="flex flex-wrap -mb-4">
      <div
        v-for="(value, prop) in data"
        :key="prop"
        class="w-36 mb-4 mr-4"
      >
        <div
          class="mb-2 flex-none w-36 h-36 flex items-center justify-center"
          :class="{'border border-gray-300': selectedProp === 'text'}"
          :style="tileStyle(value)"
        >
          <span
            class="text-3xl"
            :style="{
              color: value
            }"
            v-if="selectedProp === 'text'">Aa</span>
        </div>
        <CanvasBlockLabel
          :label="`${selectedProp}-${prop}`"
          :value="value"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CanvasBlockLabel from '../CanvasBlockLabel'
import ButtonGroup from '../../ButtonGroup'
import Button from '../../Button'

export default {
  components: {
    CanvasBlockLabel,
    ButtonGroup,
    Button
  },

  props: {
    data: {
      type: Object,
      required: true
    }
  },

  data () {
    return {
      selectedProp: 'bg'
    }
  },

  methods: {
    tileStyle (value) {
      if (this.selectedProp === 'bg') {
        return {
          backgroundColor: value
        }
      }

      if (this.selectedProp === 'border') {
        return {
          border: `2px solid ${value}`
        }
      }
    }
  }

}
</script>
