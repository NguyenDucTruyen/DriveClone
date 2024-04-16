import type { App } from 'vue'
import type { DriveFolder, DriveItem } from '@/types'

export default {
  install: (app: App) => {
    app.config.globalProperties.$searchDriveItem = (data: DriveItem[], name: string): DriveItem[] => {
      const listDriveItem: DriveItem[] = []

      function readDriveItem(data: DriveItem[], nameItem: string) {
        for (const item of data) {
          if (item.name.includes(nameItem)) {
            listDriveItem.push(item)
            if (item.kind === 'drive#folder') {
              const children = item.children as DriveFolder[];
              readDriveItem(children, nameItem);
          }
          }

          else if (item.kind === 'drive#folder' && item.children) { readDriveItem(item.children, nameItem) }
        }
      }
      readDriveItem(data, name)
      console.log(listDriveItem)
      return listDriveItem
    }
  },
}
