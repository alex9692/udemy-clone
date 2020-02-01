<template>
  <div>
    <h1 class="title is-1">Secret Page</h1>
  </div>
</template>

<script>
export default {
  middleware: "isAuthenticated"
};
</script>
