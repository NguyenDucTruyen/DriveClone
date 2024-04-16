import { App } from 'vue'
import type { DriveItem } from '../src/types'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $getNumber: (value: number) => string
    $searchDriveItem :(data: DriveItem[], name: string) => DriveItem[]
  }
}
