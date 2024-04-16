<script setup lang="ts">
import { computed, ref } from 'vue'
import { useFakeData } from '@/store/data'
import type { DriveItem } from '@/types'

const data = useFakeData()
const listResult = ref<DriveItem[]>([])
// eslint-disable-next-line unused-imports/no-unused-vars
const driveItem = (computed(() => data.driveData) as any) as DriveItem
const addData = ref<DriveItem>({
  kind: 'drive#file',
  id: 'exel mới',
  mimeType: 'application/vnd.google-apps.spreadsheet',
  name: 'Excel của Truyen',
  parents: [],
})

function pushData() {
  data.addItemToFolder('folder1', addData.value)
}

// function search(data: DriveItem[]) {
//   listResult.value = data;
// }
</script>

<template>
  <div>
    <!-- data: {{ data }} -->
    <button @click="pushData">
      Add data
    </button>
    <button>
    <!-- <button @click="search($searchDriveItem(driveItem.children, 'Truyen'))"> -->
      Search data
    </button>
    result: {{ listResult }}
  </div>
</template>
