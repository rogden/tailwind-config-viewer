<template>
  <div>
    <div class="lg:flex mb-6">
      <div class="flex w-full lg:w-auto mb-2 lg:mb-0">
        <button
          class="w-full lg:w-40 hover:bg-gray-300 py-2 px-4 text-sm rounded-tl rounded-bl border border-gray-400 focus:outline-none"
          :class="{'bg-gray-300': selectedProp === 'p'}"
          @click="selectedProp = 'p'">Padding</button>
        <button
          class="w-full lg:w-40 hover:bg-gray-300 py-2 px-4 text-sm border-t border-b border-gray-400 focus:outline-none"
          :class="{'bg-gray-300': selectedProp === 'm'}"
          @click="selectedProp = 'm'">Margin</button>
        <button
          class="w-full lg:w-40 hover:bg-gray-300 py-2 px-4 text-sm rounded-tr rounded-br border border-gray-400 focus:outline-none"
          :class="{'bg-gray-300': selectedProp === '-m'}"
          @click="selectedProp = '-m'">Negative Margin</button>
      </div>
      <div class="relative w-full lg:w-40 lg:ml-2">
        <svg
          class="absolute pointer-events-none"
          style="right: 10px; top: calc(50% - 6px);"
          width="11" height="11" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.657 4.243h3.76a.2.2 0 0 1 .141.341l-3.76 3.76a.2.2 0 0 1-.283 0l-3.76-3.76a.2.2 0 0 1 .142-.341h3.76z" fill="#B8C2CC"></path></svg>
        <select
          class="h-full w-full px-4 py-2 border bg-white border-gray-400 rounded text-sm appearance-none"
          v-model="dimensionProp"
        >
          <option value="">All</option>
          <option value="t">Top</option>
          <option value="r">Right</option>
          <option value="b">Bottom</option>
          <option value="l">Left</option>
          <option value="x">Horizontal</option>
          <option value="y">Vertical</option>
        </select>
      </div>
    </div>
    <div class="divide-y -my-4">
      <div
        v-for="({value, prop}) in spacing"
        :key="prop"
        class="py-4"
      >
        <div
          class="mb-2 bg-gray-400"
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

export default {
  components: {
    CanvasBlockLabel
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

  computed: {
    spacing () {
      return Object
        .keys(this.data)
        .sort((keyA, keyB) => {
          const aInPx = this.data[keyA].indexOf('rem') !== -1 ? remToPx(this.data[keyA]) : parseFloat(this.data[keyA])
          const bInPx = this.data[keyB].indexOf('rem') !== -1 ? remToPx(this.data[keyB]) : parseFloat(this.data[keyB])
          console.log(this.data[keyA], aInPx, bInPx)
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
