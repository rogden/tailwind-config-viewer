<template>
  <div>
    <div class="md:flex mb-6">
      <ButtonGroup class="mb-2 md:mb-0">
        <Button
          class="w-full sm:w-32"
          :selected="selectedProp === 'p'"
          @click="selectedProp = 'p'"
        >
          Padding
        </Button>
        <Button
          class="w-full sm:w-32"
          :selected="selectedProp === 'm'"
          @click="selectedProp = 'm'">Margin</Button>
        <Button
          class="w-full sm:w-auto"
          :selected="selectedProp === '-m'"
          @click="selectedProp = '-m'">Negative Margin</Button>
      </ButtonGroup>
      <Select
        class="w-full md:w-32 md:ml-2"
        :options="$options.dimensionOptions"
        v-model="dimensionProp"
      />
    </div>
    <div class="space-y-6">
      <div
        v-for="({value, prop}) in spacing"
        :key="prop"
      >
        <div
          class="mb-2 bg-gray-400 dark:bg-gray-700"
          :style="{
            width: value,
            height: value,
          }"
        />
        <CanvasBlockLabel
          :label="`${selectedProp}${dimensionProp ? dimensionProp : ''}-${prop}`"
          :value="value"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { remToPx } from '@/utils'
import CanvasBlockLabel from '../CanvasBlockLabel'
import ButtonGroup from '../../ButtonGroup'
import Button from '../../Button'
import Select from '../../Select'

export default {
  components: {
    CanvasBlockLabel,
    ButtonGroup,
    Button,
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
      selectedProp: 'p',
      dimensionProp: ''
    }
  },

  dimensionOptions: {
    '': 'All',
    't': 'Top',
    'r': 'Right',
    'b': 'Bottom',
    'l': 'Left',
    'x': 'Horizontal',
    'y': 'Vertical'
  },

  computed: {
    spacing () {
      return Object
        .keys(this.data)
        .sort((keyA, keyB) => {
          const aInPx = this.data[keyA].indexOf('rem') !== -1 ? remToPx(this.data[keyA]) : parseFloat(this.data[keyA])
          const bInPx = this.data[keyB].indexOf('rem') !== -1 ? remToPx(this.data[keyB]) : parseFloat(this.data[keyB])
          return aInPx - bInPx
        })
        .map(key => {
          return {
            prop: key,
            value: this.data[key]
          }
        })
    }
  }
}
</script>
