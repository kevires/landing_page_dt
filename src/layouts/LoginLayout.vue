<template>
  <div class="flex flex-col h-full w-full relative homepage">
    <AppHeader :no-bg="true">
      <div
        class="hidden md:block text-2xl text-white text-center flex-1 cursor-pointer"
      >{{ $t('lbl_home') }}</div>
    </AppHeader>
    <div role="main" class="relative flex-1">
      <slot />
    </div>
  </div>
</template>
  
  <script>
import AppHeader from "../components/AppHeader.vue";

export default {
  name: "LoginLayout",
  components: { AppHeader },
  mounted() {
    this.$eventBus.$on("initialScroll", this.handlerInitialScroll);
  },
  unmounted() {
    this.$eventBus.$off("initialScroll", this.handlerInitialScroll);
  },
  methods: {
    handlerInitialScroll() {
      //   this.isHome = false;
    }
  }
};
</script>
  <style lang="scss" scoped>
.homepage {
  background-image: url("@/assets/home-background.png");
  background-size: cover;
  background-position: center;
}
</style>