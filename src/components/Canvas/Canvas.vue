<template>
  <div class="bg-white">
    <div
      v-if="!config"
      style="height: calc(100vh - 63px);"
      class="flex items-center justify-center">
      <form
        class="
          flex flex-col
          p-16
          max-w-sm
          rounded-lg
          border-2 border-dashed border-bg-gray-200 bg-white"
      >
        <p class="mb-3 text-gray-600 text-center font-bold">Upload your Tailwind config file</p>
        <input
          id="file"
          type="file"
          name="file"
          class="absolute opacity-0 w-0 h-0 overflow-hidden"
          @change="fileSelected">
        <label for="file" class="inline-block p-4 bg-teal-500 hover:bg-teal-600 rounded cursor-pointer text-center text-white">Upload Tailwind Config</label>
      </form>
    </div>
    <template v-if="config">
      <div class="pt-8 px-3 flex">
        <div class="hidden md:block flex-none h-full overflow-y-auto top-0 sticky max-h-screen">
          <nav class="w-56 py-12 px-3 h-full">
            <a
              v-for="section in configTransformed"
              :key="section.title"
              :href="`#${section.title}`"
              class="block py-2 text-gray-600 hover:text-gray-900 text-base rounded-sm"
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
import themeComponentMapper from '@/utils/themeComponentMapper'
import CanvasSection from './CanvasSection'
import Spacing from './Sections/Spacing'

export default {
  components: {
    CanvasSection,
    Spacing
  },

  data () {
    return {
      config: null,
      configTransformed: null
    }
  },

  methods: {
    sectionComponent: (component) => {
      return require(`./Sections/${component}.vue`).default
    },

    fileSelected (e) {
      const fr = new FileReader()
      fr.onload = (e) => {
        this.config = JSON.parse(e.target.result)
        this.configTransformed = themeComponentMapper(this.config)
      }
      fr.readAsText(e.target.files[0])
    }
  }
}
</script>
