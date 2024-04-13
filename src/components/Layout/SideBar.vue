<script setup lang="ts">
  
</script>

<template>
  <div :class="$style.sideBar">
    <div :class="$style.sideBarUpload">
      <button :class="$style.sideBarUploadButton">
        <el-icon :size="24">
          <Plus />
        </el-icon>
        <span :class="$style.sideBarUploadButtonText">Mới</span>
      </button>
    </div>
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      :class="$style.sideBarMenu"
    >
      <el-menu-item index="1">
        <el-icon><HomeFilled /></el-icon>
        <span>Trang chủ</span>
      </el-menu-item>
      <el-sub-menu index="2">
        <template #title>
            <el-icon><Platform /></el-icon>
            <span>Drive của tôi</span>
        </template>
        <el-menu-item index="2-1">
          <el-icon><Folder /></el-icon>
          <span>Ahihi</span>
        </el-menu-item>
        <el-sub-menu index="2-4">
          <template #title>
            item four
          </template>
          <el-menu-item index="2-4-1">
            item one
          </el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-menu-item index="3">
        <el-icon><setting /></el-icon>
        <span>Navigator Three</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<style lang="scss" module>
  .sideBar {
    min-width: 256px;
    height: 100%;
  }

  .sideBarUpload {
    padding: 8px 16px 16px 16px;
  }

  .sideBarUploadButton {
    align-items: center;
    background-color: #fff;
    border-radius: var(--dt-corner-fab, 6.25rem);
    border-width: 0;
    box-shadow: var(--dt-shadow-elevation-1);
    color: var(--dt-on-surface);
    cursor: pointer;
    display: inline-flex;
    fill: var(--dt-on-surface);
    gap: .75rem;
    height: 3.5rem;
    min-width: 6.25rem;
    padding: 1.125rem 1.25rem 1.125rem 1rem;

    &:hover {
      box-shadow: var(--dt-shadow-elevation-2, 0 1px 2px 0 rgba(60, 64, 67, .3), 0 2px 6px 2px rgba(60, 64, 67, .15));
      background-color: rgb(105, 145, 214,.12);
    }
  }

  .sideBarUploadButtonText {
    font-size: 14px;
    font-weight: 500;
    letter-spacing: var(--dt-label-large-spacing, .0178571429em);
  }

  .sideBarMenu {
    padding: 0 10px 0 16px;
  }
  
</style>
