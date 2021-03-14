<template>
  <div class="bg-gray-100 dark:bg-midnight">
    <div
      v-if="!config"
      style="height: calc(100vh - 63px);"
      class="flex items-center justify-center">
        <p class="text-gray-600 text-center font-bold">Loading Config...</p>
    </div>
    <template v-if="config">
      <div class="pt-8 px-3 flex">
        <div class="hidden md:block flex-none h-full overflow-y-auto top-0 sticky max-h-screen">
          <ToggleSwitch
            name="dark-mode"
            class="mt-3 ml-3"
            :value="darkMode"
            @input="$emit('toggle-dark-mode', $event)"
            label="Dark Mode"
          />
          <nav class="w-56 pt-6 pb-12 px-3 h-full">
            <a
              v-for="section in configTransformed"
              :key="section.title"
              :href="`#${section.title}`"
              class="relative flex items-center py-2 hover:text-gray-900 dark-hover:text-gray-200 text-base rounded-sm"
              :class="[activeSection === section ? 'text-gray-900 dark:text-gray-200' : 'text-gray-700 dark:text-gray-500']"
              @click="setActiveSection(section)"
            >
              <div
                class="absolute rounded-full bg-gray-500 dark:bg-gray-600 transition duration-200"
                :class="[activeSection === section ? 'visible opacity-100' : 'invisible opacity-0']"
                :style="{width: '5px', height: '5px', left: '-12px'}"
              />
              {{ section.title }}
            </a>
          </nav>
        </div>
        <div>
          <CanvasSection
            v-for="section in configTransformed"
            :key="section.title"
            :title="section.title"
            :id="section.title"
          >
            <Intersect
              :threshold="[0.0]"
              rootMargin="-40% 0px -60% 0px"
              @enter="setActiveSection(section)"
              @leaave="setActiveSection(null)"
            >
              <component
                :is="sectionComponent(section.component)"
                :data="section.data"
                :config="config"
              />
            </Intersect>
          </CanvasSection>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import defu from 'defu'
import Intersect from 'vue-intersect'
import themeComponentMapper from './themeComponentMapper'
import CanvasSection from './CanvasSection'
import ToggleSwitch from '../ToggleSwitch'
import defaultOptions from '../../defaultOptions'

export default {
  components: {
    CanvasSection,
    ToggleSwitch,
    Intersect
  },

  provide () {
    return {
      prefixClassName: this.prefixClassName,
      getConfig: this.getConfig
    }
  },

  props: {
    darkMode: {
      type: Boolean,
      required: false
    }
  },

  data () {
    return {
      activeSection: null,
      config: null,
      configTransformed: null
    }
  },

  methods: {
    sectionComponent (component) {
      return require(`./Sections/${component}.vue`).default
    },

    prefixClassName (className) {
      return this.config.prefix ? `${this.config.prefix}${className}` : className
    },

    getConfig () {
      return this.config
    },

    setActiveSection (section) {
      this.activeSection = section
    }
  },

  async mounted () {
    const config = await fetch(window.__TCV_CONFIG.configPath)
    this.config = await config.json()
    this.config = defu(this.config, defaultOptions)
    this.configTransformed = themeComponentMapper(this.config.theme)
  }
}
</script>
