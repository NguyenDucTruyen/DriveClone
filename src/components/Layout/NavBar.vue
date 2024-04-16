<script lang="ts" setup>

</script>

<template>
  <header :class="$style.header">
    <div :class="$style.headerLeft">
      <div :class="$style.headerLogo">
        <img :class="$style.headerLogoImage" src="@/assets/images/LogoDrive.png" alt="">
        <span :class="$style.headerLogoName">Drive</span>
      </div>
    </div>
    <div :class="$style.headerCenter">
      <SearchBar />
    </div>
    <div :class="$style.headerRight">
      <div :class="$style.headerRightIcon">
        <ToolTip
          tooltip-content="Sẵn sàng khi ngoại tuyến"
        >
          <el-icon :size="24" color="#5f6368">
            <CircleCheckFilled />
          </el-icon>
        </ToolTip>
      </div>
      <div :class="$style.headerRightIcon">
        <ToolTip
          tooltip-content="Hổ trợ"
        >
          <el-icon :size="24" color="#5f6368">
            <QuestionFilled />
          </el-icon>
        </ToolTip>
      </div>
      <div :class="$style.headerRightIcon">
        <ToolTip
          tooltip-content="Cài đặt"
        >
          <el-icon :size="24" color="#5f6368">
            <Setting />
          </el-icon>
        </ToolTip>
      </div>
      <div :class="$style.headerRightIcon">
        <ToolTip
          tooltip-content="Các ứng dụng của Google"
          bold
        >
          <el-icon :size="24" color="#5f6368">
            <Menu />
          </el-icon>
        </ToolTip>
      </div>
      <div :class="$style.headerRightIcon">
        <ToolTip
          tooltip-content="Tài khoản Google"
          bold
        >
          <img :class="$style.headerRightAvatar" src="https://lh3.googleusercontent.com/ogw/AF2bZyikRnSw99pnnd-22xPQeONKHqwkk_Q3knX6PuPFV_p_RiE=s32-c-mo" alt="">
        </ToolTip>
      </div>
    </div>
  </header>
</template>

<style lang="scss" module>
    .header {
        padding: 8px;
        height: 100%;
        display: flex;
    }
    .headerLeft {
        min-width: 238px;
        height: 100%;
        padding-right: 30px;
        padding-left: 16px;
    }

    .headerLogo {
        display: flex;
        align-items: center;
    }

    .headerLogoImage {
        width: 44px;
        height: 40px;
        object-fit: contain;
        padding-right: 4px;
        margin-bottom: 4px;
        cursor: pointer;

    }

    .headerLogoName {
        line-height: 44px;
        color: #444746;
        font-size: 22px;
        padding-left: 4px;
        line-height: 24px;
        cursor: pointer;
    }

    .headerCenter {
        flex: 1;
    }

    .headerRight {
        display: flex;
        align-items: center;
        gap: 2px;
    }

    .el-icon {
        width: 40px;
        height: 40px;
    }

    .headerRightIcon,
    .headerRightAvatar {
        &:hover {
            background-color: rgba(60,64,67,.08);
            cursor: pointer;
        }
        display: flex;
        justify-content: center;
        align-items:center;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        padding: 4px;
    }
</style>
