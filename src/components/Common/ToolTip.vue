<!-- eslint-disable no-console -->
<script setup lang="ts">
import { onMounted, toRefs } from 'vue'

export interface Props {
  tooltipContent: string
  bold: boolean
}

const props = withDefaults(defineProps<Props>(), {
  tooltipContent: '',
  bold: false,
})
const { tooltipContent, bold } = toRefs(props)
onMounted(() => {
  // console.log('$attrs:', tooltipContent.value)
  // console.log('$attrs:', props.tooltipContent)
})
</script>

<template>
  <el-tooltip
    :content="`<span style='color: #fff'>${tooltipContent}</span>`"
    raw-content
    :show-after="500"
    :effect="bold ? 'customized' : 'dark'"
  >
    <slot />
  </el-tooltip>
</template>

<style>
.el-popper {
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 12px !important;
    background-color: #1f1f1f;
    line-height: 16px;
}
.el-popper.is-customized {
  background-color: #5f6368;
  font-weight: 600;
}

.el-popper.is-customized .el-popper__arrow::before {
  display: none;
}
.el-popper .el-popper__arrow::before {
  display: none;
}
</style>
