<template>
  <section
    id="section1975"
    data-aos="fade-down-left"
    class="flex flex-col lg:flex-row lg:gap-[90px] gap-10"
  >
    <div
      @click="handleOpenPostModal"
      class="flex flex-col justify-between lg:max-h-[660px] w-full lg:w-[423px] cursor-pointer"
    >
      <div>
        <h2 class="text-3xl">1975 - 1986</h2>
        <h6 class="text-2xl lg:text-lg mt-6 italic">{{ $t('lbl_Doi_Moi_period') }}</h6>
        <p
          class="text-base lg:text-xs mt-2 mb-6 lg:max-w-[427px]"
        >{{ $t("lbl_sub_Doi_Moi_period") }}</p>
      </div>
      <div class="mb-0 lg:mb-20 flex gap-10 lg:gap-[80px]">
        <div class="flex-1 lg:flex-0">
          <img
            class="w-full lg:w-auto"
            src="../../assets/images/img-1975-1986-1.png"
            :alt="$t('lbl_cobalt_room')"
          />
          <p class="italic lg:text-[11px] mt-[11px]">{{ $t('lbl_cobalt_room') }}</p>
        </div>
        <div class="flex-1 lg:flex-0">
          <img
            class="w-full lg:w-auto"
            src="../../assets/images/img-1975-1986-2.png"
            :alt="$t('lbl_mammogram_machine')"
          />
          <p class="italic lg:text-[11px] mt-[11px]">{{ $t('lbl_mammogram_machine') }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
      
<script>
import { mapActions } from "vuex";
import POST_DATA from "@/data/post-data.js";

export default {
  name: "Section1975",
  methods: {
    ...mapActions("posts", ["handleSelectedPost"]),
    handleOpenPostModal() {
      const data = POST_DATA[this.$lang] || {};

      this.handleSelectedPost(data.blog_1975);
    }
  }
};
</script>
      
<style lang="scss" scoped>
</style>