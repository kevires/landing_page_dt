<template>
  <section
    id="radiumSection"
    data-aos="fade-down-left"
    class="flex flex-col lg:flex-row lg:gap-[203px] gap-10"
  >
    <!-- 1926-1940 -->
    <div
      @click="handleOpenPostModal"
      class="flex flex-col lg:flex-row lg:gap-[90px] gap-10 cursor-pointer"
    >
      <div class="flex flex-col justify-between lg:max-h-[660px] w-full lg:w-[423px]">
        <div>
          <h2 class="text-3xl">1926 - 1940</h2>
          <h6 class="text-2xl lg:text-lg mt-6 italic">{{ $t('lbl_indochina_radium_institute') }}</h6>
          <p
            class="text-base lg:text-xs mt-2 mb-6 lg:max-w-[427px]"
          >{{ $t("lbl_rename_indochina_radium_institute") }}</p>
        </div>
        <div class="flex flex-col lg:flex-row gap-[90px] mb-0 lg:mb-24">
          <div>
            <img
              class="w-full lg:w-auto"
              src="../../assets/images/img-1926-1940-1.png"
              :alt="$t('lbl_indochina_radium_institute_back')"
            />
            <p
              class="italic lg:text-[11px] mt-[11px]"
            >{{ $t("lbl_indochina_radium_institute_back") }}</p>
          </div>
        </div>
      </div>
      <div
        class="flex flex-col justify-start lg:flex-row lg:gap-[90px] gap-10 mb-0 lg:mb-24 lg:self-end"
      >
        <div class="lg:max-w-[340px]">
          <img
            class="w-full lg:w-auto"
            src="../../assets/images/img-1926-1940-2.png"
            :alt="$t('lbl_financially_contributed')"
          />
          <p class="italic lg:text-[11px] mt-[11px]">{{ $t("lbl_financially_contributed") }}</p>
        </div>
        <div>
          <img
            class="w-full lg:w-auto"
            src="../../assets/images/img-1926-1940-3.png"
            :alt="$t('lbl_radiation_machine')"
          />
          <p class="italic lg:text-[11px] mt-[11px]">{{ $t("lbl_radiation_machine") }}</p>
        </div>
        <div>
          <img
            class="w-full lg:w-auto"
            src="../../assets/images/img-1926-1940-4.png"
            :alt="$t('lbl_main_facade')"
          />
          <p class="italic lg:text-[11px] mt-[11px] lg:max-w-[323px]">{{ $t("lbl_main_facade") }}</p>
        </div>
      </div>
    </div>
    <!-- 1926-1940 -->
  </section>
</template>

<script>
import { mapActions } from "vuex";
import POST_DATA from "@/data/post-data.js";

export default {
  name: "RadiumSection",
  methods: {
    ...mapActions("posts", ["handleSelectedPost"]),
    handleOpenPostModal() {
      const data = POST_DATA[this.$lang] || {};

      this.handleSelectedPost(data.blog_1926);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>