<template>
  <div v-if="isModalOpen" class="modal">
    <div class="modal-content" :style="type === 'terms' ? 'width: 500px;' : ''">
      <!-- Add the content of your modal here -->
      <div v-if="type === 'rules'">
        <p>Rregullat</p>
        <div class="content-wrapper">
          <div>
            <img
              src="../../assets/images/contract_1.jpg"
              width="500"
              height="700"
            />
          </div>
          <div>
            <img
              src="../../assets/images/contract_2.jpg"
              width="500"
              height="700"
            />
          </div>
        </div>
      </div>
      <div v-else-if="type === 'terms'">
        <p>Kushtet</p>
        <div class="content-wrapper" style="margin-top: 32px">
          Lorem ipsum dolor. Lorem ipsum dolor. Lorem ipsum dolor. Lorem ipsum
          dolor. Lorem ipsum dolor. Lorem ipsum dolor. Lorem ipsum dolor. Lorem
          ipsum dolor. Lorem ipsum dolor. Lorem ipsum dolor. Lorem ipsum dolor.
          Lorem ipsum dolor. Lorem ipsum dolor. Lorem ipsum dolor. Lorem ipsum
          dolor. Lorem ipsum dolor. Lorem ipsum dolor. Lorem ipsum dolor. Lorem
          ipsum dolor. Lorem ipsum dolor. Lorem ipsum dolor. Lorem ipsum dolor.
          Lorem ipsum dolor. Lorem ipsum dolor. Lorem ipsum dolor. Lorem ipsum
          dolor. Lorem ipsum dolor. Lorem ipsum dolor. Lorem ipsum dolor. Lorem
          ipsum dolor. Lorem ipsum dolor. Lorem ipsum dolor. Lorem ipsum dolor.
          Lorem ipsum dolor. Lorem ipsum dolor. Lorem ipsum dolor. Lorem ipsum
          dolor. Lorem ipsum dolor. Lorem ipsum dolor.
        </div>
      </div>
      <p v-else-if="type === 'privacy'">Privacy</p>
      <p v-else-if="type === 'code'">
        Kodi juaj unik eshte: {{ generatedCode }}
      </p>
      <p v-else-if="type === 'error'">
        Ju lutemi plotesoni te gjitha fushat per te vazhduar!
      </p>
      <p v-else-if="type === 'acceptRules'">Ju duhet te pranoni rregullat!</p>
      <p v-else-if="type === 'acceptTerms'">Ju duhet te pranoni kushtet!</p>
      <div style="display: flex; justify-content: center">
        <button class="close-button" @click="closeModal">Mbyll</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isModalOpen: {
      type: Boolean,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    generatedCode: {
      type: String,
      required: true,
    },
  },
  methods: {
    closeModal() {
      this.$emit("closeModal");
    },
  },
};
</script>

<style scoped>
/* Add your styling for the modal here */
.modal {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.modal-content {
  background-color: #fff;
  padding: 24px;
  max-width: 1000px;
  margin: auto;
  border-radius: 5px;
  z-index: 9999;
}

.content-wrapper {
  display: flex;
}

p {
  text-align: center;
  font-family: "Montserrat", sans-serif;
}

.close-button {
  appearance: button;
  backface-visibility: hidden;
  background-color: #16278a;
  border-radius: 6px;
  border-width: 0;
  box-shadow: rgba(50, 50, 93, 0.1) 0 0 0 1px inset,
    rgba(50, 50, 93, 0.1) 0 2px 5px 0, rgba(0, 0, 0, 0.07) 0 1px 1px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue",
    Ubuntu, sans-serif;
  font-size: 100%;
  height: 44px;
  line-height: 1.15;
  margin: 24px 0 0;
  outline: none;
  overflow: hidden;
  padding: 0 25px;
  position: relative;
  text-align: center;
  text-transform: none;
  transform: translateZ(0);
  transition: all 0.2s, box-shadow 0.08s ease-in;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 50%;
}

.close-button:focus {
  box-shadow: rgba(50, 50, 93, 0.1) 0 0 0 1px inset,
    rgba(50, 50, 93, 0.2) 0 6px 15px 0, rgba(0, 0, 0, 0.1) 0 2px 2px 0,
    rgba(50, 151, 211, 0.3) 0 0 0 4px;
}
</style>
