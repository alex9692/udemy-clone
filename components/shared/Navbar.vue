<template>
  <nav class="custom-navbar has-background-black has-text-light">
    <div class="columns is-mobile">
      <div class="column  left">
        <div class="navbar-brand">
          <nuxt-link class="navbar-item" to="/">
            <h1 class="is-size-3 has-text-weight-bold has-text-light">
              Promo-Yourself
            </h1>
          </nuxt-link>
        </div>
      </div>
      <div class="column desktop  center">
        <div class="navbar-start">
          <nuxt-link to="/" class="navbar-item">
            Home
          </nuxt-link>
          <nuxt-link to="#" class="navbar-item">
            Courses
          </nuxt-link>
          <nuxt-link to="#" class="navbar-item">
            Blogs
          </nuxt-link>
          <nuxt-link to="#" class="navbar-item">
            About
          </nuxt-link>
          <nuxt-link to="#" class="navbar-item">
            Cv
          </nuxt-link>
        </div>
      </div>
      <div class="column right">
        <div class="navbar-end">
          <div class="navbar-item desktop">
            <div class="buttons center">
              <template v-if="isAuth">
                <figure class="image center is-48x48 avatar m-r-sm m-b-sm">
                  <!-- <img
                    src="https://png.pngtree.com/png-clipart/20190516/original/pngtree-users-vector-icon-png-image_3725294.jpg"
                  /> -->
                  <img
                    class="is-rounded"
                    :src="user.avatar"
                    alt="user-image"
                    style="background: #fff"
                  />
                </figure>
                <div class="m-r-sm m-b-sm">Welcome {{ user.username }}!</div>
                <button
                  v-if="true"
                  class="button is-link is-outlined"
                  @click="() => {}"
                >
                  Instructor
                </button>
                <button class="button is-primary" @click="logout">
                  Logout
                </button>
              </template>
              <template v-else>
                <nuxt-link to="/register" class="button is-primary">
                  Sign up
                </nuxt-link>
                <nuxt-link to="/login" class="button is-light">
                  Log in
                </nuxt-link>
              </template>
            </div>
          </div>
          <div
            @click="initShowSideBar"
            class="navbar-item center mobile"
            style="height: 100%;padding:1rem;"
          >
            <span class="burger icon has-text-grey" style="cursor: pointer;">
              <i class="fas fa-bars"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      isAuth: state => state.auth.isAuth,
      user: state => state.auth.user
    })
  },
  methods: {
    initShowSideBar() {
      this.$emit("show-sidebar");
    },
    logout() {
      this.$store.dispatch("auth/LOGOUT_USER");
    }
  }
};
</script>

<style lang="scss" scoped>
$primary: #00d1b2;
$nav: #5b89d4;
.custom-navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  z-index: 25;
}
.navbar-brand {
  padding-right: 30px;
}
.navbar-start .navbar-item {
  background-color: transparent;
  color: inherit;
}
.navbar-start .navbar-item:hover,
.navbar-start .navbar-item:active,
.navbar-start .navbar-item.nuxt-link-exact-active {
  color: $nav;
  border-bottom: 3px solid $nav;
}
.navbar-item img {
  max-height: 3.5rem;
}
.avatar {
  border: 1px solid $primary;
  border-radius: 50%;
}
.columns {
  width: 100%;
  height: 100%;
  margin: 0;
}
.navbar-start {
  height: 100%;
}
.navbar-end {
  height: 100%;
}
.column {
  padding: 0;
  margin: 0;
  height: 100%;
}
.center,
.left,
.right {
  display: flex;
  justify-content: center;
  align-items: center;
}
.left {
  justify-content: flex-start;
}
.right {
  justify-content: flex-end;
}

.burger:hover {
  color: $nav !important;
}

@media (max-width: 1060px) {
  .desktop {
    display: none;
  }
}
@media (min-width: 1060px) {
  .mobile {
    display: none;
  }
}
</style>
<div class="navbar-brand">
      <nuxt-link class="navbar-item" to="/">
        <h1 class="is-size-3 has-text-weight-bold">Promo-Yourself</h1>
      </nuxt-link>
      <a @click="showSidebar = !showSidebar" class="navbar-burger burger">
        <span></span>
        <span></span>
        <span></span>
      </a>
    </div>

    <div
      id="navbarBasicExample"
      class="navbar-menu"
      :class="{ 'is-active': showSidebar }"
    >
      <div class="navbar-start">
        <nuxt-link to="/" class="navbar-item">
          Home
        </nuxt-link>
        <nuxt-link to="#" class="navbar-item">
          Courses
        </nuxt-link>
        <nuxt-link to="#" class="navbar-item">
          Blogs
        </nuxt-link>
        <nuxt-link to="#" class="navbar-item">
          About
        </nuxt-link>
        <nuxt-link to="#" class="navbar-item">
          Cv
        </nuxt-link>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons center">
            <div v-if="false"> //template
              <figure class="image center is-48x48 avatar m-r-sm m-b-sm">
                // not in use <img
                  src="https://png.pngtree.com/png-clipart/20190516/original/pngtree-users-vector-icon-png-image_3725294.jpg"
                />
                <img
                  class="is-rounded"
                  src="https://freesvg.org/img/1534819034.png"
                  alt="user-image"
                />
              </figure>
              <div class="m-r-sm m-b-sm">
                Welcome User!
              </div>
              <button
                v-if="true"
                class="button is-link is-outlined"
                @click="() => {}"
              >
                Instructor
              </button>
              <a class="button is-primary" @click="() => {}">
                Logout
              </a>
            </div>
            <div v-else> //template
              <nuxt-link to="/register" class="button is-primary">
                Sign up
              </nuxt-link>
              <nuxt-link to="/login" class="button is-light">
                Log in
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
