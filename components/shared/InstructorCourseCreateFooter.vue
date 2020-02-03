<template>
  <footer class="footer">
    <div class="container center">
      <div class="left">
        <div v-show="page === 2">
          <button @click.prevent="goFirstPage" class="button is-large">
            Previous
          </button>
        </div>
        <!-- <div v-else class="empty-container">
              </div> -->
      </div>
      <div class="right">
        <div v-if="page === 1">
          <button
            :disabled="isDisabledPageOne"
            @click.prevent="goLastPage"
            class="button is-large float-right"
          >
            Continue
          </button>
        </div>
        <div v-else>
          <button
            :disabled="isDisabledPageTwo"
            @click="createCourse"
            class="button is-success is-large float-right"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      page: state => state.instructor.createCourse.page,
      isDisabledPageOne: state =>
        state.instructor.createCourse.isDisabledPageOne,
      isDisabledPageTwo: state =>
        state.instructor.createCourse.isDisabledPageTwo
    })
  },
  methods: {
    goFirstPage() {
      this.$store.dispatch("instructor/createCourse/CHANGE_PAGE", 1);
    },
    goLastPage() {
      this.$store.dispatch("instructor/createCourse/CHANGE_PAGE", 2);
    },
    createCourse() {
      this.$store.dispatch("instructor/createCourse/CREATE_COURSE");
    }
  }
};
</script>

<style lang="scss" scoped>
.footer {
  padding: 15px 0;
  border-top: 1px solid #dedfe0;
  height: 6rem;
}
.center {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.left {
  flex-grow: 1;
}
.right {
  justify-content: flex-end;
}
</style>
