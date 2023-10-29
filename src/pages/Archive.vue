<template>
  <div
    class="container mx-auto flex items-center animate__animated animate__fadeIn"
    :style="`min-height: calc(100vh - ${HEADER_HEIGHT}px)`"
  >
    <div class="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-10">
      <div
        v-for="(item,index) in dataJson"
        :key="index"
        @click="handleShowModalDetail(index+1)"
        class="flex gap-4 justify-between cursor-pointer cs-hover"
      >
        <div class="flex-1">
          <img :src="(item.image)" class="max-w-[175px]" />
          <!-- <img src="../assets/images/img-archive-1969.png" class="max-w-[175px]" /> -->
        </div>
        <div class="flex-1 flex flex-col gap-2">
          <span class="text-[#98A2B3] italic">{{ item.date }}</span>
          <span class="text-ellipsis">{{ getDescription(item)}}</span>
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
  name: "Archive",
  data() {
    return {
      dataJson,
      HEADER_HEIGHT
    };
  },
  methods: {
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
    },
    handleShowModalDetail(index) {
      this.$router.push({
        name: "ArchiveDetail",
        params: {
          index
        }
      });
    }
    // getImage(){

    // }
  }
};
</script>

<style lang="scss" scoped>
.text-ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5; // default 1 line
  -webkit-box-orient: vertical;
  font-size: 12px;
  line-height: 18px;
}

.cs-hover {
  &:hover {
    * {
      color: #eec593 !important;
    }

    img {
      transform: scale(1.1);
      transition: all 0.2s ease-in-out;
    }
  }
}
</style>