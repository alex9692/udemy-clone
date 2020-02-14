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
        <div
          v-else-if="instructorMode === 'manage'"
          class="header-group-buttons"
        >
          <button
            :disabled="!allowUpdate"
            @click="updateCourse"
            class="button is-primary is-inverted is-medium is-outlined"
          >
            Save
          </button>
        </div>
        <div
          v-else-if="instructorMode === 'editing'"
          class="header-group-buttons"
        >
          <Modal
            openTitle="Publish"
            openBtnClass="button is-success is-medium is-inverted is-outlined"
            title="Review Details"
          >
            <template #blog-publish>
              <div class="container">
                <div class="title">
                  Once you publish blog you cannot change url to a blog.
                </div>
                <!-- Check for error -->
                <section>
                  <div class="subtitle">Current Url is:</div>
                  <article class="message is-success">
                    <div class="message-body">
                      <!-- Get here actual slug -->
                      <strong>some-slug</strong>
                    </div>
                  </article>
                </section>
                <!-- <article class="message is-danger">
                <div class="message-body">
                  Display error here
                </div>
              </article> -->
              </div>
            </template>
          </Modal>
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
import Modal from "~/components/shared/Modal";
import { mapState, mapGetters } from "vuex";
import Footer from "~/components/shared/InstructorCourseCreateFooter";
export default {
  middleware: ["isAuthenticated", "isAdmin"],
  components: {
    Header,
    Footer,
    Modal
  },
  computed: {
    ...mapState({
      instructorMode: state => state.instructorMode,
      page: state => state.instructor.createCourse.page
    }),
    ...mapGetters({
      allowUpdate: "instructor/manageCourse/allowUpdate"
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
      } else if (this.instructorMode === "manage") {
        return "Some very nice course name";
      } else if (this.instructorMode === "manageBlogs") {
        return "Manage your Blogs";
      } else if (
        this.instructorMode === "editor" ||
        this.instructorMode === "editing"
      ) {
        return "Write your Blogs";
      }
      return "";
    },
    exitLink() {
      if (this.instructorMode === "normal") {
        return "/";
      } else if (this.instructorMode === "create") {
        return "/instructor/courses";
      } else if (this.instructorMode === "manage") {
        return "/instructor/courses";
      } else if (this.instructorMode === "manageBlogs") {
        return "/instructor";
      } else if (
        this.instructorMode === "editor" ||
        this.instructorMode === "editing"
      ) {
        return "/instructor/blogs";
      } else {
        return null;
      }
    }
  },
  methods: {
    updateCourse() {
      this.$store.dispatch("instructor/manageCourse/UPDATE_COURSE");
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
