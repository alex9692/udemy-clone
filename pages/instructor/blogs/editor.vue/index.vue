<template>
  <div class="blog-editor-container">
    <div class="container">
      <Editor></Editor>
    </div>
  </div>
</template>

<script>
import Editor from "~/components/Editor/Editor";
export default {
  layout: "instructor",
  components: {
    Editor
  },
  mounted() {
    this.$store.dispatch("inInstructorBlogsEditorPage", true);
  },
  destroyed() {
    this.$store.dispatch("inInstructorBlogsEditorPage", false);
  }
};
</script>
