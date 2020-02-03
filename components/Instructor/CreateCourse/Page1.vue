<template>
  <div class="content has-text-centered m-t-xl">
    <p class="title is-2 has-text-weight-light">
      Please choose title of your Course.
    </p>
    <p class="subtitle is-4 has-text-weight-light">
      No worries, you can change title later.
    </p>
    <div class="field has-addons p-t-xl">
      <div class="control center has-icons-right">
        <input
          :maxLength="50"
          class="input is-medium"
          :class="{ 'is-danger': $v.title.$error }"
          v-model.lazy="title"
          type="text"
          @blur="$v.title.$touch()"
          placeholder="e.g. Amazing Course in Flutter!"
        />

        <span class="icon is-small is-right">
          <p class="subtitle has-text-grey-light has-text-weight-semibold">
            {{ 50 - title.length }}
          </p>
        </span>

        <div v-if="$v.title.$error" class="form-error">
          <span v-if="!$v.title.required" class="help is-danger"
            >Title is required</span
          >
        </div>
      </div>
      <div class="control">
        <button class="button is-medium is-info">
          <font-awesome-icon :icon="['fas', 'check']"></font-awesome-icon>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      title: ""
    };
  },
  validations: {
    title: {
      required
    }
  },
  watch: {
    title(val) {
      if (!val) {
        this.$store.dispatch(
          "instructor/createCourse/CHANGE_ISDISABLEDPAGEONE",
          true
        );
      } else {
        this.$store.dispatch("instructor/createCourse/CHANGE_TITLE", val);
        this.$store.dispatch(
          "instructor/createCourse/CHANGE_ISDISABLEDPAGEONE",
          false
        );
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.center {
  width: 50%;
}
.has-addons {
  justify-content: center;
}
@media (max-width: 425px) {
  .center {
    width: 100%;
  }
}
</style>
