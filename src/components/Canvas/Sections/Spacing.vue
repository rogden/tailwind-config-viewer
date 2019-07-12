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
    </div>
    <div class="flex mb-6">
      <button
        class="w-40 bg-gray-200 hover:bg-gray-400 py-2 px-4 text-sm rounded-tl rounded-bl border border-gray-400 focus:outline-none"
        :class="{'bg-gray-400': dimensionProp === ''}"
        @click="dimensionProp = ''">All</button>
      <button
        class="w-40 bg-gray-200 hover:bg-gray-400 py-2 px-4 text-sm border-t border-b border-r border-gray-400 focus:outline-none"
        :class="{'bg-gray-400': dimensionProp === 't'}"
        @click="dimensionProp = 't'">Top</button>
      <button
        class="w-40 bg-gray-200 hover:bg-gray-400 py-2 px-4 text-sm border-t border-b border-r border-gray-400 focus:outline-none"
        :class="{'bg-gray-400': dimensionProp === 'r'}"
        @click="dimensionProp = 'r'">Right</button>
      <button
        class="w-40 bg-gray-200 hover:bg-gray-400 py-2 px-4 text-sm border-t border-b border-r border-gray-400 focus:outline-none"
        :class="{'bg-gray-400': dimensionProp === 'b'}"
        @click="dimensionProp = 'b'">Bottom</button>
      <button
        class="w-40 bg-gray-200 hover:bg-gray-400 py-2 px-4 text-sm border-t border-b border-r border-gray-400 focus:outline-none"
        :class="{'bg-gray-400': dimensionProp === 'l'}"
        @click="dimensionProp = 'l'">Left</button>
      <button
        class="w-40 bg-gray-200 hover:bg-gray-400 py-2 px-4 text-sm border-t border-b border-gray-400 focus:outline-none"
        :class="{'bg-gray-400': dimensionProp === 'x'}"
        @click="dimensionProp = 'x'">Horizontal</button>
      <button
        class="w-40 bg-gray-200 hover:bg-gray-400 py-2 px-4 text-sm rounded-tr rounded-br border border-gray-400 focus:outline-none"
        :class="{'bg-gray-400': dimensionProp === 'y'}"
        @click="dimensionProp = 'y'">Vertical</button>
    </div>
    <div>
      <div
        v-for="(value, prop) in data"
        :key="prop"
        class="mb-4 p-2 hover:bg-gray-200"
      >
        <div class="text-xs mb-1">{{ selectedProp }}{{ dimensionProp ? dimensionProp : '' }}-{{ prop }}</div>
        <div
          class="bg-gray-400"
          :style="{
          width: value,
          height: '30px',
        }"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
