<template>
  <div
    class="sticky top-0 left-0 h-full hidden lg:flex w-fit bg-orange-150 cs-navbar z-10"
    @mouseleave="isHover=false"
    @mouseover="isHover=true"
  >
    <div
      class="flex h-full items-center flex-col gap-5 justify-center bg-black flex-1 invisible cs-label"
    >
      <div
        v-for="(nav,index) in NAV_LIST"
        :key="`${nav.label}-${index}`"
        class="p-3 text-[#98A2B3] text-xs cursor-pointer hover:text-[#f1ecd2] animate__animated"
        :class="{'text-[#f2e9be]':currentNav===nav.hash,
          'animate__zoomIn ':isHover}"
        @click="handleChangeNav(nav)"
      >{{ nav.label }}</div>
    </div>
    <div
      class="flex h-full items-center flex-col px-4 gap-5 justify-center ml-auto mb-1 animate__animated animate__slideInLeft animate__delay-1s"
    >
      <div
        v-for="(nav,index) in NAV_LIST"
        :key="`${nav.value}-${index}`"
        class="p-3 text-[#98A2B3] leading-5 font-bold tracking-[2.8px] cursor-pointer hover:text-black"
        :class="{'text-black':currentNav===nav.hash}"
        @click="handleChangeNav(nav)"
      >{{ nav.value }}</div>
    </div>
  </div>
</template>

<script>
import { NAV_LIST } from "@/utils/constant";

export default {
  name: "Navbar",
  data() {
    return {
      NAV_LIST,
      currentNav: NAV_LIST[0].hash,
      isHover: false
    };
  },
  methods: {
    handleChangeNav(nav) {
      // this.currentNav = nav.hash;
      // this.handleScroll();
      this.scrollToSection(nav);
    },
    // handleScroll() {
    //   const sections = NAV_LIST.map(item => item.hash?.replace("#", ""));

    //   for (const section of sections) {
    //     const element = document.getElementById(section);
    //     if (element) {
    //       const offset =
    //         document.getElementById("AppHeader").offsetHeight + 100;
    //       const rect = element.getBoundingClientRect();
    //       console.log(rect);
    //       if (rect.top <= offset && rect.bottom >= offset) {
    //         this.currentNav = section.value;
    //       }
    //     }
    //   }
    // },
    scrollToSection(nav) {
      if (this.currentNav === nav.hash.replace("#", "")) return;

      this.currentNav = nav.hash;
      const targetElement = document.getElementById(nav.hash.replace("#", ""));
      if (targetElement) {
        const rect = targetElement.getBoundingClientRect();
        console.log(rect);
        targetElement.scrollIntoView({
          behavior: "smooth"
        });
        // window.scrollTo({
        //   right: 1000,
        //   behavior: "smooth"
        // });
      }
    },
    handleChangeHover(isHover) {
      console.log(isHover);
    }
  }
};
</script>

<style lang="scss" scoped>
.cs-navbar {
  transition: all 0.2s ease-in-out;

  .cs-label {
    width: 0;
    // width: 200px;

    transition: all 0.2s ease-in-out;
  }

  &:hover {
    .cs-label {
      width: 200px;

      visibility: inherit;
    }
  }
}
</style>