<template>
  <section class="hero is-large">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column center">
            <div class="box">
              Courses
            </div>
          </div>
          <div class="column center">
            <div class="box">Blogs</div>
          </div>
          <div class="column center">
            <div class="box">Heroes</div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- <div class="instructor-page">
    <div class="centered">
      <div class="columns">
        <div class="box" @click="() => {}">
          <div>
            Courses
          </div>
        </div>
        <div class="box" @click="() => {}">
          <div>
            Blogs
          </div>
        </div>
        <div class="box" @click="() => {}">
          <div>
            Heroes
          </div>
        </div>
      </div>
    </div>-
  </div> -->
</template>
<script>
export default {
  middleware: ["isAuthenticated", "isAdmin"]
};
</script>
<style scoped lang="scss">
.box {
  height: 300px;
  width: 300px;
  display: flex;
  margin: 5px;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  font-weight: bold;
  &:hover {
    cursor: pointer;
    background-color: #58529f;
    color: white;
    transition: background-color 0.3s ease-out;
  }
}
</style>
