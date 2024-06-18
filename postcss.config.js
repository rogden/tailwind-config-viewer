import tailwindConfig from './tailwind.config'
import autoprefixer from 'autoprefixer'
import tailwind from 'tailwindcss'

export default {
  plugins: [
    tailwind(tailwindConfig),
    autoprefixer
  ],
}
