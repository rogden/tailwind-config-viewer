<template>
  <div>
    <form class="mb-10">
      <input
        id="file"
        type="file"
        name="file"
        class="absolute opacity-0 w-0 h-0 overflow-hidden"
        @change="fileSelected">
      <label for="file" class="inline-block p-4 bg-blue-400 hover:bg-blue-500 text-white">Upload Tailwind Config</label>
    </form>
    <template v-if="config">
      <div class="flex">
        <nav class="w-56 flex-none px-3 h-full top-0 sticky">
          <h2 class="font-bold text-lg">Sections</h2>
          <a
            v-for="section in configTransformed"
            :key="section.title"
            :href="`#${section.title}`"
            class="block py-2 px-3 text-gray-600 hover:text-gray-900 hover:bg-gray-200 text-lg rounded-sm"
          >
            {{ section.title }}
          </a>
        </nav>
        <div>
          <CanvasSection v-for="section in configTransformed" :key="section.title" :title="section.title" :id="section.title">
            <component :is="sectionComponent(section.component)" :data="section.data" />
          </CanvasSection>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import configParser, { transformThemeForCanvas } from '@/lib/twConfigParser'
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
        console.log(e)
        this.config = configParser(e.target.result)
        this.configTransformed = transformThemeForCanvas(this.config)
        console.log(this.config)
      }
      fr.readAsText(e.target.files[0])
    }
  }
}
</script>
