<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask">
      <div class="modal-wrapper" @click="hideMenu">
        <div class="modal-container">
          <div class="modal-body">
            <div class="container">
              <router-link
                class="blog"
                to="/blog"
                style="text-align: center"
                @click="hideMenu"
                >BLOG</router-link
              >
              <a
                class="contact"
                href="mailto:support@keyboardfontsbuddy.app"
                @click="hideMenu"
                >CONTACT</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  name: "MobileMenu",
  props: {
    show: Boolean,
  },
  methods: {
    hideMenu() {
      this.$emit("hideMobileMenu");
    },
  },
};
</script>

<style scoped>
.container > a {
  text-decoration: none !important;
  color: #252525 !important;
  font-weight: 300;
  font-family: "Space Grotesk", sans-serif;
  font-size: 16px;
  line-height: 24px;

  text-align: center;
  display: inline-block;
}
.container > a:hover {
  text-decoration: none;
  color: inherit;
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.contact {
  margin-top: 16px;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.modal-container {
  width: calc(100% - 32px) !important;
  border-radius: 32px !important;
  margin: 0px auto;
  padding: 32px 0 !important;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 0 !important;
}

.modal-default-button {
  float: right;
}
.tox-tinymce-aux {
  z-index: 99999999999 !important;
}

/*
   * The following styles are auto-applied to elements with
   * transition="modal" when their visibility is toggled
   * by Vue.js.
   *
   * You can easily play with the modal transition by editing
   * these styles.
   */

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

@media screen and (max-width: 768px) {
  .container > a {
    text-decoration: none !important;
    color: #252525 !important;
    font-weight: 300;
    font-family: "Space Grotesk", sans-serif;
    font-size: 16px;
    line-height: 24px;

    text-align: center;
    display: inline-block;
  }
  .container > a:hover {
    text-decoration: none;
    color: inherit;
  }
}
</style>
