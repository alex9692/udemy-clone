<template>
  <div class="card">
    <header class="card-header">
      <p
        class="card-header-title is-size-2 has-text-weight-semibold p-lg has-text-grey"
      >
        Pricing
      </p>
    </header>
    <div class="card-content p-lg p-t-xl p-b-xl">
      <div class="content">
        <form>
          <div class="field">
            <div class="control">
              <label class="label has-text-grey-dark">
                Price of the course
              </label>
              <input
                v-model.number="price"
                type="text"
                class="input is-medium"
                placeholder="Update course price"
              />
            </div>
          </div>
          <div class="field">
            <div class="control">
              <label class="label has-text-grey-dark">
                Discounted Price for the course</label
              >
              <input
                v-model.number="discountedPrice"
                type="text"
                class="input is-medium"
                placeholder="Update course discounted price"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    course: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      price: this.course.price || "",
      discountedPrice: this.course.discountedPrice || ""
    };
  },
  methods: {
    emitEvent(data) {
      this.$store.dispatch(
        "instructor/manageCourse/UPDATE_COURSE_VALUES",
        data
      );
    }
  },
  watch: {
    price(val) {
      this.emitEvent({
        price: val
      });
    },
    discountedPrice(val) {
      this.emitEvent({
        discountedPrice: val
      });
    }
  }
};
</script>
