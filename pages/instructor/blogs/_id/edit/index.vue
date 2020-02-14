<template>
  <div class="blog-editor-container">
    <div class="container">
      <Editor :blog="blog"></Editor>
    </div>
  </div>
</template>

<script>
import Editor from "~/components/Editor/Editor";
import { mapState } from "vuex";
export default {
  layout: "instructor",
  components: {
    Editor
  },
  computed: {
    ...mapState({
      blog: state => state.instructor.blog.blog
    })
  },
  async fetch({ store, params }) {
    await store.dispatch("instructor/blog/FETCH_BLOG", params.id);
  },
  // created() {
  //   this.$store.dispatch("instructor/blog/FETCH_BLOG", this.$route.params.id);
  // },
  mounted() {
    this.$store.dispatch("inInstructorBlogsEditingrPage", true);
  },
  destroyed() {
    this.$store.commit("instructor/blog/SET_BLOG", null);
    this.$store.dispatch("inInstructorBlogsEditingrPage", false);
  }
};
</script>
