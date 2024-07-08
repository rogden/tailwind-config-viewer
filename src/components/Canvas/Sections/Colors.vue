<template>
  <div>
    <StickySectionHeader id="section-colors">
      <div class="flex">
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
        <span class="flex items-center mx-4 dark:text-white">
          <input type="checkbox" id="groupColors" v-model="groupColors" class="mr-2">
          <label class="cursor-pointer" for="groupColors">Group colors</label>
        </span>
      </div>
    </StickySectionHeader>

    <div v-if="!groupColors" class="flex flex-wrap -mb-4 mt-6">
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

    <template v-else>
      <div v-for="(items, groupName) in groupedColorItems" :key="groupName">
        <h3 class="text-xl mt-6 mb-2 font-semibold capitalize dark:text-white">{{ groupName }}</h3>
        <ul class="flex-container">
          <li v-for="item in items" :key="item.id" class="flex-item">
            <div
              class="mb-2 flex-none w-full md:w-36 h-16 md:h-36 flex items-center justify-center"
              :class="{'border border-gray-300': selectedProp === 'textColor'}"
              :style="tileStyle(item.value)"
            >
              <span
                class="text-3xl"
                :style="{
                  color: item.value
                }"
                v-if="selectedProp === 'textColor'">Aa</span>
            </div>
            <CanvasBlockLabel
              :label="`${selectedPropClassPrefix}-${item.key}`"
              :value="item.value"
            />
          </li>
        </ul>
      </div>
    </template>

  </div>
</template>

<script>
import CanvasBlockLabel from '../CanvasBlockLabel'
import ButtonGroup from '../../ButtonGroup'
import Button from '../../Button'
import StickySectionHeader from '../../StickySectionHeader'

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
      selectedProp: 'backgroundColor',
      groupColors: false
    }
  },

  computed: {
    selectedColorItems () {
      return this.data[this.selectedProp]
    },

    groupedColorItems () {
      return this.groupColorByName(this.selectedColorItems)
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
    },
    groupColorByName (items) {
      const groups = {}
      for (const key in items) {
        if (items.hasOwnProperty(key)) {
          const group = key.substring(0, key.lastIndexOf('-'))
          if (!groups[group]) {
            groups[group] = []
          }
          groups[group].push({ key, value: items[key] })
        }
      }
      return groups
    }
  }
}
</script>

<style>
.flex-container {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: flex-start;
  align-items: flex-start;
}

.flex-item {
  flex-basis: 5%;
}
</style>
