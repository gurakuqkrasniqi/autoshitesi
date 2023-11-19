<template>
  <div
    class="main-container"
    style="
      max-width: 1140px;
      width: 100%;
      margin-left: auto;
      margin-right: auto;
    "
  >
    <header>
      <div class="contact">
        <!-- <a class="to-hide" href="mailto:support@keyboardfontsbuddy.app" -->
        <a
          class="to-hide"
          style="margin-right: 32px"
          :style="hideFooter ? 'visibility: hidden' : ''"
          href="mailto:support@keyboardfontsbuddy.app"
          >AL</a
        >
        <a
          class="to-hide"
          style="margin-right: 32px"
          :style="hideFooter ? 'visibility: hidden' : ''"
          href="mailto:support@keyboardfontsbuddy.app"
          >EN</a
        >
        <a
          class="to-hide"
          style="margin-right: 32px"
          :style="hideFooter ? 'visibility: hidden' : ''"
          href="mailto:support@keyboardfontsbuddy.app"
          >DE</a
        >
      </div>
    </header>
  </div>
  <Teleport to="body">
    <MobileMenu :show="showMenuModal" @hideMobileMenu="hideMobileMenu">
    </MobileMenu>
  </Teleport>
</template>

<script>
import MobileMenu from "./MobileMenu.vue";

export default {
  data() {
    return {
      showMenuModal: false,
      isCustomizePage: false,
    };
  },
  props: ["hideFooter"],
  components: {
    MobileMenu,
  },
  methods: {
    hideMobileMenu() {
      this.showMenuModal = false;
    },
  },
  mounted() {
    if (this.$route.path?.includes("blog")) {
      this.isCustomizePage = true;
    } else {
      this.isCustomizePage = false;
    }
  },
  watch: {
    $route() {
      if (this.$route.path?.includes("blog")) {
        this.isCustomizePage = true;
      } else {
        this.isCustomizePage = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  max-width: 100%;
  flex-basis: 100%;
  display: flex;
  align-items: center;
  justify-content: right;
  color: #252525;
  font-weight: 300;
  font-family: "Space Grotesk", sans-serif;
  .title {
    width: calc(100% / 3);
    font-size: 24px;
    font-weight: inherit;
    text-align: left;
    line-height: 32px;
    padding: 32px 0 32px 0;
    .short-title {
      display: none;
    }
    a {
      text-decoration: none;
      color: inherit;
      font-weight: inherit;
      display: inline-block;
    }
  }
  .contact {
    width: calc(100% / 3);
    text-align: right;
    padding: 36px 0px 36px 0px;
    a {
      text-decoration: none;
      color: inherit;
      font-weight: inherit;
      line-height: 24px;
      display: inline-block;
    }
    a:hover {
      text-decoration: none;
      color: inherit;
    }
    .burger-menu {
      display: none;
    }
  }
}

@media screen and (max-width: 1200px) {
  header {
    padding: 0 2rem;
  }
}

@media screen and (max-width: 936px) {
  header {
    .title {
      .main-title {
        display: none;
      }
      .short-title {
        display: inline-block;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  header {
    padding: 0 2rem;
    .title {
      width: calc(100% / 3);
      font-size: 24px;
      padding: 16px 0 16px 0;
      .main-title {
        display: none;
      }
      .short-title {
        display: inline-block;
      }
    }
    .contact {
      width: calc(100% / 3);
      padding: 0;
      margin: 0;
      .to-hide {
        display: none;
      }
      .burger-menu {
        display: inline-block;
      }
    }
  }
}
</style>
