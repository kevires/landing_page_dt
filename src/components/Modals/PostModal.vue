<template>
  <div>
    <ModalBox
      :show-modal="showModal"
      :width-modal="'100%'"
      class-modal="!bg-[#1D2939] text-white cs-icon"
      isFullscreen
      @handleClose="closeModal"
    >
      <div class="text-white container mx-auto md:px-4 break-normal break-words">
        <header class="mx-auto">
          <h2 class="text-center text-4xl mb-9">{{ $t(selectedPost.header) }}</h2>
        </header>
        <section class="lg:px-6 mx-auto text-justify">
          <article v-for="(item, index) in selectedPost.body" :key="index">
            <h3 v-if="item.title" class="text-xl font-bold mb-3">{{ item.title }}</h3>
            <p class>{{ item.content }}</p>
            <figure v-if="item.img" class="my-8">
              <img :src="item.img.src" class="my-4 mx-auto" />
              <template>
                <small
                  v-for="(it,idx) in item.img.desc"
                  :key="idx"
                  class="block text-center"
                >{{ it }}</small>
              </template>
            </figure>
          </article>
        </section>
      </div>
    </ModalBox>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ModalBox from "@/components/Modals/index.vue";
export default {
  name: "PostModal",
  components: {
    ModalBox
  },
  data() {
    return {
      showModal:
        (this.selectedPost && Object.keys(this.selectedPost).length) || false
    };
  },
  computed: {
    ...mapGetters({
      selectedPost: "posts/getSelectedPost"
    })
  },
  watch: {
    selectedPost: {
      handler(data) {
        if (Object.keys(data).length) {
          this.showModal = true;
        } else {
          this.showModal = false;
        }
      }
    }
  },
  methods: {
    ...mapActions("posts", ["handleSelectedPost"]),
    closeModal() {
      this.showModal = false;
      this.handleSelectedPost({});
    }
  }
};
</script>

<style lang="scss" scoped>
::v-deep {
  p {
    @apply mb-4;
  }
}
.cs-icon {
  // .el-dialog__close {
  //   font-size: 40px;
  // }
}
</style>
