<template>
  <div class="flex flex-col min-h-full w-full relative bg-[#1D2939]">
    <AppHeader :no-bg="true">
      <div class="justify-center items-center md:flex text-white">
        <a href="/" class>
          <div class="text-sm text-center text-white flex-1 cursor-pointer">{{ $t('lbl_home') }}</div>
        </a>
        <!-- <span class="text-sm">
          <router-link to="/archive" class="!text-white">{{ $t('lbl_archive') }}</router-link>
        </span> -->
      </div>
    </AppHeader>
    <div role="main" class="relative flex-1 text-white">
      <slot />
    </div>
  </div>
</template>
  
  <script>
import AppHeader from "../components/AppHeader.vue";

export default {
  name: "AppLayout",
  components: { AppHeader },
  data() {
    return {};
  },

  methods: {}
};
</script>
  <style lang="scss" scoped>
</style>