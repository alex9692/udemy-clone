<template>
  <div class="tile is-ancestor">
    <div class="tile is-parent is-12">
      <nuxt-link
        :to="`/instructor/courses/manage/${id}`"
        class="tile overlay-container is-child box"
      >
        <div class="columns">
          <div class="is-overlay overlay-child">
            <p class="overlay-text title is-3 has-text-weight-bold">
              Update Course
            </p>
          </div>
          <div class="column is-narrow">
            <figure class="image is-128x128">
              <img :src="image" />
            </figure>
          </div>
          <div class="column content">
            <p class="title">
              {{ title }}
            </p>
            <p class="subtitle">
              {{ subtitle }}
            </p>
            <span class="tag" :class="courseStatus(status)">{{ status }}</span>
          </div>
          <div class="column is-2 text-left">
            <p
              v-if="price"
              class="subtitle is-3 has-text-weight-semibold p-b-sm"
            >
              {{ price }} $
            </p>
          </div>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    courseStatus(status) {
      if (status === "published") {
        return "is-success";
      }
      if (status === "active") {
        return "is-primary";
      }
      if (status === "inactive") {
        return "is-warning";
      }
      if (status === "deleted") {
        return "is-danger";
      }
    }
  },
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: false,
      default: "No subtitle yet!"
    },
    status: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: false,
      default:
        "https://www.searchenginewatch.com/wp-content/uploads/2018/10/shutterstock_1156748098.jpg"
    },
    price: {
      type: Number,
      required: false
    },
    id: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.overlay-container {
  position: relative;
}
.overlay-container:hover {
  box-shadow: none;
}
.overlay-container:hover .overlay-child {
  background-color: #ffffffe6;
}
.overlay-container:hover .overlay-text {
  visibility: visible;
}
.overlay-child {
  height: 100%;
  width: 100%;
  z-index: 2;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}
.overlay-text {
  color: #58529f;
  visibility: hidden;
}
.text-left {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.text-left p {
  white-space: nowrap;
  border-bottom: 1px solid #7a7a7a;
}
@media (max-width: 1060px) {
  .title {
    font-size: 1.5rem;
  }
  .subtitle {
    font-size: 1rem;
  }
  .image {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
