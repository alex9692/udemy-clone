<template>
  <div class="columns is-centered">
    <div
      v-for="course in courses"
      :key="course._id"
      class="column is-half-desktop is-one-quarter-widescreen is-two-fifths-tablet"
    >
      <Course
        :image="course.image"
        :title="course.title"
        :subtitle="course.subtitle"
        :description="course.description"
        :price="course.price"
        :discountedPrice="course.discountedPrice"
        :username="course.user.name"
      ></Course>
    </div>
  </div>
</template>

<script>
import Course from "~/components/Courses/Course/Course";

import { mapState } from "vuex";
export default {
  components: {
    Course
  },
  computed: {
    ...mapState({
      courses: state => state.product.courses
    })
  }
};
</script>

<style lang="css" scoped>
  .columns.is-centered {
    flex-wrap: wrap;
  }

@media (min-width: 1216px) {
  .columns.is-centered {
    justify-content: flex-start;
  }
}
</style>
