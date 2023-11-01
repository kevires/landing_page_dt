<template>
  <header
    id="AppHeader"
    class="sticky top-0 z-20"
    :style="`height:${HEADER_HEIGHT}px`"
    :class="noBg || 'shadow-md bg-primary-550'"
  >
    <div class="container mx-auto px-4 py-4 h-full">
      <div class="flex">
        <div class="flex flex-row space-x-4">
          <div class="font-serif uppercase text-white flex flex-col items-center justify-center text-4xl">
            IDT
          </div>
          <div class="items-center text-white uppercase justify-center flex-col flex">
            <p>Công ty cổ phần tư vấn</p>
            <p>Chuyển đổi số quốc tế IDT</p>
        </div>
        </div>

        <slot />
        <nav
          id="Navbar"
          class="z-30 h-auto flex items-center justify-end ml-auto text-white transition-opacity"
        >
          <div
            v-for="(lang,index) in Object.values(LANGUAGE_CODES_NAME)"
            :key="index"
            @click="changeLanguage(lang)"
            class="flex p-3 md:p-4 lg:mb-0 tab-item text-lg h-full text-[#747474]"
            :class="{'!text-white': $lang === lang.toLocaleLowerCase()}"
          >
            <div class="my-auto cursor-pointer capitalize">{{ lang.toLocaleLowerCase()}}</div>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>
  
  <script>
import { LANGUAGE_CODES_NAME } from "@/lang";
import { NAV_LIST } from "../utils/constant";

export const HEADER_HEIGHT = 90;

export default {
  name: "AppHeader",
  components: {},
  data() {
    return {
      LANGUAGE_CODES_NAME,
      NAV_LIST,
      isOpen: false,
      currentNav: NAV_LIST[0],
      HEADER_HEIGHT
    };
  },
  props: ["noBg"],
  computed: {},
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
    changeLanguage(l) {
      const lang = l?.toLocaleLowerCase();
      this.$lang = lang;
      this.$forceUpdate();
    },
    handleChangeNav(nav) {
      this.currentNav = nav;
    }
  }
};
</script>
  
<style lang="scss" scoped>
#AppHeader {
  animation: fade-in 2s ease-in-out;
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
#AppHeader.shadow-md.bg-primary-550 {
  animation: initial-scroll 2s ease-in-out;
}
@keyframes initial-scroll {
  0% {
    opacity: 1;
    background: transparent;
    box-shadow: none;
  }
  50% {
    opacity: 0;
    background: transparent;
    box-shadow: none;
  }
  100% {
    opacity: 1;
    --tw-bg-opacity: 1;
    background-color: rgb(31 31 31 / var(--tw-bg-opacity));
    --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1),
      0 2px 4px -2px rgb(0 0 0 / 0.1);
    --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color),
      0 2px 4px -2px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
      var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  }
}

@media (max-width: 1024px) {
  #AppHeader.shadow-md.bg-primary-550 {
    animation: initial-scroll 0.5s ease-in-out;
  }

  #AppHeader {
    animation: fade-in 0.5s ease-in-out;
  }
}
</style>
  