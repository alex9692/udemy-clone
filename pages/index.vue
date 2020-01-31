<template>
  <div>
    <Hero></Hero>
    <section class="section">
      <div class="container">
        <h1 class="title is-size-1 has-text-weight-bold">Featured Courses</h1>
        <Courses></Courses>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <h1 class="title is-size-1">Featured Articles</h1>
        <Articles></Articles>
      </div>
    </section>
  </div>
</template>

<script>
import Hero from "~/components/shared/Hero";
import Courses from "~/components/Courses/Courses";
import Articles from "~/components/Articles/Articles";
export default {
  components: { Hero, Courses, Articles },
  async fetch({ store }) {
    await store.dispatch("product/FETCH_COURSES");
  }
};
</script>


//

// .user-avatar {
//   display: inline-block;
// }



// .author-name {
//   font-size: 20px;
//   font-weight: bold;
// }
// .links {
//   padding-top: 15px;
// }


