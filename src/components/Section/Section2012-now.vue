<template>
  <section
    @click="handleOpenPostModal"
    id="section2012"
    data-aos="fade-down-left"
    class="flex flex-col lg:flex-row h-[80%] gap-10 lg:gap-[90px] w-full lg:w-max cursor-pointer"
  >
    <div class="flex flex-col justify-between lg:max-h-[660px]">
      <div>
        <h2 class="text-3xl">{{ $t("lbl_2012_present") }}</h2>
        <h6 class="text-2xl lg:text-lg mt-6 italic">{{ $t("lbl_present") }}</h6>
        <p
          class="text-base lg:text-xs mt-2 mb-6 lg:max-w-[427px]"
        >{{ $t("lbl_facility_was_inaugurated") }}</p>
      </div>
      <div class="flex gap-10 lg:gap-[90px]">
        <div class="flex w-full lg:w-auto flex-col gap-[10px]">
          <img
            class="w-full lg:w-auto"
            src="../../assets/images/img-2012-nay-1.png"
            :alt="$t('lbl_prime_minister')"
          />
          <p class="italic mt-[11px] lg:text-[11px]">{{ $t("lbl_prime_minister") }}</p>
        </div>
      </div>
    </div>

    <div class="flex flex-col gap-10 lg:gap-0 justify-between lg:max-h-[660px] mt-0 lg:mt-24">
      <div class="flex flex-col lg:flex-row gap-10 lg:gap-[90px]">
        <div>
          <img
            class="w-full lg:w-auto"
            src="../../assets/images/img-2012-now-2.png"
            :alt="$t('lbl_K_Hospital_facility')"
          />
          <p class="italic lg:text-[11px] mt-[11px]">{{ $t("lbl_K_Hospital_facility") }}</p>
        </div>
        <div>
          <img
            class="w-full lg:w-auto"
            src="../../assets/images/img-2012-now-3.png"
            :alt="$t('lbl_K_Hospital_facility')"
          />
          <!-- <p class="text-[11px]">{{ $t("Bệnh viện K cơ sở Tân Triều hiện nay") }}</p> -->
        </div>
      </div>
      <div class="lg:self-center w-full lg:w-auto">
        <img
          class="w-full lg:w-auto"
          src="../../assets/images/img-2012-now-4.png"
          :alt="$t('lbl_general_secretary')"
        />
        <p
          class="italic lg:text-[11px] mt-[11px] lg:max-w-[300px]"
        >{{ $t("lbl_general_secretary") }}</p>
      </div>
    </div>
    <div class="flex flex-col lg:flex-row lg:max-h-[660px] gap-10 lg:gap-[90px] mt-0 lg:mt-24">
      <div class="flex flex-col gap-10">
        <div>
          <img
            class="w-full lg:w-auto"
            src="../../assets/images/img-2012-now-5.png"
            :alt="$t('lbl_robot_assisted')"
          />
          <p class="italic lg:text-[11px] mt-[11px] lg:max-w-[250px]">{{ $t("lbl_robot_assisted") }}</p>
        </div>
        <div class="lg:self-end lg:mb-10">
          <img
            class="w-full lg:w-auto"
            src="../../assets/images/img-2012-now-6.png"
            :alt="$t('lbl_radiotherapy')"
          />
          <p class="italic lg:text-[11px] mt-[11px] lg:max-w-[220px]">{{ $t("lbl_radiotherapy") }}</p>
        </div>
      </div>
      <div>
        <img
          class="w-full lg:w-auto"
          src="../../assets/images/img-2012-now-7.png"
          :alt="$t('lbl_award_in_2017')"
        />
        <p class="italic lg:text-[11px] mt-[11px]">{{ $t("lbl_award_in_2017") }}</p>
      </div>
    </div>

    <div class="flex flex-col lg:flex-row lg:max-h-[660px] gap-10 lg:gap-[90px]">
      <div class="lg:self-center w-full lg:w-auto">
        <img
          class="w-full lg:w-auto"
          src="../../assets/images/img-2012-now-8.png"
          :alt="$t('lbl_vietnamese_talent_award')"
        />
        <p
          class="italic lg:text-[11px] mt-[11px] lg:max-w-[350px]"
        >{{ $t("lbl_vietnamese_talent_award") }}</p>
      </div>
      <div class="flex flex-col justify-between gap-10 mt-4">
        <div>
          <img
            class="w-full lg:w-auto"
            src="../../assets/images/img-2012-now-9.png"
            :alt="$t('lbl_state_award_for_science_and_technology')"
          />
          <p
            class="italic lg:text-[11px] mt-[11px] lg:max-w-[240px]"
          >{{ $t("lbl_state_award_for_science_and_technology") }}</p>
        </div>
        <div class="lg:self-end lg:mb-10">
          <img
            class="w-full lg:w-auto"
            src="../../assets/images/img-2012-now-10.png"
            :alt="$t('lbl_national_conference_on_radiotherapy')"
          />
          <p
            class="italic lg:text-[11px] mt-[11px]"
          >{{ $t("lbl_national_conference_on_radiotherapy") }}</p>
        </div>
      </div>
    </div>

    <div class="flex flex-col lg:flex-row lg:max-h-[660px] gap-10 lg:gap-[90px]">
      <div class="lg:self-center w-full lg:w-auto">
        <img
          class="w-full lg:w-auto"
          src="../../assets/images/img-2012-now-11.png"
          :alt="$t('lbl_deputy_minister_of_health')"
        />
        <p
          class="italic lg:text-[11px] mt-[11px] lg:max-w-[440px]"
        >{{ $t("lbl_deputy_minister_of_health") }}</p>
      </div>
      <div class="mt-10">
        <img
          class="w-full lg:w-auto"
          src="../../assets/images/img-2012-now-12.png"
          :alt="$t('lbl_Third_Class_Independence_Medal')"
        />
        <p
          class="italic lg:text-[11px] mt-[11px] lg:max-w-[360px]"
        >{{ $t("lbl_Third_Class_Independence_Medal") }}</p>
      </div>
      <div class="lg:self-center w-full lg:w-auto">
        <img
          class="w-full lg:w-auto"
          src="../../assets/images/img-2012-now-13.png"
          :alt="$t('lbl_Vietnam_Glory_program_2023')"
        />
        <p
          class="italic lg:text-[11px] mt-[11px] lg:max-w-[360px]"
        >{{ $t("lbl_Vietnam_Glory_program_2023") }}</p>
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
    return {};
  },
  mounted() {},
  methods: {
    ...mapActions("posts", ["handleSelectedPost"]),
    handleOpenPostModal() {
      const data = POST_DATA[this.$lang] || {};

      this.handleSelectedPost(data.blog_2012);
    }
  }
};
</script>

<style>
</style>