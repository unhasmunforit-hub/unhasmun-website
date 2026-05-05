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
          enable:
            (typeof window !== 'undefined' && window.location.hostname === 'localhost'
              ? 'http://localhost:3000'
              : 'https://unhasmun-website.vercel.app') +
            '/api/draft?secret=unhas_mun_preview_99x2_secure',
        },
      },
      // Izinkan koneksi dari localhost dan Vercel
      resolve: {
        mainDocuments: [
          {
            route: '/world-review/:slug',
            filter: "_type == 'article' && slug.current == $slug",
          },
        ],
      },
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
