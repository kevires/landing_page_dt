<template>
  <div>
    <el-dialog
      :width="widthModal"
      :fullscreen="isFullscreen"
      :visible.sync="show"
      :before-close="handleClose"
      :custom-class="classModal"
      append-to-body
    >
      <template #title>
        <h4 v-if="titleModal" class="text-2xl">{{ titleModal }}</h4>
      </template>

      <slot></slot>

      <template #footer>
        <slot name="footer"></slot>
      </template>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "ModalBox",
  props: {
    showModal: Boolean,
    titleModal: String,
    widthModal: {
      type: String,
      default: "640px"
    },
    isFullscreen: {
      type: Boolean,
      default: false
    },
    classModal: String
  },
  data() {
    return {};
  },
  computed: {
    show: {
      get() {
        return this.showModal;
      },
      set(newValue) {
        this.$emit("update:showModal", newValue);
      }
    }
  },
  methods: {
    handleClose() {
      this.$emit("handleClose");
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
