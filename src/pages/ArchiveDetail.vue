<template>
  <div
    class="relative lg:p-10 flex flex-col lg:static"
    :style="`height: calc(100vh - ${HEADER_HEIGHT}px)`"
  >
    <div class="h-full">
      <div class="flex justify-between items-center lg:h-full relative lg:static">
        <div
          @click="handleChangeIndex(Number($route.params.index)-1)"
          class="lg:relative cs-arrow absolute top-0 left-[35%] lg:left-0 -translate-x-2/4 lg:translate-x-0 z-10"
        >
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.49995 12.8L14.2 18.4C14.6 18.8 15.2 18.8 15.6 18.4C16 18 16 17.4 15.6 17L10.7 12L15.6 7.00005C16 6.60005 16 6.00005 15.6 5.60005C15.4 5.40005 15.2 5.30005 14.9 5.30005C14.6 5.30005 14.4 5.40005 14.2 5.60005L8.49995 11.2C8.09995 11.7 8.09995 12.3 8.49995 12.8C8.49995 12.7 8.49995 12.7 8.49995 12.8Z"
              fill="white"
            />
          </svg>
        </div>

        <div class="flex-1 h-full pt-20 lg:pt-0">
          <div class="flex items-center justify-center h-full">
            <img
              id="cs-img"
              class="object-cover object-center max-h-full animate__animated animate__fadeIn"
              :src="data.image"
              :alt="data.description_vi"
            />
          </div>
        </div>
        <div
          @click="handleChangeIndex(Number($route.params.index)+1)"
          class="lg:relative cs-arrow absolute top-0 right-[20%] lg:right-0 lg:translate-x-0 -translate-x-2/4 z-10"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.54 11.29L9.87998 5.64004C9.78702 5.54631 9.67642 5.47191 9.55456 5.42115C9.4327 5.37038 9.30199 5.34424 9.16998 5.34424C9.03797 5.34424 8.90726 5.37038 8.78541 5.42115C8.66355 5.47191 8.55294 5.54631 8.45998 5.64004C8.27373 5.8274 8.16919 6.08085 8.16919 6.34504C8.16919 6.60922 8.27373 6.86267 8.45998 7.05004L13.41 12.05L8.45998 17C8.27373 17.1874 8.16919 17.4409 8.16919 17.705C8.16919 17.9692 8.27373 18.2227 8.45998 18.41C8.5526 18.5045 8.66304 18.5797 8.78492 18.6312C8.90679 18.6827 9.03767 18.7095 9.16998 18.71C9.30229 18.7095 9.43317 18.6827 9.55505 18.6312C9.67692 18.5797 9.78737 18.5045 9.87998 18.41L15.54 12.76C15.6415 12.6664 15.7225 12.5527 15.7779 12.4262C15.8333 12.2997 15.8619 12.1631 15.8619 12.025C15.8619 11.8869 15.8333 11.7503 15.7779 11.6238C15.7225 11.4973 15.6415 11.3837 15.54 11.29Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <div
        id="slide-content"
        class="lg:absolute bottom-12 right-0 bg-black lg:max-w-[1000px] animate__animated animate__slideInRight"
      >
        <div class="flex flex-col gap-4 relative p-8">
          <div id="cs-divider" class="cs-divider"></div>
          <span
            id="cs-date"
            class="text-2xl italic text-[#98A2B3] animate__animated animate__fadeInRight"
          >{{ data.date }}</span>
          <span
            id="cs-description"
            class="text-[#beb4a8] text-lg animate__animated animate__fadeInRight animate__delay-1s"
          >{{ getDescription(data) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { HEADER_HEIGHT } from "../components/AppHeader.vue";
import dataJson from "../data/archive.js";
import { LANGUAGE_CODES_NAME } from "@/lang";

export default {
  name: "ArchiveDetail",
  data() {
    return {
      HEADER_HEIGHT,
      data: {},
      dataJson
    };
  },
  watch: {
    $route: {
      deep: true,
      handler() {
        this.handleGetData();
      }
    }
  },
  created() {
    this.handleGetData();
  },
  mounted() {},
  methods: {
    handleGetData() {
      const index = Number(this.$route.params.index) - 1;
      this.data = dataJson?.[index] || {};
      document
        ?.getElementById(`slide-content`)
        ?.classList.add("animate__slideInRight");
      document?.getElementById(`cs-divider`)?.classList.add("cs-divider");
      document
        ?.getElementById(`cs-date`)
        ?.classList.add("animate__fadeInRight");
      document?.getElementById(`cs-img`)?.classList.add("animate__fadeIn");
      document
        ?.getElementById(`cs-description`)
        ?.classList.add("animate__fadeInRight", "animate__delay-1s");
    },
    handleChangeIndex(index) {
      document
        .getElementById(`slide-content`)
        .classList.remove("animate__slideInRight");
      document.getElementById(`cs-divider`).classList.remove("cs-divider");
      document
        .getElementById(`cs-date`)
        .classList.remove("animate__fadeInRight");
      document.getElementById(`cs-img`).classList.remove("animate__fadeIn");
      document
        .getElementById(`cs-description`)
        .classList.remove("animate__fadeInRight", "animate__delay-1s");

      const newIndex =
        index <= 0 ? dataJson?.length - 1 : index > dataJson.length ? 1 : index;

      this.$router.push({ params: { index: newIndex } });
    },
    getDescription(item) {
      switch (this.$lang.toUpperCase()) {
        case LANGUAGE_CODES_NAME.VI:
          return item.description_vi;
        case LANGUAGE_CODES_NAME.EN:
          return item.description_en;
        case LANGUAGE_CODES_NAME.FR:
          return item.description_fr;
        default:
          return item.description_vi;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.cs-arrow {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #cbad88;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    transition: all 0.2s ease-in-out 0.1s;
  }
}

.cs-divider {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  height: 70%;
  width: 4px;
  background: #e0af3e;
  animation: divider 1.5s ease-in-out 0.3s;
}

@keyframes divider {
  0% {
    height: 0%;
    opacity: 0;
  }
  100% {
    height: 70%;
    opacity: 1;
  }
}
</style>