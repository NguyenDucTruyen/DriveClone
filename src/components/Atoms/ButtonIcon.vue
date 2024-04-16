<script setup lang="ts">
</script>

<template>
  <ToolTip>
    <div :class="$style.buttonIcon">
      <el-icon :size="24" 
      >
        <slot />
      </el-icon>
    </div>
  </Tooltip>
</template>

<style lang="scss" module>
    .buttonIcon {
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
        padding: 8px;
    }
</style>
