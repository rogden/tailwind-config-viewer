<template>
  <div>
    <StickySectionHeader id="section-spacing">
      <div class="md:flex">
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
    </StickySectionHeader>
    <div class="space-y-6 mt-6">
      <div
        v-for="({value, prop}) in spacing"
        :key="prop"
      >
        <div
          class="mb-2 bg-gray-500 dark:bg-gray-700"
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
import StickySectionHeader from '../../StickySectionHeader'

export default {
  components: {
    CanvasBlockLabel,
    ButtonGroup,
    Button,
    Select,
    StickySectionHeader
  },

  props: {
    data: {
      type: Object,
      required: true
    },
    config: {
      type: Object
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
          const aInPx = this.data[keyA].indexOf('rem') !== -1 ? remToPx(this.data[keyA], this.config) : parseFloat(this.data[keyA])
          const bInPx = this.data[keyB].indexOf('rem') !== -1 ? remToPx(this.data[keyB], this.config) : parseFloat(this.data[keyB])
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
