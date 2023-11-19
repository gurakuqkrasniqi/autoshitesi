<template>
  <div class="container">
    <div class="login">
      <div class="form">
        <h1>Login</h1>
        <hr />
        <label for="email">Email</label>
        <input
          id="exampleFormControlInput1"
          type="email"
          v-model="email"
          placeholder="example@gmail.com"
        />
        <label for="password">Password</label>
        <input
          id="exampleFormControlInput2"
          type="password"
          v-model="password"
          placeholder="Password"
        />
        <button @click="signIn()">Login</button>
      </div>
    </div>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    signIn() {
      console.log("hinsingin");
      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((data) => {
          if (data) this.$router.push("/admin");
        })
        .catch(() => {
          alert("Failed to login!");
        });
    },
  },
};
</script>

<style scoped>

body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #ffa12c;
}

.container {
  width: 100%;
  display: flex;
  max-width: 300px;
  background: #fff;
  border-radius: 15px;
}

.login {
  width: 400px;
}

.form {
  width: 250px;
  margin: 60px auto;
}

h1 {
  margin: 20px;
  text-align: center;
  font-weight: bolder;
  text-transform: uppercase;
}

hr {
  border-top: 3px solid lightblue;
}

p {
  text-align: center;
  margin: 10px;
  font-size: 13px;
}

.form label {
  display: block;
  font-size: 16px;
  font-weight: 600;
  padding: 5px;
  margin-top: 8px;
}

input {
  width: 100%;
  margin: 2px;
  boder: none;
  outline: none;
  padding: 8px;
  border-radius: 9px;
  border: 1px solid gray;
}

button {
  border: none;
  outline: none;
  padding: 8px;
  width: 100%;
  color: white;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;
  border-radius: 8px;
  background: lightblue;
}

a {
  text-decoration: none;
  color: lightblue;
}
</style>
