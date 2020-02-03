<template>
  <div>
    <Course
      v-for="course in courses"
      :key="course._id"
      :title="course.title"
      :subtitle="course.subtitle"
      :status="course.status"
      :price="course.price"
      :image="course.image"
    ></Course>
  </div>
</template>

<script>
import Course from "~/components/Instructor/Courses/Course/Course";
import { mapState } from "vuex";
export default {
  components: {
    Course
  },
  computed: {
    ...mapState({
      courses: state => state.instructor.product.courses
    })
  }
};
</script>
