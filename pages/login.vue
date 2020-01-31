<template>
  <section class="hero is-success is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="columns is-centered">
          <div class="column is-half-widescreen is-three-fifths-tablet">
            <h3 class="title has-text-grey">Login</h3>
            <p class="subtitle has-text-grey">Please login to proceed.</p>
            <div class="box m-t-xl">
              <figure class="avatar">
                <img
                  src="https://cdn1.iconfinder.com/data/icons/navigation-elements/512/user-login-man-human-body-mobile-person-512.png"
                />
              </figure>
              <form @submit.prevent="onSubmit">
                <div class="field">
                  <div class="control">
                    <input
                      class="input is-large"
                      type="email"
                      placeholder="Your Email"
                      autofocus=""
                      autocomplete="email"
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
                      type="password"
                      placeholder="Your Password"
                      autocomplete="current-password"
                      v-model="password"
                      @blur="$v.password.$touch()"
                    />
                    <div v-if="$v.password.$error" class="form-error">
                      <span v-if="!$v.password.required" class="help is-danger"
                        >Password is required</span
                      >
                      <span v-if="!$v.password.minLength" class="help is-danger"
                        >Password is short</span
                      >
                    </div>
                  </div>
                </div>
                <button
                  :disabled="$v.$invalid"
                  type="submit"
                  class="button is-block is-info is-large is-fullwidth"
                >
                  Login
                </button>
              </form>
            </div>
            <p class="has-text-grey">
              <a>Sign In With Google</a> &nbsp;·&nbsp;
              <nuxt-link to="/register">Sign Up</nuxt-link> &nbsp;·&nbsp;

              <a href="../">Need Help?</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { required, email, minLength } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  validations: {
    email: {
      email,
      required
    },
    password: {
      minLength: minLength(8),
      required
    }
  },
  methods: {
    onSubmit() {
      // this.$store.dispatch("auth/LOGIN_USER", {
      //   email: this.email,
      //   password: this.password
      // });
    }
  }
};
</script>

<style lang="scss" scoped>
.hero.is-success {
  background: #f2f6fa;
}
/* .hero .nav,
.hero.is-success .nav {
  -webkit-box-shadow: none;
  box-shadow: none;
} */

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
p.subtitle {
  padding-top: 1rem;
}
</style>
