<template>
  <client-only>
    <nav class="custom-navbar has-background-black has-text-light">
      <div class="columns is-mobile">
        <div class="column left">
          <div class="navbar-brand">
            <nuxt-link class="navbar-item" to="/">
              <h1 class="is-size-3 has-text-weight-bold has-text-light has-text-grey-light">
                Udemy-Clone
              </h1>
            </nuxt-link>
          </div>
        </div>
        <div class="column desktop left">
          <div class="navbar-start m-r-none">
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
            <div class="desktop center side-nav" style="width: 100%;">
              <template v-if="isAuth">
                <figure class="image center avatar m-r-sm m-b-sm">
                  <!-- <img
                    src="https://png.pngtree.com/png-clipart/20190516/original/pngtree-users-vector-icon-png-image_3725294.jpg"
                  /> -->
                  <img
                    class="is-rounded has-background-grey"
                    :src="user.avatar"
                    alt="user-image"

                  />
                </figure>
                <div
                  class="m-r-sm navbar-item "
                  style="width: max-content;border:none"
                >
                  <p class="subtitle is-size-6 has-text-grey">
                    Welcome {{ user.username }}!
                  </p>
                </div>
                <nuxt-link
                  to="/instructor"
                  v-if="isAdmin"
                  class="navbar-item has-text-primary"
                  @click="() => {}"
                >
                  Instructor
                </nuxt-link>
                <div
                  class="navbar-item has-text-link"
                  id="link"
                  @click="logout"
                  style="cursor:pointer;"
                >
                  Logout
                </div>
              </template>
              <template v-else>
                <nuxt-link to="/register" class="navbar-item has-text-primary">
                  Sign up
                </nuxt-link>
                <nuxt-link
                  to="/login"
                  class="navbar-item has-text-warning"
                  id="warning"
                >
                  Log in
                </nuxt-link>
              </template>
            </div>
            <div
              @click="initShowSideBar"
              class="navbar-item center mobile custom-burger"
              :class="[{ 'active-1': show }, { 'active-2': show }]"
              id="sb-link"
            >
              <span class="icon has-text-grey">
                <i class="fas fa-bars"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </client-only>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  props: {
    show: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    ...mapState({
      isAuth: state => state.auth.isAuth,
      user: state => state.auth.user
    }),
    ...mapGetters({
      isAdmin: "auth/isAdmin"
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
$nav: #496fac;
$logout: #b63174;
$login: #ffdd57;
.text {
  border: none;
}
.image {
  width: 48px;
}
.side-nav {
  flex-wrap: nowrap;
}
.custom-navbar {
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0.97;
  width: 100%;
  height: 5rem;
  z-index: 25;
}
.navbar-brand {
  padding-right: 30px;
}
.navbar-start .navbar-item,
.navbar-end .navbar-item {
  background-color: transparent;
  color: inherit;
}
.navbar-end .navbar-item {
  height: 100%;
}
.navbar-start .navbar-item:hover,
.navbar-start .navbar-item:active,
.navbar-start .navbar-item.nuxt-link-exact-active {
  color: $nav;
  border-bottom: 3px solid $nav;
}
.navbar-end .navbar-item:hover,
.navbar-end .navbar-item:active,
.navbar-end .navbar-item.nuxt-link-exact-active {
  color: $primary;
  border-bottom: 3px solid $primary;
}
.navbar-end .navbar-item#sb-link:hover,
.navbar-end .navbar-item#sb-link:active,
.navbar-end .navbar-item#sb-link.active-1,
.navbar-end .navbar-item#sb-link.nuxt-link-exact-active {
  color: $nav !important;
  border-bottom: 3px solid $nav;
}
.navbar-end .navbar-item#sb-link:hover span,
.navbar-end .navbar-item#sb-link:active span,
.navbar-end .navbar-item#sb-link.active-2 span,
.navbar-end .navbar-item#sb-link.nuxt-link-exact-active span {
  color: $nav !important;
}
.navbar-end .navbar-item#warning:hover,
.navbar-end .navbar-item#warning:active,
.navbar-end .navbar-item#warning.nuxt-link-exact-active {
  color: $login;
  border-bottom: 3px solid $login;
}
.navbar-end .navbar-item#link {
  color: $logout !important;
}
.navbar-end .navbar-item#link:hover,
.navbar-end .navbar-item#link:active,
.navbar-end .navbar-item#link.nuxt-link-exact-active {
  color: $logout;
  border-bottom: 3px solid $logout;
}

.navbar-item img {
  max-height: 3.5rem;
}
.avatar {
  border: 1px solid #7a7a7a;
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
.custom-burger {
  height: 100%;
  padding: 1rem;
  cursor: pointer;
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
