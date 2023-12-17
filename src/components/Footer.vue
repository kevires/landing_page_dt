<template>
  <footer id="AppHeader" class="top-0 z-40 mb-12" :style="`height:${HEADER_HEIGHT}px`">
    <div class="container mx-auto py-4 h-full">
      <div style="width: 100%; height: 64px; position: relative">
        <div class="space-x-20 group_router">
          <div class="group_router_item">
            <div
              :style="hightLightRouter('Home')"
              @click="$router.push({name: 'Home'})"
              >
              Trang chủ
            </div>
          </div>
          <div class="group_router_item">
            <div
            :style="hightLightRouter('HR')"
            @click="$router.push({name: 'HR'})"
              >
              Đội ngũ chuyên gia
            </div>
          </div>
          <!-- <div class="group_router_item">
            <div
            :style="hightLightRouter('Profile')"
            @click="$router.push({name: 'Profile'})"
              >
              Hồ sơ năng lực</div>
          </div> -->
        </div>
        <div
          style="left: 0px; top: 0px; position: absolute; text-align: center; color: white;  font-weight: 600; line-height: 32px; word-wrap: break-word; font-size: calc(2rem - 13px)">
          CÔNG TY CỔ PHẦN TƯ VẤN<br />CHUYỂN ĐỔI SỐ QUỐC TẾ DT</div>
      </div>
    </div>
  </footer>
</template>

<script>
import { LANGUAGE_CODES_NAME } from '@/lang'
import { NAV_LIST } from '../utils/constant'

export const HEADER_HEIGHT = 90

export default {
  name: 'Footer',
  components: {},
  data () {
    return {
      LANGUAGE_CODES_NAME,
      NAV_LIST,
      isOpen: false,
      currentNav: NAV_LIST[0],
      HEADER_HEIGHT
    }
  },
  props: ['noBg'],
  computed: {},
  created () {
    console.log(this.$route.name)
  },
  methods: {
    hightLightRouter (name) {
      const cunrentRouter = this.$route.name
      if (cunrentRouter !== name) return 'opacity: 0.50'
      return ''
    },
    toggleMenu () {
      this.isOpen = !this.isOpen
    },
    changeLanguage (l) {
      const lang = l?.toLocaleLowerCase()
      this.$lang = lang
      this.$forceUpdate()
    },
    handleChangeNav (nav) {
      this.currentNav = nav
    }
  }
}
</script>

<style lang="scss" scoped>
.group_router {
  left: 40rem;
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
}

.group_router_item {
  height: 40px;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  word-wrap: break-word;
  font-size: calc(2rem - 13px);
  color: white;
  cursor: pointer;
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
