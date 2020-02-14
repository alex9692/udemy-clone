<template>
  <section class="hero is-medium" style="height:100%">
    <div class="hero-body center">
      <div class="container">
        <div class="columns is-centered is-variable is-2">
          <div class="column">
            <nuxt-link
              to="/instructor/courses"
              class="has-text-grey-dark is-size-1"
            >
              <div class="box">Courses</div>
            </nuxt-link>
          </div>
          <div class="column">
            <nuxt-link
              to="/instructor/blogs"
              class="has-text-grey-dark is-size-1"
            >
              <div class="box">Blogs</div></nuxt-link
            >
          </div>
          <div class="column">
            <nuxt-link to="" class="has-text-grey-dark is-size-1">
              <div class="box">Heroes</div></nuxt-link
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  layout: "instructor"
};
</script>
<style scoped lang="scss">
.box {
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  &:hover {
    cursor: pointer;
    background-color: #58529f;
    color: #fff !important;
    transition: background-color 0.3s ease-out;
  }
}
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
