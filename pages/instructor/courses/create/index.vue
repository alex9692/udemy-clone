<template>
  <div>
    <span>
      <progress class="progress is-small" :value="val" max="100"></progress
    ></span>
    <section class="section">
      <div class="container">
        <keep-alive>
          <component :is="selectedPage"></component>
        </keep-alive>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex";
import PageOne from "~/components/Instructor/CreateCourse/Page1";
import PageTwo from "~/components/Instructor/CreateCourse/Page2";

export default {
  middleware: ["isAuthenticated", "isAdmin"],
  layout: "instructor",
  components: {
    PageOne,
    PageTwo
  },
  async fetch({ store }) {
    if (store.getters["category/isEmpty"]) {
      await store.dispatch("category/FETCH_CATEGORIES");
    }
  },
  computed: {
    ...mapState({
      page: state => state.instructor.createCourse.page
    }),
    selectedPage() {
      return this.page === 1 ? "PageOne" : "PageTwo";
    },
    val() {
      if (this.page === 1) {
        return 50;
      } else {
        return 100;
      }
    }
  },
  mounted() {
    this.$store.dispatch("inInstructorCourseCreatePage", true);
  },
  destroyed() {
    this.$store.dispatch("inInstructorCourseCreatePage", false);
    this.$store.dispatch("instructor/createCourse/RESET_CREATEPAGE");
  }
};
</script>

<style lang="scss" scoped>
.empty-container {
  width: 1px;
  height: 1px;
}
.progress {
  border-radius: 0;
}
</style>
