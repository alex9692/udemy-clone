<template>
  <section class="section">
    <div class="container p-l">
      <div class="columns">
        <div class="column is-10 is-offset-1">
          <h1 class="title is-1 has-text-grey-dark has-text-weight-bold">
            Your Courses
          </h1>
          <Courses></Courses>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
import Courses from "~/components/Instructor/Courses/Courses";
export default {
  layout: "instructor",
  components: {
    Courses
  },
  async fetch({ store }) {
    if (!store.getters["instructor/product/isLoaded"]) {
      await store.dispatch("instructor/product/FETCH_COURSES");
    }
  },
  mounted() {
    this.$store.dispatch("inInstructorCoursePage", true);
  },
  destroyed() {
    this.$store.dispatch("inInstructorCoursePage", false);
  }
};
</script>
