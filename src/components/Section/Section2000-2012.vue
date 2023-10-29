<template>
  <!-- 2000 - 2012 -->

  <section
    id="section2000"
    data-aos="fade-down-left"
    class="flex flex-col lg:flex-row h-[80%] lg:gap-[100px] w-full lg:w-max cursor-pointer"
    @click="handleOpenPostModal"
  >
    <div
      class="flex flex-col lg:max-h-[660px]"
      :class="isLargeHeight ? 'justify-normal' : 'justify-between'"
    >
      <div>
        <h2 class="text-3xl">{{ $t("2000 - 2012") }}</h2>
        <h6 class="text-2xl lg:text-lg mt-6 italic">{{ $t("lbl_upgrading_the_hospital") }}</h6>
        <p
          class="text-base lg:text-xs mt-2 mb-6 lg:max-w-[427px]"
          v-html="$t('lbl_classification_to_tier_I')"
        />
      </div>
      <div class="flex">
        <img
          class="w-full lg:w-auto mt-4 max-w-[400px] lg:max-w-auto mx-auto lg:mx-0"
          src="../../assets/images/img-2000-2012-1.png"
          :alt="$t('lbl_upgrading_the_hospital')"
        />
      </div>
    </div>

    <div
      class="flex flex-col lg:max-h-[660px] mt-12"
      :class="isLargeHeight ? 'justify-normal' : 'justify-between'"
    >
      <div>
        <h2 class="text-3xl" style="height: 36px;"></h2>
        <p class="text-base lg:text-xs mt-2 mb-6 lg:max-w-[427px]" v-html="$t('lbl_facility_II')" />
      </div>
      <div class="flex" :class="isLargeHeight ? 'flex-col gap-[50px]' : 'gap-[90px]'">
        <div class="flex flex-col gap-[10px]">
          <img src="../../assets/images/img-2000-2012-2.png" :alt="$t('lbl_Tam_Hiep_in_2000')" />
          <p class="italic lg:text-[11px] mt-[11px]">{{ $t("lbl_Tam_Hiep_in_2000") }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- 2000 - 2012  -->
</template>

<script>
import { mapActions } from "vuex";
import POST_DATA from "@/data/post-data.js";

export default {
  data() {
    return {
      isLargeHeight: false
    };
  },
  mounted() {
    if (window.screen.availHeight > 1000) {
      this.isLargeHeight = true;
    } else {
      this.isLargeHeight = false;
    }
  },
  methods: {
    ...mapActions("posts", ["handleSelectedPost"]),
    handleOpenPostModal() {
      const data = POST_DATA[this.$lang] || {};

      this.handleSelectedPost(data.blog_2000);
    }
  }
};
</script>

<style>
</style>