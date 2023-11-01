<template>
  <div id="SectionContainer" class="h-full relative min-w-screen overflow-hidden w-full">
    <Transition name="fade-out">
      <div class="">
        <!-- <p class="text-white mt-24">{{ $t('lbl_history_of_formation_and_development') }}</p> -->
        <!-- <SmoothScrollIcon></SmoothScrollIcon> -->
        <div class="w-full justify-center items-center">
          <p class="text-white mt-24 text-2xl ml-28">Dịch vụ chúng tôi cung cấp</p>
          <div class="grid grid-cols-3 gap-4 mt-5 text-white">
            <div class="flex flex-col justify-center items-center">
              <p>Tư vấn khảo sát, lắp đặt dự án, thiết kế, kiểm tra</p>
              <p>...........................................................................................</p>
              <p>...........................................................................................</p>
              <p>...........................................................................................</p>
              <p>...........................................................................................</p>
              <p>...........................................................................................</p>
            </div>
            <div class="flex flex-col justify-center items-center">
              <p>Kiểm thử phần mềm.....................................................</p>
              <p>...........................................................................................</p>
              <p>...........................................................................................</p>
              <p>...........................................................................................</p>
              <p>...........................................................................................</p>
              <p>...........................................................................................</p>
            </div>
            <div class="flex flex-col justify-center items-center">
              <p>Tư vấn đấu thầu............................................................</p>
              <p>...........................................................................................</p>
              <p>...........................................................................................</p>
              <p>...........................................................................................</p>
              <p>...........................................................................................</p>
              <p>...........................................................................................</p>
            </div>
          </div>
        </div>
        <div class="w-full">
          <p class="text-white mt-24 text-2xl ml-28">Nhân lực của chúng tôi</p>
          <div class="grid grid-cols-4 gap-4 mt-5 text-white">
            <div class="flex flex-col justify-center items-center text-lg">
              <img src="@/assets/user_icon.png" alt="" class="w-24">
                <p>Ông Phạm Minh Tuấn</p>
                <p>Giám đốc điều hành</p>
                <p>TS....</p>
            </div>
            <div class="flex flex-col justify-center items-center text-lg">
              <img src="@/assets/user_icon.png" alt="" class="w-24">
              <p>Ông Phạm Minh Tuấn</p>
                <p>Giám đốc điều hành</p>
                <p>TS....</p>
            </div>
            <div class="flex flex-col justify-center items-center text-lg">
              <img src="@/assets/user_icon.png" alt="" class="w-24">
              <p>Ông Phạm Minh Tuấn</p>
                <p>Giám đốc điều hành</p>
                <p>TS....</p>
            </div>
            <div class="flex flex-col justify-center items-center text-lg">
              <img src="@/assets/user_icon.png" alt="" class="w-24">
              <p>Ông Phạm Minh Tuấn</p>
                <p>Giám đốc điều hành</p>
                <p>TS....</p>
            </div>
          </div>
        </div>

      </div>
    </Transition>
    <!-- <div v-show="!noBg" class="bg-orange-150 h-full relative animate__animated animate__zoomIn">
      <div class="flex h-full w-full pb-20 lg:pb-0">
        <Navbar />
        <div
          id="homeContainer"
          class="bg-orange-150 h-full mx-8 flex-1 px-0 lg:px-24 pt-0 lg:pt-14 flex lg:items-center lg:min-w-full overflow-x-hidden overflow-y-hidden lg:overflow-x-scroll cs-hidden-scrollbar"
        >
          <HistoriesSection />
        </div>
        <div
          class="fixed bottom-6 left-1/2 -translate-x-2/4 italic hover:text-[#978268] flex items-center gap-2 cursor-pointer"
          @click="handleShowArchive"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.0001 4.25C8.48129 4.25 7.25007 5.48122 7.25007 7C7.25007 8.51878 8.48129 9.75 10.0001 9.75C11.5189 9.75 12.7501 8.51878 12.7501 7C12.7501 5.48122 11.5189 4.25 10.0001 4.25ZM8.75007 7C8.75007 6.30964 9.30972 5.75 10.0001 5.75C10.6904 5.75 11.2501 6.30964 11.2501 7C11.2501 7.69036 10.6904 8.25 10.0001 8.25C9.30972 8.25 8.75007 7.69036 8.75007 7Z"
              fill="currentColor"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.0001 0.25C6.27215 0.25 3.25007 3.27208 3.25007 7C3.25007 8.07108 3.49954 9.0839 3.94355 9.98351L0.568604 15.8291L4.66689 16.2306L7.06379 19.5791L9.99814 14.4966L12.9325 19.5791L15.3294 16.2306L19.4277 15.8291L16.0548 9.98712C16.4999 9.0866 16.7501 8.07251 16.7501 7C16.7501 3.27208 13.728 0.25 10.0001 0.25ZM3.0315 14.5632L4.86716 11.3838C5.85048 12.534 7.21371 13.3498 8.76252 13.6368L6.92862 16.8132L5.49048 14.8042L3.0315 14.5632ZM15.1307 11.3865C14.1468 12.5362 12.7832 13.3513 11.2341 13.6375L13.0677 16.8132L14.5058 14.8042L16.9648 14.5632L15.1307 11.3865ZM4.75007 7C4.75007 4.10051 7.10058 1.75 10.0001 1.75C12.8996 1.75 15.2501 4.10051 15.2501 7C15.2501 9.8995 12.8996 12.25 10.0001 12.25C7.10058 12.25 4.75007 9.8995 4.75007 7Z"
              fill="currentColor"
            />
          </svg>

          <span class="animate__animated animate__fadeInUp">{{ $t('lbl_archive') }}</span>
        </div>
      </div>
    </div> -->

    <PostModal />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import SmoothScrollIcon from '@/components/SmoothScrollIcon.vue'
