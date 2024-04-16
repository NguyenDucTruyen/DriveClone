import { defineStore } from 'pinia'

import dataJson from '@/assets/data/FakeData.json'

import type { DriveFolder, DriveItem } from '@/types'

export const useFakeData = defineStore('data', {
  state: () => ({ driveData: dataJson }),
  actions: {
    findFolderById(data: DriveItem[], id: string): DriveFolder | null {
      for (const item of data) {
        if (item.kind === 'drive#folder' && item.id === id) {
          return item as DriveFolder
        }
        else if (item.kind === 'drive#folder' && item.children) {
          const foundFolder = this.findFolderById(item.children, id)
          if (foundFolder)
            return foundFolder
        }
      }
      return null
    },
    addItemToFolder(idParent: string, item: DriveItem): void {
      const folder = this.findFolderById(this.driveData.children, idParent);
      if (folder) {
        folder.children!.push(item);
        item.parents!.push(idParent);
      }
    }
  },
})
