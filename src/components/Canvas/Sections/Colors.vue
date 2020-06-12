<template>
  <div>
    <div class="flex mb-6">
      <button
        class="w-full lg:w-40 hover:bg-gray-300 py-2 px-4 text-sm rounded-tl rounded-bl border border-gray-400 focus:outline-none"
        :class="{'bg-gray-300': selectedProp === 'bg'}"
        @click="selectedProp = 'bg'">Background</button>
      <button
        class="w-full lg:w-40 hover:bg-gray-300 py-2 px-4 text-sm border-t border-b border-gray-400 focus:outline-none"
        :class="{'bg-gray-300': selectedProp === 'text'}"
        @click="selectedProp = 'text'">Text</button>
      <button
        class="w-full lg:w-40 hover:bg-gray-300 py-2 px-4 text-sm rounded-tr rounded-br border border-gray-400 focus:outline-none"
        :class="{'bg-gray-300': selectedProp === 'border'}"
        @click="selectedProp = 'border'">Border</button>
    </div>
    <div class="flex flex-wrap -mb-4">
      <div
        v-for="(value, prop) in data"
        :key="prop"
        class="mb-4"
      >
        <div
          class="mr-4 mb-2 flex-none w-40 h-40 flex items-center justify-center"
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
