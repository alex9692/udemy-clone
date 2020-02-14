<template>
  <nav class="custom-navbar">
    <div class="header-logo">
      <p class="header-logo-title subtitle is-3">Udemy</p>
    </div>
    <div class="header-text">
      {{ title }}
    </div>
    <div class="user-box">
      <figure class="image is-48x48 m-r-sm">
        <img class="is-rounded" :src="user.avatar" />
      </figure>
      <div class="m-r-sm m-b-sm user-box-name">
        Welcome {{ user.username }}!
      </div>
    </div>
    <slot name="slot"></slot>
    <client-only>
      <div v-if="exitLink" class="header-group-buttons">
        <nuxt-link
          :to="exitLink"
          class="button is-danger is-medium is-inverted is-outlined"
        >
          Exit
        </nuxt-link>
      </div>
    </client-only>
  </nav>
</template>
<script>
import { mapState } from "vuex";
export default {
  props: {
    title: {
      required: true,
      type: String
    },
    exitLink: {
      required: false,
      type: String,
      default: null
    }
  },
  computed: {
    ...mapState({
      user: state => state.auth.user
    })
  }
};
</script>
<style scoped>
</style>
