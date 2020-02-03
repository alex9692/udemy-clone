<template>
  <div style="height:100%">
    <ErrorView
      :title="
        'Ooooops, you are not authorized to visit this page, please talk to administrator in order to get access rights'
      "
      :status="'403'"
      :navigateToPage="'/'"
      :navigateToText="'Navigate to Home Page'"
    />
  </div>
</template>

<script>
import ErrorView from "@/components/shared/Error";
export default {
  layout: "test",
  components: {
    ErrorView
  }
};
</script>

<style scoped>
</style>
