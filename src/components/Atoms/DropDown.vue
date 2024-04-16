<script lang="ts" setup>
import { ref, toRefs, watch } from 'vue'

export interface Props {
  listData: {
    label: string
    value: string
  }[]
  defaultData: {
    label: string
    value: string
  }
}
const props = defineProps<Props>()
const emit = defineEmits(['change'])
const { listData, defaultData } = toRefs(props)
const selected = ref(defaultData.value)
const placeholder = ref('Please select')

// Emit an event when selected value changes
watch(selected, (newValue, oldValue) => {
  if (newValue !== oldValue)
    emit('change', newValue)
})
</script>

<template>
  <el-select v-model="selected" :placeholder="placeholder">
    <el-option v-for="item in listData" :key="item.value" :label="item.label" :value="item.value" />
  </el-select>
</template>
