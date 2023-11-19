<template>
  <div
    class="main-container w-container"
    style="
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    "
  >
    <div class="homePage__container--bg">
      <img
        class="homePage__container--bg--vector"
        src="@/assets/images/landscape_bg.jpg"
        alt=""
      />
      <div class="homePage__container--bg--bgcolor"></div>
    </div>
    <div class="container-1">
      <div class="first-container">
        <div class="container">
          <form class="form">
            <div
              class="inputs-container"
              style="display: flex; flex-direction: column"
            >
              <input
                v-model="client.firstname"
                class="inputs"
                placeholder="Emri"
              />
              <input
                v-model="client.lastname"
                class="inputs"
                placeholder="Mbiemri"
              />
              <input
                v-model="client.phone"
                class="inputs"
                placeholder="Numri i telefonit"
              />
              <input
                v-model="client.phone2"
                class="inputs"
                placeholder="Numri Viber/Whatsapp"
              />
              <input
                v-model="client.address"
                class="inputs"
                placeholder="Adresa"
              />
              <input
                v-model="client.email"
                class="inputs"
                type="email"
                placeholder="Email"
              />
              <div>
                <div class="rules">
                  <input
                    v-model="checked"
                    type="checkbox"
                    style="width: 20px"
                  />
                  <p style="width: 300px; padding-left: 4px">
                    pajtohem me
                    <a href="#" @click.prevent="openModal('terms')"
                      >rregullat dhe kushtet</a
                    >
                  </p>
                </div>
              </div>
              <button @click.prevent="generateAndSubmit()">VAZHDO</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div style="position: relative; height: 100vh; width: 100%">
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/AkUKpO8rndE"
        title="Auto Shitesi"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
    <div style="position: relative; height: 100vh; width: 100%">
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/7pv89Zh6S2w"
        title="Auto Shitesi"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
    <div style="position: relative; height: 100vh; width: 100%">
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/L-5ChGeYZdQ"
        title="Auto Shitesi"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  </div>
  <TextPopup
    :isModalOpen="isModalOpen"
    :type="type"
    :generatedCode="client.code"
    @closeModal="closeModal"
  />
</template>

<script>
/* eslint-disable */
import TextPopup from "../UI/TextPopup.vue";
import clientsRef from "../firebase";
import { addDoc } from "firebase/firestore";

var Email = {
  send: function (a) {
    return new Promise(function (n, e) {
      (a.nocache = Math.floor(1e6 * Math.random() + 1)), (a.Action = "Send");
      var t = JSON.stringify(a);
      Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) {
        n(e);
      });
    });
  },
  ajaxPost: function (e, n, t) {
    var a = Email.createCORSRequest("POST", e);
    a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
      (a.onload = function () {
        var e = a.responseText;
        null != t && t(e);
      }),
      a.send(n);
  },
  ajax: function (e, n) {
    var t = Email.createCORSRequest("GET", e);
    (t.onload = function () {
      var e = t.responseText;
      null != n && n(e);
    }),
      t.send();
  },
  createCORSRequest: function (e, n) {
    var t = new XMLHttpRequest();
    return (
      "withCredentials" in t
        ? t.open(e, n, !0)
        : "undefined" != typeof XDomainRequest
        ? (t = new XDomainRequest()).open(e, n)
        : (t = null),
      t
    );
  },
};

