<template>
  <div @click="close" :class="{ show: show }" class="sidebar">
    <nav class="sidebar-menu">
      <article v-if="isAuth" class="media">
        <figure class="media-left image center is-48x48 avatar m-r-sm m-b-sm">
          <img class="is-rounded" :src="user.avatar" alt="user-image" />
        </figure>
        <div class="media-content">
          <div class="content">
            <p>
              <strong>{{ user.name }}</strong>
              <small>@{{ user.username }}</small>
              <small>31m</small>
              <br />
              Welcome to Udemy-Clone!
            </p>
          </div>
        </div>
      </article>
      <ul class="content">
        <nuxt-link
          tag="li"
          to="/"
          class="list-menu has-text-grey-dark is-size-4 has-text-weight-semibold"
          >Home</nuxt-link
        >
        <nuxt-link
          tag="li"
          to="#"
          class="list-menu has-text-grey-dark is-size-4 has-text-weight-semibold"
          >Courses</nuxt-link
        >
        <nuxt-link
          tag="li"
          to="#"
          class="list-menu has-text-grey-dark is-size-4 has-text-weight-semibold"
          >Blogs</nuxt-link
        >
        <nuxt-link
          tag="li"
          to="#"
          class="list-menu has-text-grey-dark is-size-4 has-text-weight-semibold"
          >About</nuxt-link
        >
        <nuxt-link
          tag="li"
          to="#"
          class="list-menu has-text-grey-dark is-size-4 has-text-weight-semibold"
          >Cv</nuxt-link
        >
      </ul>
    </nav>
    <footer v-if="isAuth" class="sidebar-footer">
      <button v-if="true" class="button is-link is-outlined" @click="() => {}">
        Instructor
      </button>
      <button class="button is-primary m-l-md" @click="() => {}">
        Logout
      </button>
    </footer>
    <footer v-else class="sidebar-footer">
      <nuxt-link to="/register" class="button is-primary">
        Sign up
      </nuxt-link>
      <nuxt-link to="/login" class="button is-light m-l-md">
        Log in
      </nuxt-link>
    </footer>
  </div>
</template>

<script>
import { mapState } from "vuex";
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
    })
  },
  methods: {
    close() {
      this.$emit("close-sidebar");
    }
  }
};
</script>

<style lang="scss" scoped>
.media {
  padding: 1rem 2rem;
}
.sidebar {
  position: fixed;
  top: 0;
  right: 0;
  background: #f2f6fa;
  opacity: 0.9;
    width: 80vw;
  z-index: 100;
  display: none;
  margin-top: 5rem;
  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1),
    0 0px 0 1px rgba(10, 10, 10, 0.02);
  color: #4a4a4a;
  border-radius: 0;
  border-bottom-left-radius: 5px;
}
.show {
  display: block;
}
.sidebar-menu {
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid #726d6d;
}
.sidebar-footer {
  margin: 0;
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.list-menu {
  margin: 0.6rem 0;
  padding: 0.6rem 1.2rem;
  /* border-bottom: 2px solid #5e5e5e; */
}
.list-menu:first-child {
  margin-top: 0;
}
.list-menu:last-child {
  margin-bottom: 0;
}
.list-menu:hover {
  background-color: #dbdbdb;
  color: #3273dc !important;
  cursor: pointer;
  /* border-bottom: 2px solid #dbdbdb; */
}
@media (min-width: 700px) {
  .sidebar {
    width: 50vw;
  }
}
</style>
