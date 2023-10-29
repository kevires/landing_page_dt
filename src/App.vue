<template>
  <div id="app" class="h-full">
    <component :is="layout">
      <template #default="{noBg}">
        <router-view :no-bg="noBg"></router-view>
      </template>
    </component>
  </div>
</template>

<script>
import appUtils from "@/utils/appUtils.js";

const defaultLayout = "app";
export default {
  name: "App",
  components: {},
  computed: {
    layout() {
      return (this.$route.meta.layout || defaultLayout) + "-layout";
    }
  },
  created() {
    if (appUtils.getLocalLang()) {
      this.$lang = appUtils.getLocalLang();
    } else {
      this.$lang = "vi";
    }
    document.querySelector("html").setAttribute("lang", this.$lang);
  },
  watch: {
    $lang(lang) {
      this.$i18n.locale = lang;
      appUtils.setLocalLang(lang);
      document.querySelector("html").setAttribute("lang", lang);
    }
  }
};
</script>
<style lang="scss">
.el-notification {
  align-items: center;
}
</style>
