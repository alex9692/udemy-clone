<template>
  <form class="m-b-lg">
    <label class="label has-text-grey-dark">{{ label }}</label>
    <div
      class="field has-addons"
      v-for="(count, index) in counter"
      :key="index"
    >
      <div class="control inp">
        <input
          type="text"
          v-model="inputs[count - 1].value"
          placeholder="Enter something here to add add another anwser..."
          class="input is-medium"
        />
      </div>
      <div class="control">
        <button
          type="button"
          @click="decrement(count)"
          :disabled="counter === 1"
          class="button is-danger is-medium"
        >
          Delete
        </button>
      </div>
    </div>
    <div class="control">
      <button
        type="button"
        class="button is-link is-medium is-outlined"
        @click="increment()"
      >
        Add an answer
      </button>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    input: {
      type: Array,
      required: true
    },
    mode: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      inputs: [...this.input],
      counter: this.input.length
    };
  },
  methods: {
    increment() {
      if (!this.inputs[this.inputs.length - 1].value) return;
      this.inputs.push({ value: "" });
      this.counter++;
    },
    decrement(count) {
      if (this.counter === 1) return;
      this.inputs.splice(count - 1, 1);
      this.counter--;
    }
  },
  watch: {
    inputs: {
      handler(val, oldVal) {
        const mode = this.mode;
        const filteredVal = JSON.parse(JSON.stringify(val));
        this.$store.dispatch("instructor/manageCourse/UPDATE_COURSE_VALUES", {
          [mode]: filteredVal
        });
      },
      deep: true
    }
  }
};
</script>

<style lang="css" scoped>
.control.inp {
  flex-grow: 1;
}

.button.is-danger {
  opacity: 0;
}
.button.is-danger:hover {
  opacity: 1;
}
.inp:hover + .control .button.is-danger {
  opacity: 1;
}
</style>
