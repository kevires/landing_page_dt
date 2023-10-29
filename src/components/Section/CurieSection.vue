<template>
  <section id="curieSection" class="flex flex-col lg:flex-row lg:gap-[203px] gap-10">
    <!-- 1992 -->
    <div
      @click="handleOpenPostModal(blogData.blog_1922)"
      class="cursor-pointer flex flex-col justify-between lg:max-h-[660px] w-full lg:w-[423px]"
    >
      <div>
        <h2 class="text-3xl">1922</h2>
        <h6 class="text-2xl lg:text-lg mt-6 italic">{{ $t('lbl_founding_committee') }}</h6>
        <p
          class="text-base lg:text-xs mt-2 mb-6 lg:max-w-[427px]"
        >{{ $t("lbl_sub_founding_committee") }}</p>
      </div>
      <div>
        <img
          class="w-full lg:w-auto"
          src="../../assets/images/img-1992.png"
          :alt="$t('lbl_sub_img_founding_committee_2')"
        />
        <p class="mt-[11px] text-base lg:text-[11px]">{{ $t("lbl_sub_img_founding_committee_1") }}</p>
        <p class="text-base lg:text-[11px]">{{ $t('lbl_sub_img_founding_committee_2') }}</p>
      </div>
    </div>
    <!-- 1992 -->

    <!-- 1923-1926 -->

    <div
      @click="handleOpenPostModal(blogData.blog_1923)"
      class="flex flex-col justify-between lg:max-h-[660px] cursor-pointer"
    >
      <div>
        <h2 class="text-3xl">1923 - 1926</h2>
        <h6 class="text-2xl lg:text-lg mt-6 italic">{{ $t('lbl_born') }}</h6>
        <p class="text-base lg:text-xs mt-2 mb-6 lg:max-w-[427px]">{{ $t("lbl_established") }}</p>
      </div>
      <div class="flex flex-col lg:flex-row lg:gap-[90px] gap-10 mb-0 lg:mb-32">
        <img src="../../assets/images/img-1923-1926-1.png" alt="benhvienK-1923-1926-1" />
        <div>
          <img
            class="w-full lg:w-auto"
            src="../../assets/images/img-1923-1926-2.png"
            :alt="$t('lbl_colleagues_at_a_laboratory')"
          />
          <p
            class="italic text-base lg:text-[11px] mt-[11px]"
          >{{ $t('lbl_colleagues_at_a_laboratory') }}</p>
        </div>
        <div>
          <img
            class="w-full lg:w-auto"
            src="../../assets/images/img-1923-1926-3.png"
            :alt="$t('lbl_three_tubes_of_radium')"
          />
          <p class="italic text-base lg:text-[11px] mt-[11px]">{{ $t('lbl_three_tubes_of_radium') }}</p>
        </div>
      </div>
    </div>

    <!-- 1923-1926  -->
  </section>
</template>

<script>
import { mapActions } from "vuex";
import POST_DATA from "@/data/post-data.js";
export default {
  name: "CurieSection",
  computed: {
    blogData() {
      return POST_DATA[this.$lang] || {};
    }
  },
  methods: {
    ...mapActions("posts", ["handleSelectedPost"]),
    handleOpenPostModal(data) {
      this.handleSelectedPost(data);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
