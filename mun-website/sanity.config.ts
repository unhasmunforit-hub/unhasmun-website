import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {presentationTool} from 'sanity/presentation'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'MUN WEBSITE',

  projectId: '5ydkc73p',
  dataset: 'production',

  plugins: [
    structureTool(),
    visionTool(),
    presentationTool({
      previewUrl: {
        draftMode: {
          enable: 'http://localhost:3000/api/draft?secret=unhas_mun_preview_99x2_secure',
        },
      },
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
