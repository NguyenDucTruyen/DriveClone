<script setup lang="ts">
import { MostlyCloudy } from '@element-plus/icons-vue'
</script>

<template>
  <div :class="$style.sideBar">
    <div :class="$style.sideBarUpload">
      <el-dropdown trigger="click">
        <button :class="$style.sideBarUploadButton">
          <el-icon :size="24">
            <Plus />
          </el-icon>

          <span :class="$style.sideBarUploadButtonText">Mới</span>
        </button>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>Thư mục mới</el-dropdown-item>
            
            <el-dropdown-item divided>Tải tệp lên</el-dropdown-item>
            <el-dropdown-item>Tải thư mục lên</el-dropdown-item>
            <el-dropdown-item divided>
              Google Tài liệu
            </el-dropdown-item>
            <el-dropdown-item>Google Trang tính</el-dropdown-item>
            <el-dropdown-item>Google Trình bày</el-dropdown-item>
            <el-dropdown-item>Google Biểu mẫu</el-dropdown-item>
            <el-dropdown-item>Ứng dụng khác</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      :class="$style.sideBarMenu"
    >
      <el-menu-item index="1">
        <el-icon :size="20">
          <HomeFilled />
        </el-icon>
        <span>Trang chủ</span>
      </el-menu-item>
      <el-sub-menu index="2">
        <template #title>
          <el-icon :size="20">
            <Management />
          </el-icon>
          <span>Drive của tôi</span>
        </template>
        <el-menu-item index="2-1">
          <img :class="$style.menuItem" src="@/assets/images/icons/Folder.svg" alt="">
          <span>Collection</span>
        </el-menu-item>
        <!-- <el-sub-menu index="2-4">
          <template #title>
            item four
          </template>
          <el-menu-item index="2-4-1">
            item one
          </el-menu-item>
        </el-sub-menu> -->
      </el-sub-menu>
      <el-menu-item index="3">
        <el-icon :size="20">
          <PictureFilled />
        </el-icon>
        <span>Bộ nhớ dùng chung</span>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon :size="20">
          <Platform />
        </el-icon>
        <span>Máy tính</span>
      </el-menu-item>

      <div :class="$style.sideBarSecondListMenu">
        <el-menu-item index="5">
          <img :class="$style.menuItem" src="@/assets/images/icons/GroupUsers.svg" alt="">
          <span>Được chia sẻ với tôi</span>
        </el-menu-item>
        <el-menu-item index="6">
          <el-icon :size="20">
            <Clock />
          </el-icon>
          <span>Gần đây</span>
        </el-menu-item>
        <el-menu-item index="7">
          <el-icon :size="20">
            <Star />
          </el-icon>
          <span>Có gắn dấu sao</span>
        </el-menu-item>
      </div>
      <div :class="$style.sideBarSecondListMenu">
        <el-menu-item index="8">
          <el-icon><WarningFilled /></el-icon>
          <span>Nội dung rác</span>
        </el-menu-item>
        <el-menu-item index="9">
          <el-icon :size="20">
            <Delete />
          </el-icon>
          <span>Thùng rác</span>
        </el-menu-item>
        <el-menu-item index="10">
          <el-icon :size="20">
            <MostlyCloudy />
          </el-icon>
          <span>Bộ nhớ</span>
        </el-menu-item>
      </div>
      <div :class="$style.sideBarMoreMemory">
        <div :class="$style.sideBarMoreMemoryProgress" />
        <span :class="$style.sideBarMoreMemoryDescription">
          Đã sử dụng 3,85 GB trong tổng số 15 GB
        </span>
        <button :class="$style.sideBarMoreMemoryButton">
          Mua thêm bộ nhớ
        </button>
      </div>
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

  .menuItem {
    margin-right: 10px;
  }

  .sideBarSecondListMenu {
    margin-top: 16px;
  }

  .sideBarMoreMemory {
    padding-top: 8px;
    margin-left: 18px;
    width: 100%;
    max-width: 175px;
  }

  .sideBarMoreMemoryProgress {
    width: 82%;
    display: flex;
    flex-flow: row;
    height: .25rem;
    overflow: hidden;
    margin-bottom: .5rem;
    background-color: rgba(0, 0, 0, .12);
    border-radius: 3px;
    position: relative;

    // -webkit-mask: radial-gradient(circle 16px at -10px 50%,transparent 99%,#fff 100%);
    //   mask:radial-gradient(circle 6px at -10px 50%,transparent 99%,#fff 100%);

    &::after {
      content: '';
      top: 0;
      left: 0;
      position: absolute;
      display: block;
      height: 100%;
      width: 25%;
      background-color: var(--color-primary);
      border-radius: 3px;
    }
  }

  .sideBarMoreMemoryDescription {
    color: var(--dt-on-surface-variant);
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
  }

  .sideBarMoreMemoryButton {
    display: inline-block;
    width: max-content;
    height: auto;
    max-height: 97.2px;
    max-width: 213px;
    min-height: 36px;
    padding: 8px 24px;
    margin: 12px 0 4px;
    color: #0b57d0;
    text-align: center;
    font-size: 14px;
    font-weight: 500;
    border-radius: 100px;
    border: 1px solid #747775;
    cursor: pointer;
    background: transparent;

    &:hover {
      background-color: var(--dt-primary-container);
    }
  }
</style>
