<template>
  <div id="SectionContainer" class="h-full relative min-w-screen overflow-hidden w-full">
    <Transition name="fade-out">
      <div class="title-container">
        <p class="text-white mt-24">{{ $t('lbl_history_of_formation_and_development') }}</p>
        <SmoothScrollIcon></SmoothScrollIcon>
      </div>
    </Transition>
    <LoginModal :show-modal="isShowLoginModal" @onClose="()=>{isShowLoginModal=false}" />
  </div>
</template>
  
<script>
import SmoothScrollIcon from "@/components/SmoothScrollIcon.vue";
import LoginModal from "../components/Modals/LoginModal.vue";

export default {
  name: "LoginPage",
  components: { SmoothScrollIcon, LoginModal },
  data() {
    return {
      isShowLoginModal: false
    };
  },
  mounted() {
    window.addEventListener("mousewheel", this.handleScroll);
    window.addEventListener("touchmove", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("mousewheel", this.handleScroll);
  },
  methods: {
    handleScroll() {
      //   this.$eventBus.$emit("initialScroll");
      this.isShowLoginModal = true;
    }
  }
};
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
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 36px;
  line-height: 54px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    width: 60vw;
    margin-left: auto;
    margin-right: auto;
    transform: translateY(-50%);
  }
  .icon-scroll {
    bottom: 100px;
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
  