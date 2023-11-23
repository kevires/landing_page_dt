<template>
  <div id="SectionContainer" class="h-full relative min-w-screen overflow-hidden w-full">

  </div>
</template>

<script>
export default {
  name: 'Profile',

  methods: {
  },
  mounted () {
  },
  destroyed () {
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
}
.profile {
  height: 30rem;
  width: 100%;
  background: url("../assets/images/background-gr-2.png")  no-repeat;
  background-size: cover;
  justify-content: center;
  align-items: center;
  display: flex;
}
</style>
