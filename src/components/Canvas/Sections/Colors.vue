<template>
  <div>
    <div class="flex mb-6">
      <button
        class="w-32 bg-gray-200 hover:bg-gray-400 py-2 px-4 text-sm rounded-tl rounded-bl border border-gray-400 focus:outline-none"
        :class="{'bg-gray-400': selectedProp === 'bg'}"
        @click="selectedProp = 'bg'">Background</button>
      <button
        class="w-32 bg-gray-200 hover:bg-gray-400 py-2 px-4 text-sm border-t border-b border-gray-400 focus:outline-none"
        :class="{'bg-gray-400': selectedProp === 'text'}"
        @click="selectedProp = 'text'">Text</button>
      <button
        class="w-32 bg-gray-200 hover:bg-gray-400 py-2 px-4 text-sm rounded-tr rounded-br border border-gray-400 focus:outline-none"
        :class="{'bg-gray-400': selectedProp === 'border'}"
        @click="selectedProp = 'border'">Border</button>
    </div>
    <div class="flex flex-wrap">
      <button
        v-for="(value, prop) in data"
        :key="prop"
        class="flex px-1 py-1 md:w-1/3 xl:w-1/5 border-transparent border hover:border-gray-400 hover:bg-gray-200"
      >
        <div
        class="mr-2 flex-none"
        :style="{
          backgroundColor: value,
          width: '100px',
          height: '100px'
        }" />
        <div>
          <div class="text-sm font-semibold">{{selectedProp}}-{{ prop }}</div>
          <div class="text-sm text-left">{{ value }}</div>
        </div>
      </button>
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
      selectedProp: 'bg'
    }
  }

}
</script>
