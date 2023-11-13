<template>
  <div id="SectionContainer" class="h-full relative min-w-screen overflow-hidden w-full">
    <!-- Service -->
    <div class="justify-center items-center flex">
      <div class="w-2/3 justify-center items-center">
        <div class="grid grid-cols-2 gap-4 mt-5 text-white">
          <div class="">
            <div class="flex">
              <p class="text-white mt-6 text-4xl font-semibold leading-normal">Dịch vụ chúng tôi cung cấp</p>
            </div>
            <div class="mt-8">
              <div class="flex class mb-6">
                <div class="mx-auto flex">
                  <div>
                    <img src="../assets/icon/about-icon-02.png" alt="" width="60" class="mt-2">
                  </div>
                  <div class="flex flex-col ml-5">
                    <p class="text-2xl font-normal">Tư vấn khảo sát, lắp đặt dự án</p>
                    <p class="leading-9">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  </div>
                </div>
              </div>
              <div class="flex class mb-6">
                <div class="mx-auto flex">
                  <div>
                    <img src="../assets/icon/about-icon-01.png" alt="" width="60" class="mt-2">
                  </div>
                  <div class="flex flex-col ml-5">
                    <p class="text-2xl font-normal">Kiểm thử phần mềm</p>
                    <p class="leading-9">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  </div>
                </div>
              </div>
              <div class="flex class mb-6">
                <div class="mx-auto flex">
                  <div>
                    <img src="../assets/icon/about-icon-03.png" alt="" width="60" class="mt-2">
                  </div>
                  <div class="flex flex-col ml-5">
                    <p class="text-2xl font-normal">Tư vấn đấu thầu</p>
                    <p class="leading-9">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="image_develop" />
        </div>
      </div>
    </div>
    <!-- HR -->
    <div class="mb-4 w-full justify-center item-center flex mt-20">
      <div
        style="width: 100%; height: 362px; flex-direction: column; justify-content: flex-start; align-items: center; gap: 48px; display: inline-flex">
        <div style="color: black; font-size: 35px; font-weight: 600; word-wrap: break-word">Đôi ngũ
          chuyên gia</div>
        <div style="justify-content: flex-start; align-items: center; gap: 72px; display: inline-flex">
          <div
            style="flex-direction: column; justify-content: flex-start; align-items: center; gap: 8px; display: inline-flex">
            <img style="width: 160px; height: 160px; border-radius: 9999px" src="../assets/images/ava_1.png" />
            <div style="color: black; font-size: 20px;  font-weight: 600; word-wrap: break-word">Ông
              Phạm Minh Tuấn</div>
            <div
              style="text-align: center; color: black; font-size: 16px;  font-weight: 400; line-height: 36px; word-wrap: break-word">
              GĐ điều hành<br />TS CNTT</div>
          </div>
          <div
            style="flex-direction: column; justify-content: flex-start; align-items: center; gap: 8px; display: inline-flex">
            <img style="width: 160px; height: 160px; border-radius: 9999px" src="../assets/images/ava_2.png" />
            <div style="color: black; font-size: 20px;  font-weight: 600; word-wrap: break-word">Ông
              Phạm Minh Tuấn</div>
            <div
              style="text-align: center; color: black; font-size: 16px;  font-weight: 400; line-height: 36px; word-wrap: break-word">
              GĐ điều hành<br />TS CNTT</div>
          </div>
          <div
            style="flex-direction: column; justify-content: flex-start; align-items: center; gap: 8px; display: inline-flex">
            <img style="width: 160px; height: 160px; border-radius: 9999px" src="../assets/images/ava_3.png" />
            <div style="color: black; font-size: 20px;  font-weight: 600; word-wrap: break-word">Ông
              Phạm Minh Tuấn</div>
            <div
              style="text-align: center; color: black; font-size: 16px;  font-weight: 400; line-height: 36px; word-wrap: break-word">
              GĐ điều hành<br />TS CNTT</div>
          </div>
          <div
            style="flex-direction: column; justify-content: flex-start; align-items: center; gap: 8px; display: inline-flex">
            <img style="width: 160px; height: 160px; border-radius: 9999px" src="../assets/images/ava_4.png" />
            <div style="color: black; font-size: 20px;  font-weight: 600; word-wrap: break-word">Ông
              Phạm Minh Tuấn</div>
            <div
              style="text-align: center; color: black; font-size: 16px;  font-weight: 400; line-height: 36px; word-wrap: break-word">
              GĐ điều hành<br />TS CNTT</div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'HomePage',
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
    -ms-overflow-style: none;
    /* IE and Edge */
    scrollbar-width: none;
    /* Firefox */
  }
}

.title-container {
  position: absolute;
  z-index: 1000;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 28px;
  line-height: 54px;
  height: 100%;
  display: flex;
  align-items: center;

  p {
    width: 60vw;
    transform: translateY(-50%);
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

.image_develop {
  background: url("../assets/images/web-development\ 1.png") no-repeat;
}</style>
