<template>
  <div class="content has-text-centered m-t-xl">
    <p class="title is-2 has-text-weight-light">
      What category best fits the knowledge you'll share?
    </p>
    <p class="subtitle is-4 has-text-weight-light">
      If you're not sure about the right category, you can change it later.
    </p>
    <div class="field p-t-xl">
      <div class="control has-text-centered">
        <div class="select is-medium" style="width:50%">
          <select v-model="selected" style="width:100%">
            <option disabled value="">Select Category</option>
            <option v-for="category in categories" :key="category._id" :value="category._id">{{
              category.name
            }}</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      selected: ""
    };
  },
  computed: {
    ...mapState({
      categories: state => state.category.categories
    })
  },
  watch: {
    selected(val) {
      if (!val) {
        this.$store.dispatch(
          "instructor/createCourse/CHANGE_ISDISABLEDPAGETWO",
          true
        );
      } else {
        this.$store.dispatch("instructor/createCourse/CHANGE_CATEGORY", val);
        this.$store.dispatch(
          "instructor/createCourse/CHANGE_ISDISABLEDPAGETWO",
          false
        );
      }
    }
  }
};
</script>
