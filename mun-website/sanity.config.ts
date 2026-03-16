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
          enable: 'https://unhasmun-website.vercel.app/world-review',
        },
      },
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