import HistoriesSection from '../components/Section/HistoriesSection.vue'
import PostModal from '../components/Modals/PostModal.vue'

export default {
  name: 'HomePage',
  components: { Navbar, SmoothScrollIcon, HistoriesSection, PostModal },
  props: ['noBg'],
  watch: {
    // noBg() {
    //   if (!this.noBg) {
    //     setTimeout(this.handleTriggerScrollHorizon, 1500);
    //   }
    // }
  },

  methods: {
    handleScroll () {
      if (this.noBg) {
        this.$eventBus.$emit('initialScroll')
      }
    },
    handleTriggerScrollHorizon () {
      const self = this

      if (!document) return

      const homeEl = document.querySelector('#homeContainer')

      if (!homeEl) return

      homeEl.addEventListener(
        'mousewheel',
        e => self.scrollHorizon(e, homeEl),
        false
      )
    },
    scrollHorizon (event, element) {
      var delta = Math.max(-1, Math.min(1, event.wheelDelta || -event.detail))
      var scrollSpeed = 80
      element.scrollLeft -= delta * scrollSpeed
      event.preventDefault()
    },
    handleShowArchive () {
      this.$router.replace({ name: 'Archive' })
    }
  },
  mounted () {
    // window.addEventListener("mousewheel", this.handleScroll);
    // window.addEventListener("touchmove", this.handleScroll);
  },
  destroyed () {
    // window.removeEventListener("mousewheel", this.handleScroll);

    // const homeEl = document.querySelector("#homeContainer");
    // if (!homeEl) return;

    // homeEl.addEventListener(
    //   "mousewheel",
    //   e => this.scrollHorizon(e, homeEl),
    //   false
    // );
  }
}
</script>

<style lang="scss" scoped>
.cs-hidden-scrollbar {
  &::-webkit-scrollbar {
    display: none;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
}

.title-container {
  // margin-top: calc(50vh - 128px);
  position: absolute;
  z-index: 1000;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  // text-align: center;
  font-size: 28px;
  line-height: 54px;
  height: 100%;
  display: flex;
  align-items: center;
  // justify-content: center;

  p {
    width: 60vw;
    // margin-left: auto;
    // margin-right: auto;
    transform: translateY(-50%);
  }
}
#SectionContainer {
  animation: fade-in 1s ease-in-out;
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

#SectionContainer.bg-orange-150 {
  animation: fade-out 1s ease-in-out;
}
@keyframes fade-out {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

#homeContainer {
  // animation: background-fade-in 2s ease-in-out;
}
@keyframes background-fade-in {
  0% {
    display: none;
    opacity: 0;
    background-color: none;
  }
  51% {
    display: none;
    opacity: 0;
    background-color: none;
    transform: scale(0);
  }
  100% {
    transform: scale(1);
    opacity: 1;
    --tw-bg-opacity: 1;
    background-color: rgb(239 238 233 / var(--tw-bg-opacity));
  }
}

.fade-out-enter-active,
.fade-out-leave-active {
  transition: opacity 1s ease;
}

.fade-out-enter-from,
.fade-out-leave-to {
  opacity: 0;
}

@media (max-width: 1024px) {
  #homeContainer {
    animation: background-fade-in 0.5s ease-in-out;
  }

  #SectionContainer {
    animation: fade-in 0.5s ease-in-out;
  }

  #SectionContainer.bg-orange-150 {
    animation: fade-out 0.5s ease-in-out;
  }

  .fade-out-leave-active {
    transition: opacity 0.5s ease;
  }

  .title-container {
    font-size: 24px;
    line-height: 40px;

    .icon-scroll {
      bottom: 60px;
    }
  }
}
</style>
