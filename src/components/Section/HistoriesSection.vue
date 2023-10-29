<template>
  <div
    class="flex flex-col lg:flex-row h-[80%] lg:gap-[203px] gap-20 w-full lg:pr-24 lg:w-max cs-sections"
  >
    <CurieSection />
    <RadiumSection />
    <Section1941 />
    <Section1957 />
    <Section1969 />
    <Section1975 />
    <Section1986 />
    <Section2000 />
    <Section2012 />
  </div>
</template>

<script>
import Section2000 from "./Section2000-2012.vue";
import Section2012 from "./Section2012-now.vue";
import CurieSection from "./CurieSection.vue";
import RadiumSection from "./RadiumSection.vue";
import Section1941 from "./Section1941.vue";
import Section1957 from "./Section1957.vue";
import Section1969 from "./Section1969.vue";
import Section1975 from "./Section1975.vue";
import Section1986 from "./Section1986.vue";

export default {
  name: "HistoriesSection",
  components: {
    Section2000,
    Section2012,
    CurieSection,
    RadiumSection,
    Section1941,
    Section1957,
    Section1969,
    Section1975,
    Section1986
  },
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
  }
};
</script>

<style lang="scss" >
.cs-sections img {
  max-width: unset;
}
</style>
