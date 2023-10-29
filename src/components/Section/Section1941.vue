<template>
  <section
    id="section1941"
    data-aos="fade-down-left"
    class="flex flex-col lg:flex-row lg:gap-[203px] gap-10"
  >
    <!-- 1941-1957 -->
    <div
      @click="handleOpenPostModal"
      class="flex flex-col lg:flex-row lg:gap-[90px] gap-10 cursor-pointer"
    >
      <div class="flex flex-col justify-between lg:max-h-[660px]">
        <div>
          <h2 class="text-3xl">1941 - 1957</h2>
          <h6 class="text-2xl lg:text-lg mt-6 italic">{{ $t('lbl_hanoi_cancer_institute') }}</h6>
          <p
            class="text-base lg:text-xs mt-2 mb-6 lg:max-w-[242px]"
          >{{ $t("lbl_rename_hanoi_cancer_institute") }}</p>
        </div>
        <div class="flex flex-col lg:flex-row gap-[90px] mb-0 lg:mb-24">
          <img
            class="w-full lg:w-auto"
            src="../../assets/images/img-1941-1957.png"
            :alt="$t('lbl_hanoi_cancer_institute')"
          />
        </div>
      </div>
      <div class="mt-0 lg:mt-24">
        <img
          class="w-full lg:w-auto"
          src="../../assets/images/img-1957-1969-1.png"
          :alt="$t('lbl_doctors_of_the_cancer_institute')"
        />
        <p class="italic lg:text-[11px] mt-[11px]">{{ $t('lbl_doctors_of_the_cancer_institute') }}</p>
      </div>
    </div>
    <!-- 1941-1957 -->
  </section>
</template>

<script>
import { mapActions } from "vuex";
import POST_DATA from "@/data/post-data.js";

export default {
  name: "Section1941",
  methods: {
    ...mapActions("posts", ["handleSelectedPost"]),
    handleOpenPostModal() {
      const data = POST_DATA[this.$lang] || {};

      this.handleSelectedPost(data.blog_1941);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>