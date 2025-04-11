import {defineCliConfig} from '@sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'ykv73jdw',
    dataset: 'meiflume'
  },
  /**
   * Enable auto-updates for studios.
   * Learn more at https://www.sanity.io/docs/cli#auto-updates
   */
  autoUpdates: true,
  studioHost: 'meiflume'
})
