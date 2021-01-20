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
              class="block py-2 text-gray-600 dark:text-gray-500 hover:text-gray-800 dark-hover:text-gray-200 text-base rounded-sm"
            >
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
            <component
              :is="sectionComponent(section.component)"
              :data="section.data"
              :config="config"
            />
          </CanvasSection>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import defu from 'defu'
import themeComponentMapper from './themeComponentMapper'
import CanvasSection from './CanvasSection'
import ToggleSwitch from '../ToggleSwitch'
import defaultOptions from '../../defaultOptions'

export default {
  components: {
    CanvasSection,
    ToggleSwitch
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
