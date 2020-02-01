<template>
  <section class="hero is-fullheight has-background-danger p-none">
    <div class="hero-body column">
      <div>
        <nuxt-link :to="navigateToPage" class="button is-danger is-inverted">
          <span class="icon">
            <i class="fas fa-chevron-left"></i>
          </span>
          <p>{{ navigateToText }}</p></nuxt-link
        >

        <h1 class="title">{{ title }}</h1>
      </div>

      <h2 class="subtitle">{{ status }}<span> :(</span></h2>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      required: true,
      type: String
    },
    status: {
      required: true,
      type: String
    },
    navigateToPage: {
      required: true,
      type: String
    },
    navigateToText: {
      required: true,
      type: String
    }
  }
};
</script>

<style scoped>
.title {
  font-size: 40px;
}
.subtitle {
  font-size: 140px;
}
.notFoundContainer {
  margin-top: 80px;
}
.column {
  flex-direction: column;
  justify-content: space-evenly;
  align-self: center !important;
}
</style>
