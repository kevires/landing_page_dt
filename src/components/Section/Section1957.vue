<template>
  <section
    id="section1957"
    data-aos="fade-down-left"
    class="flex flex-col lg:flex-row lg:gap-[90px] gap-10 cursor-pointer"
    @click="handleOpenPostModal"
  >
    <div class="flex flex-col justify-between lg:max-h-[660px]">
      <div>
        <h2 class="text-3xl">1957 - 1969</h2>
        <h6 class="text-2xl lg:text-lg mt-6 italic">{{ $t('lbl_oncology_department') }}</h6>
        <p
          class="text-base lg:text-xs mt-2 mb-6 lg:max-w-[427px]"
        >{{ $t("lbl_new_organizational_arrangements") }}</p>
      </div>
      <div class="mb-0 lg:mb-20">
        <img
          class="w-full lg:w-auto"
          src="../../assets/images/img-1957-1969-2.png"
          :alt="$t('lbl_rooms_11_12')"
        />
        <p class="italic lg:text-[11px] mt-[11px]">{{ $t('lbl_rooms_11_12') }}</p>
      </div>
    </div>
    <div class="flex flex-col justify-start mt-0 lg:mt-24 lg:max-h-[550px]">
      <div>
        <img
          class="w-full lg:w-auto"
          src="../../assets/images/img-1957-1969-3.png"
          :alt="$t('lbl_evacuation_sites_in_quoc_oai')"
        />
        <p class="italic lg:text-[11px] mt-[11px]">{{ $t('lbl_evacuation_sites_in_quoc_oai') }}</p>
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

      this.handleSelectedPost(data.blog_1957);
    }
  }
};
</script>
  
  <style lang="scss" scoped>
</style>