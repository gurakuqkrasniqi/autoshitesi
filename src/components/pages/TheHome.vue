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
        src="@/assets/images/landscape_bg2.png"
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
              <h1 style="text-align: center; margin: 16px 0; color: #fff">
                Bohu Club Member
              </h1>
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
        src="https://www.youtube.com/embed/Z2JOkqDYwH8"
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
        Body: `<img src="https://firebasestorage.googleapis.com/v0/b/autoproject-edb62.appspot.com/o/membercard_1.jpg?alt=media&token=1a19ffa2-b1a3-48f2-84a3-931238ea5b21" width="500" height="300" /><div style="display: flex;"><div><img src="https://firebasestorage.googleapis.com/v0/b/autoproject-edb62.appspot.com/o/membercard_2_half.jpg?alt=media&token=9d9cf601-4929-40ca-b1c9-76412c39d30f" width="200" height="300" /></div><div style="background-color: black; text-align: center; font-weight: 800; color: white; width: 300px; height: 270px; margin-top: 2px; padding-top: 26px; font-size: 16px;"><p style="padding-top: 4px;">${this.client.code}</p> <p style="padding-top: 4px;">${this.client.firstname}</p><p style="padding-top: 4px;">${this.client.lastname}</p><p style="padding-top: 4px;">${this.client.phone}</p><p style="padding-top: 4px;">${this.client.phone2}</p></div></div>`,
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
  background: linear-gradient(225deg, #2519e2 14%, #000 78.69%);
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
