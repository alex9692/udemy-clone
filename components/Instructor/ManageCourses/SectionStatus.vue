<template>
  <div class="card">
    <header class="card-header">
      <p
        class="card-header-title  is-size-2 has-text-weight-semibold p-lg has-text-grey"
      >
        Status
      </p>
    </header>
    <div class="card-content p-lg p-t-xl p-b-xl">
      <div class="content">
        <form>
          <div class="field">
            <div class="control">
              <label class="label has-text-grey-dark">
                Status of the course
              </label>
              <div class="select is-medium">
                <select v-model="status">
                  <option disabled value="">Change Status</option>
                  <option value="active">Active</option>
                  <option value="published">Published</option>
                  <option value="inactive">Inactive</option>
                  <option value="deleted">Deleted</option>
                </select>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    course: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      status: this.course.status
    };
  },
  watch: {
    status(val) {
      this.$store.dispatch("instructor/manageCourse/UPDATE_COURSE_VALUES", {
        status: val
      });
    }
  }
};
</script>
