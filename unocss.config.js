import { defineConfig, presetWind3, presetAttributify } from 'unocss'

export default defineConfig({
  presets: [
    presetWind3({
      preflight: true,
    }),
    presetAttributify(),
  ],
})
