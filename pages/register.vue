<template>
  <section class="hero is-success is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="columns is-centered">
          <div
            class="column is-three-fifths-tablet is-three-fourths-widescreen"
          >
            <h3 class="title has-text-grey">Register</h3>
            <p class="subtitle p-t-md has-text-grey">
              Please register to proceed.
            </p>
            <div class="box m-t-xl">
              <figure class="avatar">
                <img
                  src="https://cdn3.iconfinder.com/data/icons/users-glyph/64/group_attention_add_interface_login-512.png"
                />
              </figure>
              <form @submit.prevent="onSubmit">
                <div class="field">
                  <div class="control">
                    <input
                      class="input is-large"
                      type="text"
                      placeholder="Username"
                      v-model="username"
                      @blur="$v.username.$touch()"
                    />
                    <div v-if="$v.username.$error" class="form-error">
                      <span v-if="!$v.username.required" class="help is-danger"
                        >Username is required</span
                      >
                      <span v-if="!$v.username.minLength" class="help is-danger"
                        >Username should be atleast
                        {{ $v.username.$params.minLength.min }} characters
                        long.</span
                      >
                    </div>
                  </div>
                </div>
                <div class="field">
                  <div class="control">
                    <input
                      class="input is-large"
                      type="text"
                      placeholder="Name"
                      v-model="name"
                      @blur="$v.name.$touch()"
                    />
                    <div v-if="$v.name.$error" class="form-error">
                      <span v-if="!$v.name.required" class="help is-danger"
                        >Name is required</span
                      >
                      <span v-if="!$v.name.minLength" class="help is-danger"
                        >Name should be atleast
                        {{ $v.name.$params.minLength.min }} characters
                        long.</span
                      >
                    </div>
                  </div>
                </div>
                <div class="field">
                  <div class="control">
                    <input
                      class="input is-large"
                      type="email"
                      placeholder="Your Email"
                      v-model="email"
                      @blur="$v.email.$touch()"
                    />
                    <div v-if="$v.email.$error" class="form-error">
                      <span v-if="!$v.email.required" class="help is-danger"
                        >Email is required</span
                      >
                      <span v-if="!$v.email.email" class="help is-danger"
                        >Email address is not valid</span
                      >
                    </div>
                  </div>
                </div>
                <div class="field">
                  <div class="control">
                    <input
                      class="input is-large"
                      type="text"
                      placeholder="Avatar"
                      autocomplete=""
                      v-model="avatar"
                    />
                    <!-- <div class="form-error">
                    <span class="help is-danger">Url format is not valid!</span>
                    <span class="help is-danger">Selected file type is not valid!</span>
                  </div> -->
                  </div>
                </div>
                <div class="field">
                  <div class="control">
                    <input
                      class="input is-large"
                      type="password"
                      placeholder="Your Password"
                      autocomplete="new-password"
                      v-model="password"
                      @blur="$v.password.$touch()"
                    />
                    <div v-if="$v.password.$error" class="form-error">
                      <span v-if="!$v.password.required" class="help is-danger"
                        >Password is required</span
                      >
                      <span v-if="!$v.password.minLength" class="help is-danger"
                        >Password minimum length is
                        {{ $v.password.$params.minLength.min }} letters</span
                      >
                    </div>
                  </div>
                </div>
                <div class="field">
                  <div class="control">
                    <input
                      class="input is-large"
                      type="password"
                      placeholder="Password Confirmation"
                      autocomplete="off"
                      v-model="confirmPassword"
                      @blur="$v.confirmPassword.$touch()"
                    />
                    <div v-if="$v.confirmPassword.$error" class="form-error">
                      <span
                        v-if="!$v.confirmPassword.matchPassword"
                        class="help is-danger"
                        >Password confirmation should be the same as
                        password</span
                      >
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  :disabled="$v.$invalid"
                  class="button is-block is-info is-large is-fullwidth"
                >
                  Register
                </button>
              </form>
            </div>
            <p class="has-text-grey">
              <nuxt-link to="/login">Login</nuxt-link> &nbsp;·&nbsp;
              <a>Sign Up With Google</a> &nbsp;·&nbsp;
              <a href="../">Need Help?</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { email, required, minLength, sameAs } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      username: "",
      name: "",
      email: "",
      password: "",
      avatar: "",
      confirmPassword: ""
    };
  },
  validations: {
    email: {
      email,
      required
    },
    password: {
      required,
      minLength: minLength(8)
    },
    confirmPassword: {
      required,
      matchPassword: sameAs("password")
    },
    username: {
      required,
      minLength: minLength(3)
    },
    name: {
      required,
      minLength: minLength(4)
    }
  },
  methods: {
    onSubmit() {
      // this.$store.dispatch("auth/REGISTER_USER", {
      //   username: this.username,
      //   name: this.name,
      //   email: this.email,
      //   password: this.password,
      //   avatar: this.avatar
      // });
    }
  }
};
</script>

<style lang="scss" scoped>
.hero.is-success {
  background: #f2f6fa;
}
// .hero .nav,
// .hero.is-success .nav {
//   -webkit-box-shadow: none;
//   box-shadow: none;
// }
// .box {
//   margin-top: 5rem;
// }
.avatar {
  margin-top: -70px;
  padding-bottom: 20px;
}
.avatar img {
  height: 128px;
  width: 128px;
  padding: 5px;
  background: #fff;
  border-radius: 50%;
  -webkit-box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1),
    0 0 0 1px rgba(10, 10, 10, 0.1);
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
}
</style>
