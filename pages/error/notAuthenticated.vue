<template>
  <div style="height:100%">
    <ErrorView
      :title="'Ooooops, you are not authenticated to visit this page, please login'"
      :status="'401'"
      :navigateToPage="'/login'"
      :navigateToText="'Navigate to Login Page'"
    />
  </div>
</template>

<script>
import ErrorView from "@/components/shared/Error";
export default {
  layout: 'test',
  components: {
    ErrorView
  }
};
</script>

<style scoped>
</style>
