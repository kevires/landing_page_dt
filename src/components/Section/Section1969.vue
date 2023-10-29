<template>
  <section
    id="section1969"
    data-aos="fade-down-left"
    class="flex flex-col lg:flex-row lg:gap-[90px] gap-10 cursor-pointer"
    @click="handleOpenPostModal"
  >
    <div class="flex flex-col justify-between lg:max-h-[660px] w-full lg:w-[423px]">
      <div>
        <h2 class="text-3xl">1969 - 1975</h2>
        <h6 class="text-2xl lg:text-lg mt-6 italic">{{ $t('lbl_national_reunification') }}</h6>
        <p
          class="text-base lg:text-xs mt-2 mb-6 lg:max-w-[427px]"
        >{{ $t("lbl_research_and_prevention") }}</p>
      </div>
      <div class="mb-0 lg:mb-20">
        <img
          class="w-full lg:w-auto"
          src="../../assets/images/img-1969-1975-1.png"
          :alt="$t('lbl_examination_work')"
        />
        <p class="italic lg:text-[11px] mt-[11px]">{{ $t('lbl_examination_work') }}</p>
      </div>
    </div>
    <div class="flex flex-col pt-0 lg:pt-10 gap-10 lg:gap-20 lg:max-h-[550px]">
      <div>
        <img
          class="w-full lg:w-auto"
          src="../../assets/images/img-1969-1975-2.png"
          :alt="$t('lbl_blood_testing')"
        />
        <p class="italic lg:text-[11px] mt-[11px] lg:max-w-[340px]">{{ $t('lbl_blood_testing') }}</p>
      </div>
      <div class="self-end w-full lg:w-fit">
        <img
          class="w-full lg:w-auto"
          src="../../assets/images/img-1969-1975-3.png"
          :alt="$t('lbl_K_hospital_operating_room')"
        />
        <p
          class="italic lg:text-[11px] mt-[11px] lg:max-w-[155px]"
        >{{ $t('lbl_K_hospital_operating_room') }}</p>
      </div>
    </div>
    <div class="flex flex-col justify-start pt-0 lg:pt-10 gap-10 lg:gap-20 lg:max-h-[550px]">
      <div>
        <img
          class="w-full lg:w-auto"
          src="../../assets/images/img-1969-1975-4.png"
          :alt="$t('lbl_ceremony_for_doctors')"
        />
        <p
          class="italic lg:text-[11px] mt-[11px] lg:max-w-[311px]"
        >{{ $t('lbl_ceremony_for_doctors') }}</p>
      </div>
    </div>
  </section>
</template>
    
<script>
import { mapActions } from "vuex";
import POST_DATA from "@/data/post-data.js";

export default {
  name: "Section1957",
  methods: {
    ...mapActions("posts", ["handleSelectedPost"]),
    handleOpenPostModal() {
      const data = POST_DATA[this.$lang] || {};

      this.handleSelectedPost(data.blog_1969);
    }
  }
};
</script>
    
<style lang="scss" scoped>
</style>