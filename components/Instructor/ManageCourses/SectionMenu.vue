<template>
  <aside class="menu">
    <p class="menu-label is-size-4 has-text-grey-darker">
      Course Editing
    </p>
    <ul class="menu-list">
      <li class="m-b-sm">
        <a
          :class="this.modeTab === 'SectionStudent' ? 'active' : ''"
          class="is-size-5 has-text-grey-darker"
          @click="mode('SectionStudent')"
          >Target your Students</a
        >
      </li>
      <li>
        <a
          :class="this.modeTab === 'SectionCourse' ? 'active' : ''"
          class="is-size-5 has-text-grey-darker"
          @click="mode('SectionCourse')"
          >Course Landing Page</a
        >
      </li>
    </ul>
    <p class="menu-label is-size-4 has-text-grey-darker">
      Course Management
    </p>
    <ul class="menu-list">
      <li class="m-b-sm">
        <a
          :class="this.modeTab === 'SectionPricing' ? 'active' : ''"
          class="is-size-5 has-text-grey-darker"
          @click="mode('SectionPricing')"
          >Price</a
        >
      </li>
      <li>
        <a
          :class="this.modeTab === 'SectionStatus' ? 'active' : ''"
          class="is-size-5 has-text-grey-darker"
          @click="mode('SectionStatus')"
          >Status</a
        >
      </li>
    </ul>
  </aside>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      modeTab: state => state.instructor.manageCourse.mode
    })
  },
  methods: {
    mode(m) {
      this.$store.commit("instructor/manageCourse/SET_MODE", m);
    }
  },
  created() {
    this.$store.commit("instructor/manageCourse/SET_MODE", "SectionStudent");
  }
};
</script>

<style scoped lang="scss">
.menu-list li:hover a,
.menu-list li a.active {
  color: #58529f !important;
  transform: scale(1.03);
  transition: 200ms transform;
  border-left: 3px solid #58529f;
}
</style>
