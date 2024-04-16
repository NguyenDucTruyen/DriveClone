<script lang="ts" setup>
import { reactive } from 'vue'

const emit=defineEmits(['close'])
const form = reactive({
  name: '',
  content: '',
  email: '',
})

const typeDriveItems = [
  { label: 'Bất kỳ', value: 'Bất kỳ' },
  { label: 'Hình ảnh', value: 'Hình ảnh' },
  { label: 'PDF', value: 'PDF' },
  { label: 'Bảng tính', value: 'Bảng tính' },
  { label: 'Bản trình bày', value: 'Bản trình bày' },
  { label: 'Biểu mẫu', value: 'Biểu mẫu' },
  { label: 'Âm thanh', value: 'Âm thanh' },
  { label: 'Video', value: 'Video' },
  { label: 'Tệp lưu trữ (zip)', value: 'Tệp lưu trữ (zip)' },
  { label: 'Thư mục', value: 'Thư mục' },
]
const owners = [
  { label: 'Bất kỳ ai', value: 'Bất kỳ ai' },
  { label: 'Do tôi sở hữu', value: 'Do tôi sở hữu' },
  { label: 'Không do tôi sở hữu', value: 'Không do tôi sở hữu' },
  { label: 'Một người cụ thể', value: 'Một người cụ thể' },

]
const places = [
  { label: 'Mọi nơi', value: 'Mọi nơi' },
  { label: 'Drive của tôi', value: 'Drive của tôi' },
  { label: 'Được chia sẻ với tôi', value: 'Được chia sẻ với tôi' },
  { label: 'Vị trí khác...', value: 'Vị trí khác...' },

]

const modifiedDates = [
  { label: 'Mọi lúc', value: 'Mọi lúc' },
  { label: 'Hôm nay', value: 'Hôm nay' },
  { label: 'Hôm qua', value: 'Hôm qua' },
  { label: '7 ngày qua', value: '7 ngày qua' },
  { label: '30 ngày qua', value: '30 ngày qua' },
  { label: '90 ngày qua', value: '90 ngày qua' },
  { label: 'Tùy chỉnh', value: 'Tùy chỉnh' },
]
const trackedItems = [
  { label: '-', value: '-' },
  { label: 'Bất kỳ', value: 'Bất kỳ' },
  { label: 'Chỉ những mục có nội dung để xuất', value: 'Chỉ những mục có nội dung để xuấta' },
  { label: 'Chỉ những nhận xét được giao cho tôi', value: 'Chỉ những nhận xét được giao cho tôi' },
]
function onSubmit() {
  console.log('submit!')
}
function close() {
  emit('close')
}
</script>

<template>
  <BaseModal @close="close">
    <div :class=" $style.advancedSearch " @click.stop>
      <div :class="$style.advancedSearchIconClose" @click="close">
        <ButtonIcon bold>
          <CloseBold />
        </ButtonIcon>
      </div>

      <el-form :model=" form " label-width="auto" :class=" $style.formAdvancedSearch ">
        <label :class="$style.formAdvancedSearchLabel">Loại</label>
        <div :class="$style.advancedSearchHalfDiv">
          <DropDown :list-data=" typeDriveItems " :default-data=" typeDriveItems[0] " />
        </div>

        <label :class="$style.formAdvancedSearchLabel">Chủ sở hữu</label>
        <div :class="$style.advancedSearchHalfDiv">
          <DropDown :list-data=" owners " :default-data=" owners[0] " />
        </div>

        <label :class="$style.formAdvancedSearchLabel">Có các từ</label>
        <el-input v-model=" form.content " placeholder="Nhập các từ tìm thấy trong tệp" />
        <label :class="$style.formAdvancedSearchLabel">Tên mục</label>
        <el-input v-model=" form.name " placeholder="Nhập một cụm từ khớp với một phần của tên tệp" />

        <label :class="$style.formAdvancedSearchLabel">Địa điểm</label>
        <div :class="$style.formAdvancedSearchGroup">
          <DropDown :list-data=" places " :default-data=" places[0] " />
          <el-checkbox-group v-model=" form.type ">
            <el-checkbox value="Online activities" name="type">
              Online activities
            </el-checkbox>
            <el-checkbox value="Promotion activities" name="type">
              Promotion activities
            </el-checkbox>
            <el-checkbox value="Offline activities" name="type">
              Offline activities
            </el-checkbox>
          </el-checkbox-group>
        </div>

        <label :class="$style.formAdvancedSearchLabel">Ngày sử đổi</label>
        <DropDown :list-data=" modifiedDates " :default-data=" modifiedDates[0] " />

        <label :class="$style.formAdvancedSearchLabel">Yêu cầu phê duyệt</label>
        <div :class="$style.formAdvancedSearchGroup">
          <el-checkbox value="waiting" name="type">
            Đang chờ tôi phê duyệt
          </el-checkbox>
          <el-checkbox value="me" name="type">
            Do tôi yêu cầu
          </el-checkbox>
        </div>

        <label :class="$style.formAdvancedSearchLabel">Đã chia sẻ với</label>
        <el-input v-model=" form.email " placeholder="Nhập tên hoặc địa chỉ email" />

        <label :class="$style.formAdvancedSearchLabel">Mục cần theo dõi</label>
        <DropDown :list-data=" trackedItems " :default-data=" trackedItems[0] " />
      </el-form>
      <div :class="$style.advancedSearchGroupButton">
        <div :class="$style.advancedSearchGroupButtonMore">
          <el-button type="primary" :class="$style.advancedSearchButton" round text>
            Tìm hiểu thêm
          </el-button>
        </div>
        <el-form-item>
          <el-button type="primary" :class="$style.advancedSearchButton" round text>
            Đặt lại
          </el-button>
          <el-button type="primary" :class="$style.advancedSearchButton" round @click=" onSubmit ">
            Tìm kiếm
          </el-button>
        </el-form-item>
      </div>
    </div>
  </BaseModal>
</template>

<style lang="scss" module>
.advancedSearch {
  position: relative;
  border: solid 1px transparent;
  border-radius: 8px;
  box-shadow: var(--dt-shadow-elevation-3);
  padding-top: 24px;
  pointer-events: auto;
  background-color: var(--dt-surface);
  max-height: calc(100% - 8rem);
  max-width: 100vw;
  min-width: 45.125rem;
  padding-top: 24px;
  overflow: auto;
}

.advancedSearchIconClose {
  position: absolute;
  top: 4px;
  right: 4px;
}

.formAdvancedSearch {
  display: grid;
  gap: 1.125rem 1.125rem;
  grid-template-columns: 8rem 1fr;
  padding: .5rem 1.5rem 0;
}

.formAdvancedSearchLabel {
  line-height: 1.25rem;
    font-size: .875rem;
    letter-spacing: .0142857143em;
    font-weight: 400;
    font-weight: bold;
    line-height: 2.75rem;
    color: var(--dt-on-surface);
}
.advancedSearchGroupButton {
  display: flex;
  padding: 8px 16px 8px 0;
  height: 68px;
}
.advancedSearchGroupButtonMore {
  flex: 1 1 auto;
  padding-left: 1rem;

}
.advancedSearchButton {
  margin: 6px 0;
  padding: 0 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 38px;
}
.advancedSearchHalfDiv {
  max-width: 256px;
}
</style>
