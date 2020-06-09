<template>
  <div class="container">
    <div class="card" style="width: 28rem">

      <div class="login-container" id="del">
        <h2>Create a Secure Account</h2>
      </div>
      
      <form @submit.prevent="registerUser">
        <div class="row">
          <div class="col">
            <div class="form-group">
              <label for="full_name" class="mt-3">Name</label>
              <input
                v-model="register.fullname"
                type="text"
                class="form-control form-control-md"
                required
                placeholder="Full Name"
                id="full_name"
              />
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <div class="form-group">
              <label for="user_name" class="mt-3">Username</label>
              <input
                type="text"
                v-model="register.username"
                class="form-control form-control-md"
                required
                placeholder="Username"
                id="user_name"
              />
            </div>
          </div>

          <div class="col">
            <div class="form-group">
              <label for="phone_number" class="mt-3">Phone Number</label>
              <input
                type="text"
                v-model="register.number"
                class="form-control form-control-md"
                required
                placeholder="PhoneNumber"
                id="phone_number"
              />
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <div class="form-group">
              <label for="exampleInputEmail1">Email</label>
              <input
                type="email"
                v-model="register.email"
                class="form-control form-control-md"
                required
                placeholder="adewalechukwuka@example.com"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <div class="form-group">
              <label for="password">Password</label>
              <input
                type="password"
                v-model.lazy="register.password"
                class="form-control form-control-md"
                required
                placeholder="Password"
                id="password"
              />
            </div>
          </div>

          <div class="col">
            <div class="form-group">
              <label for="confirm_password">Confirm Password</label>
              <input
                type="password"
                v-model.lazy="register.password_confirmation"
                class="form-control form-control-md"
                required
                placeholder="Confirm Password"
                id="confirm_password"
              />
            </div>
          </div>
        </div>

        <button type="submit" class="btn btn-success btn-block btn-md">Sign Up</button>
      </form>
    </div>
    <p class="p">
      <a style="cursor:pointer">
        <router-link to="/" style="color:white">Already have an account? Log In</router-link>
      </a>
    </p>
  </div>
</template>

<script>
const axios = require("axios");
import toast from "../toast";
import router from "../router";

export default {
  name: "signup",
  data() {
    return {
      register: {
        fullname: "",
        username: "",
        number: "",
        email: "",
        password: "",
        password_confirmation: ""
      }
    };
  },
  methods: {
    async registerUser() {
      try {
        let response = await this.$http.post(
          "https://test.airtimeflip.com/api/v1/users",
          this.register
        );

        let token = response.data.payload.access_token;

        if (response) {
          localStorage.setItem("jwt", token);
          this.$router.push("/");
          toast.Regsuccess(response.data);
        } else {
          toast.regerror(error.response.data.message);
        }
      } catch (err) {
        let error = err.response;
        if (error) {
          console.log(error.status == 422);
          toast.error(error.data.message);
        } else {
          console.log(error);
          toast.error(error);
        }
      }
    }
  }
};
</script>

<style scoped>
label {
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: #4a5568;
  font-size: 0.75rem;
  line-height: 2;
  font-weight: 700;
  border: 0 solid #e2e8f0;
  box-sizing: inherit;
  display: flex;
  align-items: left;
  justify-content: left;
}

.card {
  margin: auto;
  vertical-align: middle;
  background: white;
  box-shadow: 0 5px 8px rgba(75, 75, 75, 0.3);
  padding: 10px 50px 50px;
  width: 25%;
  height: 100%;
  border-radius: 25px 25px 25px 0px;
  -moz-border-radius: 25px 25px 25px 0px;
  -webkit-border-radius: 25px 25px 25px 0px;
}

input {
  border: none;
  padding: 11px;
  background-color: #edf2f7;
  border-radius: 0.25rem;
}

button {
  background-color: rgb(8, 62, 158);
  color: white;
  margin-top: 10px;
  width: 100%;
  height: 9vh;
  cursor: pointer;
  font-size: 0.875rem;
  border: 0 solid #e2e8f0;
  border-top-left-radius: 0.75rem;
  border-top-right-radius: 0.75rem;
  font-weight: 700;
  border-bottom-right-radius: 0.75rem;
}

.p :hover {
  color: #8d6965;
}

.p ::before {
  --transition-duration: 250ms;
}

.p {
  background-color: transparent;
  margin-top: 40px;
  margin-bottom: 80px;
  color: rgb(255, 255, 255);
  border-color: rgb(255, 255, 255);
  white-space: nowrap;
  font-size: 0.85rem;
  font-weight: 500;
  justify-content: center;
  text-align: center;
}

h2 {
  margin-top: 15px;
  /* padding-bottom: 14px; */
  text-align: center;
  color: #083e9e;
  font-weight: 700;
  font-size: x-large;
  margin-bottom: 10px;
}
</style>