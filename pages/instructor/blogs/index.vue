<template>
  <div class="container">
    <section class="section">
      <div class="instructor-blogs-header-menu">
        <h1 class="title is-1 has-text-weight-bold has-text-grey-dark">
          Your Stories
        </h1>
        <nuxt-link to="/instructor/blogs/editor" class="button is-outlined"
          >Write a story</nuxt-link
        >
      </div>
      <div class="tabs">
        <ul>
          <li><a>Drafts</a></li>
          <li><a>Published</a></li>
        </ul>
      </div>
      <div class="instructor-blogs-container">
        <div class="columns">
          <div class="column is-full">
            <div class="instructor-blog">
              <div class="instructor-blog-header ">
                <h1 class="title is-4 has-text-grey-dark has-text-weight-bold">
                  Some Title
                </h1>
              </div>
              <div class="instructor-blog-footer">
                <h1 class="subtitle is-6 has-text-grey has-text-weight-light">
                  Last Edited 17th December, 2018
                </h1>
              </div>
            </div>
          </div>
          <div class="column is-full">
            <div class="instructor-blog featured">
              <div class="instructor-blog-header">
                <h1 class="title is-4 has-text-grey-dark has-text-weight-bold">
                  Some Title
                </h1>
              </div>
              <div class="instructor-blog-footer">
                <h1 class="subtitle is-6 has-text-grey has-text-weight-light">
                  Last Edited 17th December, 2018
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- <Header
      title="Manage your Blogs"
      exitLink="/"
    /> -->
    <!-- <div class="instructor-blogs">
      <div class="container">
        <div class="section">
          <div class="header-block">
            <h2>Your Stories</h2>
            <div class="title-menu">
              <button @click="() => {}" class="button">Write a story</button>
            </div>
          </div>
          <div class="tabs">
            <ul>
              <li><a>Drafts</a></li>
              <li><a>Published</a></li>
            </ul>
          </div>
          <div class="blogs-container ">
            <template>
              <div>
                <div class="blog-card featured">
                  <h2>Some Title</h2>
                  <div class="blog-card-footer">
                    <span>
                      Last Edited 17th December, 2018
                    </span>
                  </div>
                </div>
                <div class="blog-card featured">
                  <h2>Some Title</h2>
                  <div class="blog-card-footer">
                    <span>
                      Last Edited 17th December, 2018
                    </span>
                  </div>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>
<script>
// import Header from '~/components/shared/Header'
export default {
  layout: "instructor",
  // components: {Header},
  mounted() {
    this.$store.dispatch("inInstructorBlogsManagePage", true);
  },
  destroyed() {
    this.$store.dispatch("inInstructorBlogsManagePage", false);
  }
};
</script>

<style scoped lang="scss">
.columns {
  flex-wrap: wrap;
}
.column {
  padding: 0;
}
.instructor-blogs-header-menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}
.instructor-blogs-container {
  margin-top: 2rem;
}
.instructor-blog {
  padding: 1.5rem 0.25rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.instructor-blog-footer {
  margin-top: 0.5rem;
  padding-bottom: 0.25rem;
}
.featured {
  border-left: 5px solid #3cc314;
  padding-left: 10px;
  transition: border ease-out 0.2s;
}
// ----------------------------------------
.blog-error {
  font-size: 35px;
}
.blog-card {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 20px 0;
  > h2 {
    font-size: 30px;
    font-weight: bold;
  }
  &-footer {
    color: rgba(0, 0, 0, 0.54);
  }
  &.featured {
    border-left: 5px solid #3cc314;
    padding-left: 10px;
    transition: border ease-out 0.2s;
  }
}
.header-block {
  display: flex;
  flex-direction: row;
  align-items: center;
  > h2 {
    font-size: 40px;
    font-weight: bold;
  }
  .title-menu {
    margin-left: auto;
  }
}
</style>
