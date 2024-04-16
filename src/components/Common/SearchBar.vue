<!-- eslint-disable unused-imports/no-unused-vars -->
<script setup lang="ts">
import { computed, ref } from 'vue'
import { useFakeData } from '@/store/data'
import type { DriveItem } from '@/types'

const data = useFakeData()
const listResult = ref<DriveItem[]>([])
const driveItem = (computed(() => data.driveData) as any) as DriveItem
const searchContent = ref('')

const showModalAdvancedSearch = ref(false)

function openModalAdvancedSearch() { 
  showModalAdvancedSearch.value = true
}
function closeModalAdvancedSearch() {
  showModalAdvancedSearch.value = false
}
function clearSearchContent(): void {
  searchContent.value = ''
}

// function handleSearch(data: DriveItem[]) {
//   listResult.value = data;
// }
</script>

<template>
  <div :class="$style.search">
    <div :class="[$style.searchIconButton, $style.searchIconSearch]">
      <ButtonIcon tooltip-content="Tìm kiếm" bold>
        <Search />
      </ButtonIcon>
    </div>
    <div
      :class="[$style.searchIconButton, $style.searchIconClose]"
      @click="clearSearchContent"
    >
      <ButtonIcon tooltip-content="Xóa nội dung tìm kiếm" bold>
        <CloseBold />
      </ButtonIcon>
    </div>
    <div
      :class="[$style.searchIconButton, $style.searchIconOperation]"
      @click="openModalAdvancedSearch"
    >
      <ButtonIcon tooltip-content="Tìm kiếm nâng cao">
        <Operation />
      </ButtonIcon>
    </div>
    <input v-model="searchContent" type="text" :class="$style.searchInput" placeholder="Tìm trong Drive">
    <!-- <input v-model="searchContent" @input="handleSearch($searchDriveItem(driveItem.children))" type="text" :class="$style.searchInput" placeholder="Tìm trong Drive"> -->
    <ModalAdvancedSearch v-if="showModalAdvancedSearch" @close="closeModalAdvancedSearch"/>
  </div>
</template>

<style lang="scss" module>
    .search {
        position: relative;
        background-color: #E9EEF6;
        border-radius: 24px;
        max-width: 720px;
        height: 100%;

    }
    .searchInput {
        padding: 0 96px 0 56px ;
        height: 100%;
        width: 100%;
        border: none;
        background-color: transparent;
        outline: none;
        font-size: 16px;
        line-height: 27px;
        border-radius: 24px;

        &::placeholder {
            color: #1f1f1f;
        }

        &:focus {
            background-color: #fff;
            box-shadow: 1px 1px 3px rgba(0,0,0,.35);
        }
    }

    .searchIconButton {
        position: absolute;
        top: 0;
        margin: 3px;
        padding: 0 5px;
    }

    .searchIconSearch {
        left: 0;
    }

    .searchIconClose {
        right: 44px;
    }

    .searchIconOperation {
        right: 0;
    }
</style>
