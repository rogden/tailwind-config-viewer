<template>
  <div class="">
    <div class="flex mb-6">
      <button
        class="w-40 bg-gray-200 hover:bg-gray-400 py-2 px-4 text-sm rounded-tl rounded-bl border border-gray-400 focus:outline-none"
        :class="{'bg-gray-400': selectedProp === 'p'}"
        @click="selectedProp = 'p'">Padding</button>
      <button
        class="w-40 bg-gray-200 hover:bg-gray-400 py-2 px-4 text-sm border-t border-b border-gray-400 focus:outline-none"
        :class="{'bg-gray-400': selectedProp === 'm'}"
        @click="selectedProp = 'm'">Margin</button>
      <button
        class="w-40 bg-gray-200 hover:bg-gray-400 py-2 px-4 text-sm rounded-tr rounded-br border border-gray-400 focus:outline-none"
        :class="{'bg-gray-400': selectedProp === '-m'}"
        @click="selectedProp = '-m'">Negative Margin</button>
      <select
        class="ml-2 bg-gray-200 border border-gray-400 rounded w-40"
        v-model="dimensionProp">
        <option value="">All</option>
        <option value="t">Top</option>
        <option value="r">Right</option>
        <option value="b">Bottom</option>
        <option value="l">Left</option>
        <option value="x">Horizontal</option>
        <option value="y">Vertical</option>
      </select>
    </div>
    <div>
      <div
        v-for="(value, prop) in data"
        :key="prop"
        class="mb-6x py-3 border-t"
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
  }
}
</script>
