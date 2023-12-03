<template>
  <div v-if="isModalOpen" class="modal">
    <div class="modal-content" :style="type === 'terms' ? 'width: 500px;' : ''">
      <!-- Add the content of your modal here -->
      <div v-if="type === 'rules'">
        <p>Rregullat</p>
        <div class="content-wrapper">
          <div class="image-container">
            <img
              src="../../assets/images/contract_1.jpg"
              width="500"
              height="700"
            />
            <p class="image-caption-1">{{ getCurrentDate() }}</p>
            <p class="image-caption-2">
              {{ fullName ?? "" }} {{ otherInfo ?? "" }}
            </p>
          </div>
          <div class="image-container">
            <img
              src="../../assets/images/contract_2.jpg"
              width="500"
              height="700"
            />
            <p class="image-caption-3">{{ fullName ?? "" }}</p>
          </div>
        </div>
        <div class="pdf-content-wrapper">
          <div class="pdf-image-container">
            <img
              src="../../assets/images/contract_1.jpg"
              width="720"
              height="1040"
            />
            <p class="pdf-image-caption-1">{{ getCurrentDate() }}</p>
            <p class="pdf-image-caption-2">
              {{ fullName ?? "" }} {{ otherInfo ?? "" }}
            </p>
          </div>
          <div class="image-container">
            <img
              src="../../assets/images/contract_2.jpg"
              width="720"
              height="1030"
            />
            <p class="pdf-image-caption-3">{{ fullName ?? "" }}</p>
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
        {{
          language === "sq"
            ? "Kodi juaj unik"
            : language === "en"
            ? "Unique code"
            : "Ihr einzigartiger Code"
        }}: {{ generatedCode }}
      </p>
      <p v-else-if="type === 'error'">
        {{
          language === "sq"
            ? "Ju lutemi plotesoni te gjitha fushat per te vazhduar!"
            : language === "en"
            ? "Please fill in all fields to continue!"
            : "Bitte füllen Sie alle Felder aus, um fortzufahren!"
        }}
      </p>
      <p v-else-if="type === 'acceptRules'">
        {{
          language === "sq"
            ? "Ju duhet te pranoni rregullat!"
            : language === "en"
            ? "You must accept the rules!"
            : "Sie müssen die Regeln akzeptieren!"
        }}
      </p>
      <p v-else-if="type === 'acceptTerms'">
        {{
          language === "sq"
            ? "Ju duhet te pranoni kushtet!"
            : language === "en"
            ? "You must accept the terms!"
            : "Sie müssen die Bedingungen akzeptieren!"
        }}
      </p>
      <div
        v-if="type === 'rules'"
        style="display: flex; justify-content: center"
      >
        <button class="close-button" @click="printPdf">
          {{
            language === "sq"
              ? "Shkarko"
              : language === "en"
              ? "Download"
              : "Herunterladen"
          }}
        </button>
      </div>
      <div style="display: flex; justify-content: center">
        <button class="close-button" @click="closeModal">
          {{
            language === "sq"
              ? "Mbyll"
              : language === "en"
              ? "Close"
              : "Schließen"
          }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import html2pdf from "html2pdf.js";

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
    fullName: {
      type: String,
      required: true,
    },
    otherInfo: {
      type: String,
      required: true,
    },
    language: {
      type: String,
      required: true,
    },
  },
  methods: {
    closeModal() {
      this.$emit("closeModal");
    },
    printPdf() {
      const contentWrapper = document.querySelector(".pdf-content-wrapper");
      var clonedElement = contentWrapper.cloneNode(true);
      clonedElement.style.display = "block";

      if (contentWrapper) {
        const options = {
          margin: 10,
          filename: "Kontrata.pdf",
          image: { type: "jpeg", quality: 0.98 },
          html2canvas: { scale: 2 },
          jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
        };

        html2pdf(clonedElement, options).outputPdf();
        clonedElement.remove();
      }
    },
    getCurrentDate() {
      const currentDate = new Date();

      const day = currentDate.getDate().toString().padStart(2, "0");
      const month = (currentDate.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-based
      const year = currentDate.getFullYear();

      const formattedDate = `${day}.${month}.${year}`;
      return formattedDate;
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
  flex-direction: column;
  overflow: auto; /* Add a vertical scrollbar when content exceeds the container height */
  overflow-x: hidden; /* Add a vertical scrollbar when content exceeds the container height */
  max-height: 700px; /* Set a maximum height for scrolling, adjust as needed */
}

.image-container {
  position: relative;
}

.image-caption-1 {
  position: absolute;
  top: 146px;
  left: 69px;
  color: black; /* Optional: Set the color of the caption */ /* Optional: Add a semi-transparent background */
  background: white;
  font-size: 8px;
  padding: 4px 14px;
  text-decoration: underline;
}

.image-caption-2 {
  position: absolute;
  top: 238px;
  left: 0;
  right: 0;
  color: black; /* Optional: Set the color of the caption */ /* Optional: Add a semi-transparent background */
  font-size: 8px;
  padding: 4px 14px;
}

.image-caption-3 {
  position: absolute;
  bottom: 100px;
  left: 392px;
  color: black; /* Optional: Set the color of the caption */ /* Optional: Add a semi-transparent background */
  font-size: 8px;
  padding: 4px 14px;
}

.pdf-content-wrapper {
  display: flex;
  flex-direction: column;
  overflow: auto; /* Add a vertical scrollbar when content exceeds the container height */
  display: none;
}
.pdf-image-caption-1 {
  position: absolute;
  top: 217px;
  left: 99px;
  color: black; /* Optional: Set the color of the caption */ /* Optional: Add a semi-transparent background */
  background: white;
  font-size: 14px;
  padding: 4px 16px;
  text-decoration: underline;
}

.pdf-image-caption-2 {
  position: absolute;
  top: 354px;
  left: 0;
  right: 0;
  color: black; /* Optional: Set the color of the caption */ /* Optional: Add a semi-transparent background */
  font-size: 14px;
  padding: 4px 14px;
}

.pdf-image-caption-3 {
  position: absolute;
  bottom: 160px;
  left: 570px;
  color: black; /* Optional: Set the color of the caption */ /* Optional: Add a semi-transparent background */
  font-size: 12px;
  padding: 4px 14px;
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
