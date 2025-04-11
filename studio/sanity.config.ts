import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'MeiFlume',

  projectId: 'ykv73jdw',
  dataset: 'meiflume',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
