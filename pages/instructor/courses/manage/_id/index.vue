<template>
  <div>
    <section class="section">

      <!-- <div class="container"> -->
        <h2 class="has-text-right m-b-md">
          <strong>Note:</strong> <span class="has-text-info">Exting this page will revert all your changes.</span>
        </h2>
        <div class=" columns is-variable is-1">
          <div class="column is-3 p-lg">
            <SectionMenu></SectionMenu>
          </div>
          <div class="column">
            <keep-alive>
              <component :is="mode" :course="course"></component>
            </keep-alive>
          </div>
        </div>
      <!-- </div> -->
    </section>
  </div>
</template>

<script>
import SectionStudent from "~/components/Instructor/ManageCourses/SectionStudents";
import SectionCourse from "~/components/Instructor/ManageCourses/SectionCourse";
import SectionPricing from "~/components/Instructor/ManageCourses/SectionPricing";
import SectionStatus from "~/components/Instructor/ManageCourses/SectionStatus";
import SectionMenu from "~/components/Instructor/ManageCourses/SectionMenu";
import { mapState, mapGetters } from "vuex";
export default {
  layout: "instructor",
  components: {
    SectionStudent,
    SectionCourse,
    SectionPricing,
    SectionStatus,
    SectionMenu
  },
  computed: {
    ...mapState({
      mode: state => state.instructor.manageCourse.mode
    }),
    ...mapGetters({
      course: "instructor/manageCourse/getCourse"
    })
  },
  async fetch({ store, params }) {
    await store.dispatch("instructor/manageCourse/FETCH_COURSE", params.id);
  },
  data() {
    return {};
  },
  created() {
    this.$store.dispatch("inInstructorCourseManagePage", true);
    // this.$store.dispatch(
    //   "instructor/manageCourse/FETCH_COURSE",
    //   this.$route.params.id
    // );
  },
  destroyed() {
    this.$store.dispatch("inInstructorCourseManagePage", false);
    this.$store.commit("instructor/manageCourse/RESET_UPDATEDCOURSEVALUES");
  }
};
</script>


