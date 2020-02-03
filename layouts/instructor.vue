<template>
  <div class="grid-i">
    <Header :title="title" :exitLink="exitLink" class="grid-hd-i">
      <template #slot>
        <div v-if="instructorMode === 'course'" class="header-group-buttons">
          <nuxt-link
            to="/instructor/courses/create"
            class="button is-medium is-light"
          >
            New Course
          </nuxt-link>
          <nuxt-link
            to="/"
            class="button is-danger is-medium is-inverted is-outlined"
          >
            Student
          </nuxt-link>
        </div>
      </template>
    </Header>
    <main class="grid-m-i">
      <nuxt />
    </main>
    <footer class="grid-ft-i">
      <component v-if="instructorMode === 'create'" :is="'Footer'"></component>
    </footer>
  </div>
</template>

<script>
import Header from "~/components/shared/InstructorCourseHeader";
import { mapState } from "vuex";
import Footer from "~/components/shared/InstructorCourseCreateFooter";
export default {
  middleware: ["isAuthenticated", "isAdmin"],
  components: {
    Header,
    Footer
  },
  computed: {
    ...mapState({
      instructorMode: state => state.instructorMode,

      page: state => state.instructor.createCourse.page
    }),
    title() {
      if (this.instructorMode === "course") {
        return "Create/Manage courses";
      } else if (this.instructorMode === "normal") {
        return "Instructor Menu";
      } else if (this.instructorMode === "create") {
        if (this.page === 1) {
          return "Step 1 of 2";
        } else {
          return "Step 2 of 2";
        }
      }
      return "";
    },
    exitLink() {
      if (this.instructorMode === "normal") {
        return "/";
      } else if (this.instructorMode === "create") {
        return "/instructor/courses";
      } else {
        return null;
      }
    }
  }
};
</script>

<style lang="scss">
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  color: #505763;
  background-color: #f2f3f5;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
.grid-i {
  min-height: 100vh;
  display: grid;
  grid-template-rows:
    [hd-start] 5rem [hd-end main-start] 1fr
    [main-end ft-start] 6rem [ft-end];
}
.grid-hd-i {
  grid-row: hd;
}
.grid-m-i {
  grid-row: main;
}
.grid-ft-i {
  grid-row: ft;
}
</style>
