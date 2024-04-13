<script setup lang="ts">
import { ref } from 'vue'

const searchContent = ref('')
function clearSearchContent(): void {
  searchContent.value = ''
}
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
    >
      <ButtonIcon tooltip-content="Tìm kiếm nâng cao">
        <Operation />
      </ButtonIcon>
    </div>
    <input v-model="searchContent" type="text" :class="$style.searchInput" placeholder="Tìm trong Drive">

    <span>{{ searchContent }}</span>
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
