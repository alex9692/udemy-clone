<template>
  <div class="card">
    <header class="card-header">
      <p
        class="card-header-title is-size-2 has-text-weight-semibold p-lg has-text-grey"
      >
        Target your students
      </p>
    </header>
    <div class="card-content p-lg p-t-xl p-b-xl">
      <div class="content">
        <MultiLineTextInput
          mode="wsl"
          :input="wsl"
          label="What will students learn in your course ?"
        ></MultiLineTextInput>
        <MultiLineTextInput
          mode="requirements"
          :input="req"
          label="What are the requirements for the course ?"
        ></MultiLineTextInput>
      </div>
    </div>
  </div>
</template>

<script>
import MultiLineTextInput from "~/components/shared/MultiLineTextInput";
import { mapGetters } from "vuex";
export default {
  components: {
    MultiLineTextInput
  },
  computed: {
    ...mapGetters({
      wsl: "instructor/manageCourse/getWsl",
      req: "instructor/manageCourse/getReq"
    })
  }
};
</script>
