<template>
  <div>
    <div class="flex flex-col h-full w-full relative homepage">
    <AppHeader :no-bg="isHome">
      <div class="flex justify-end w-4/12">
        <a href="/" class="">
          <div
            class="text-base text-white text-center cursor-pointer"
          >{{ $t('Trang chủ') }}</div>
        </a>
        <a href="/" class="ml-10">
          <div
            class="text-base text-white text-center cursor-pointer"
          >{{ $t('Đội ngũ chuyên gia') }}</div>
        </a>
        <a href="/" class="ml-10">
          <div
            class=" text-base text-white text-center cursor-pointer"
          >{{ $t('Hồ sơ năng lực') }}</div>
        </a>
      </div>
    </AppHeader>
    <div role="main" class="relative flex-1">
      <slot :no-bg="isHome" />
    </div>
  </div>
  </div>
</template>

<script>
import AppHeader from '../components/AppHeader.vue'

export default {
  name: 'AppLayout',
  components: { AppHeader },
  data () {
    return {
      isHome: true
    }
  },
  mounted () {
    this.$eventBus.$on('initialScroll', this.handlerInitialScroll)
  },
  unmounted () {
    this.$eventBus.$off('initialScroll', this.handlerInitialScroll)
  },
  methods: {
    handlerInitialScroll () {
      this.isHome = false
    }
  }
}
</script>
<style lang="scss" scoped>
.homepage {
  background-image: url("../assets/images/backgroud-gr-1.png");
  height: calc(100vh - 250px);
  background-size: cover;
  background-position: center;
  font-family: 'Inter', sans-serif;
}
.background_main {
  background: linear-gradient(264deg, #2E43F0 29.39%, #67F 93.49%);
  position: absolute;
  z-index: 2;
  height: calc(100vh - 100px);

}
</style>
