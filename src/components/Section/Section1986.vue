<template>
  <section
    id="section1986"
    data-aos="fade-down-left"
    class="flex flex-col lg:flex-row lg:gap-[90px] gap-10 cursor-pointer"
    @click="handleOpenPostModal"
  >
    <div class="flex flex-col justify-between lg:max-h-[660px] w-full lg:w-[423px]">
      <div>
        <h2 class="text-3xl">1986 - 1999</h2>
        <h6 class="text-2xl lg:text-lg mt-6 italic">{{ $t('lbl_Doi_Moi_economic_reforms') }}</h6>
        <p
          class="text-base lg:text-xs mt-2 mb-6 lg:max-w-[427px]"
        >{{ $t('lbl_sub_Doi_Moi_economic_reforms') }}</p>
      </div>
      <div class="mb-0 lg:mb-20">
        <img
          class="w-full lg:w-auto"
          src="../../assets/images/img-1986-1999-1.png"
          :alt="$t('lbl_examination_work')"
        />
        <p class="italic lg:text-[11px] mt-[11px] lg:max-w-[200px]">{{ $t('lbl_examination_work') }}</p>
      </div>
    </div>
    <div class="flex flex-col pt-0 lg:pt-10 lg:max-h-[550px]">
      <div class="flex flex-col lg:flex-row gap-10 lg:gap-[90px]">
        <div>
          <img
            class="w-full lg:w-auto"
            src="../../assets/images/img-1986-1999-2.png"
            :alt="$t('lbl_performing_endoscopy')"
          />
          <p class="italic lg:text-[11px] mt-[11px]">{{ $t('lbl_performing_endoscopy') }}</p>
        </div>
        <div>
          <img
            class="w-full lg:w-auto"
            src="../../assets/images/img-1986-1999-3.png"
            :alt="$t('lbl_Vietnam_cancer_association')"
          />
          <p
            class="italic lg:text-[11px] mt-[11px] lg:max-w-[300px]"
          >{{ $t('lbl_Vietnam_cancer_association') }}</p>
        </div>
        <div>
          <img
            class="w-full lg:w-auto"
            src="../../assets/images/img-1986-1999-4.png"
            :alt="$t('lbl_conference_cancer_prevention')"
          />
          <p
            class="italic lg:text-[11px] mt-[11px] lg:max-w-[320px]"
          >{{ $t('lbl_conference_cancer_prevention') }}</p>
        </div>
        <div>
          <img
            class="w-full lg:w-auto"
            src="../../assets/images/img-1986-1999-5.png"
            :alt="$t('lbl_delegation_on_their_trip_to_survey')"
          />
          <p
            class="italic lg:text-[11px] mt-[11px] lg:max-w-[320px]"
          >{{ $t('lbl_delegation_on_their_trip_to_survey') }}</p>
        </div>
      </div>

      <div class="flex flex-col lg:flex-row gap-10 mt-4 lg:gap-[122px] ml-0 lg:ml-56">
        <div>
          <img
            class="w-full lg:w-auto"
            src="../../assets/images/img-1986-1999-6.png"
            :alt="$t('lbl_cytology_course')"
          />
          <p
            class="italic lg:text-[11px] mt-[11px] lg:max-w-[260px]"
          >{{ $t('lbl_cytology_course') }}</p>
        </div>
        <div>
          <img
            class="w-full lg:w-auto"
            src="../../assets/images/img-1986-1999-7.png"
            :alt="$t('lbl_experts_guiding')"
          />
          <p
            class="italic lg:text-[11px] mt-[11px] lg:max-w-[230px]"
          >{{ $t('lbl_experts_guiding') }}</p>
        </div>
        <div>
          <img
            class="w-full lg:w-auto"
            src="../../assets/images/img-1986-1999-8.png"
            :alt="$t('lbl_cell_congress')"
          />
          <p class="italic lg:text-[11px] mt-[11px] lg:max-w-[320px]">{{ $t('lbl_cell_congress') }}</p>
        </div>
        <div class="lg:mt-10">
          <img
            class="w-full lg:w-auto"
            src="../../assets/images/img-1986-1999-9.png"
            :alt="$t('lbl_30th_anniversary')"
          />
          <p
            class="italic lg:text-[11px] mt-[11px] lg:max-w-[206px]"
          >{{ $t('lbl_30th_anniversary') }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
      
<script>
import { mapActions } from "vuex";
import POST_DATA from "@/data/post-data.js";

export default {
  name: "Section1986",
  methods: {
    ...mapActions("posts", ["handleSelectedPost"]),
    handleOpenPostModal() {
      const data = POST_DATA[this.$lang] || {};

      this.handleSelectedPost(data.blog_1986);
    }
  }
};
</script>
      
      <style lang="scss" scoped>
</style>