export default {
  components: {
    TextPopup,
  },
  data() {
    return {
      isModalOpen: false,
      type: "",
      checked: false,
      client: {
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        phone2: "",
        code: "",
        address: "",
      },
    };
  },
  methods: {
    openModal(type) {
      this.type = type;
      this.isModalOpen = true;
    },
    closeModal() {
      this.type = "";
      this.isModalOpen = false;
    },
    sendEmail() {
      Email.send({
        SecureToken: "a2c8502e-b897-4e2a-81f4-2654e8426cf8",
        To: this.client.email,
        From: "gurakuqi98@gmail.com",
        Subject: "U regjistruat si klient me sukses",
        Body: `<div style="background-color: gray; border-radius: 32px; padding: 16px;"><img src="@/assets/images/portrait_bg.jpg" /><p style="font-weight: 800;">Emri: ${this.client.firstname} ${this.client.lastname}</p><br><p style="font-weight: 800;">Numri i telefonit: ${this.client.phone}</p><br><p style="font-weight: 800;">Numri Viber/Whatsapp: ${this.client.phone2}</p><br><p style="font-weight: 800;">Email: ${this.client.email}</p><br><p style="font-weight: 800;">Adresa: ${this.client.address}</p><br><p style="font-weight: 800;">Kodi unik: ${this.client.code}</p></div>`,
      });
    },
    async generateAndSubmit() {
      if (
        !this.client.firstname.trim() ||
        !this.client.lastname.trim() ||
        !this.client.address.trim() ||
        !this.client.phone.trim() ||
        !this.client.phone2.trim() ||
        !this.client.email.trim()
      ) {
        this.openModal("error");
        return;
      }

      if (!this.checked) {
        this.openModal("acceptTerms");
        return;
      }

      const randomCode = Math.floor(10000000 + Math.random() * 90000000);
      this.client.code = randomCode.toString();
      await addDoc(clientsRef, this.client);
      this.sendEmail();
      this.openModal("code");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/home.scss";

.homePage__container--bg {
  left: 0;
  min-width: 100%;
  position: fixed;
  top: 0;
  z-index: 0;
}
.homePage__container--bg--vector {
  height: 100vh;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 100;
}

.homePage__container--bg--bgcolor {
  background: linear-gradient(225deg, #e22819 14%, #000 78.69%);
  height: 1117px;
  left: 0;
  max-height: 100vh;
  min-height: 100vh;
  min-width: 100%;
  position: absolute;
  top: 0;
  width: 1730px;
}

.form {
  height: auto;
  border-radius: 8px;
  padding: 20px 30px;
  max-width: calc(100vw - 40px);
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  position: relative;
  width: 100%;
}
h2 {
  margin: 10px 0;
  padding-bottom: 10px;
  width: 180px;
  color: #78788c;
  border-bottom: 3px solid #78788c;
}
.inputs {
  backdrop-filter: blur(20px);
  background: linear-gradient(
    152.97deg,
    hsla(0, 0%, 100%, 0.4),
    hsla(0, 0%, 100%, 0)
  );
  border: none;
  border-radius: 3px;
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  height: 45px;
  line-height: normal;
  margin-bottom: 20px;
  outline: none;
  text-align: center;
  width: 389px;
  z-index: 10;
}
input:focus {
  border-bottom: 2px solid #78788c;
}
button {
  backdrop-filter: blur(20px);
  background: linear-gradient(
    152.97deg,
    hsla(0, 0%, 100%, 0.4),
    hsla(0, 0%, 100%, 0)
  );
  border: none;
  border-radius: 3px;
  cursor: pointer;
  height: 45px;
  overflow: hidden;
  position: relative;
  transition: all 0.3s linear;
  width: 389px;
  z-index: 11;
  font-weight: 700;
  padding: 16px 0;
  margin-top: 16px;
  color: white;
}
button:hover {
  background: black;
}
span {
  margin: 0 5px 0 15px;
}

.inputs::placeholder {
  opacity: 0.5;
  color: white;
  text-transform: uppercase;
}

.rules {
  display: flex;
}

p {
  color: white;
}

a {
  color: white;
}

@media screen and (max-width: 768px) {
  .inputs-container {
    width: 100%;
  }
  .container-1 {
    width: 100%;
  }
  form {
    width: 100%;
    padding: 8px;
  }
  .inputs {
    width: 100%;
  }
  button {
    width: 100%;
  }
}
</style>
