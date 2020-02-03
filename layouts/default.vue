<template>
  <div class="grid-d">
    <header class="grid-d-hd">
      <Header @show-sidebar="toggleSidebar" :show="showSidebar"></Header>
    </header>
    <Sidebar @close-sidebar="showSidebar = false" :show="showSidebar"></Sidebar>
    <main @click="showSidebar = false" class="grid-d-m">
      <nuxt />
    </main>
    <footer class="grid-d-ft">
      <Footer></Footer>
    </footer>
  </div>
</template>

<script>
import Header from "~/components/shared/Navbar";
import Sidebar from "~/components/shared/Sidebar";
import Footer from "~/components/shared/Footer";

export default {
  components: {
    Header,
    Footer,
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
      this.width = event.currentTarget.innerWidth;
    }
  },
  watch: {
    width(val) {
      if (this.width > 1060) {
        this.showSidebar = false;
      }
    }
  },
  mounted() {
    window.addEventListener("resize", this.onResize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  }
};
</script>

<style>
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
}
body {
  margin: 0;
  padding: 0;
}
.grid-d {
  display: grid;
  min-height: 100vh;
  grid-template-rows:
    [header-start] 5rem [header-end main-start] 1fr
    [main-end footer-start] minmax(min-content,max-content) [footer-end];
}
.grid-d-hd {
  grid-row: header;
}
.grid-d-m {
  grid-row: main;
}
.grid-d-ft {
  grid-row: footer;
}
</style>
