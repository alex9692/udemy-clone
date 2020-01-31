<template>
  <div>
    <Header @show-sidebar="toggleSidebar"></Header>
    <Sidebar @close-sidebar="showSidebar = false" :show="showSidebar"></Sidebar>
    <main @click="showSidebar = false" class="main-content">
      <nuxt />
    </main>
  </div>
</template>

<script>
import Header from "~/components/shared/Navbar";
import Sidebar from "~/components/shared/Sidebar";

export default {
  components: {
    Header,
    Sidebar
  },
  data() {
    return {
      showSidebar: false,
      width: ""
    };
  },
  methods: {
    toggleSidebar() {
      this.showSidebar = !this.showSidebar;
    },
    onResize(event) {
      this.width= event.currentTarget.innerWidth;

    }
  },
  watch: {
    width(val) {
      if(this.width > 1060) {
        this.showSidebar = false;
      }
    }
  },
  mounted() {
    window.addEventListener("resize", this.onResize);
  },
  beforeDestroy() {
  window.removeEventListener('resize', this.onResize)
}
};
</script>

<style>
.main-content {
  margin-top: 5rem;
}
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
