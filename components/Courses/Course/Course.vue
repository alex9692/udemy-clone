<template>
  <div class="card grid">
    <div class="card-image grid-image">
      <figure class="image is-4by2">
        <img :src="image" alt="Placeholder image" />
      </figure>
    </div>
    <div class="card-content grid-content grid-content-fix">
      <div class="media">
        <div class="media-content">
          <p class="title">{{ title | minifyText(45) }}</p>
          <p class="subtitle">
            <i>by {{ username }}</i>
          </p>
        </div>
      </div>
      <div class="content description">
        {{ subtitle | minifyText(80) }}
        <br />
      </div>
      <div class="price-box">
        <span class="price">{{ price }}$</span>
        <span class="disc-price has-text-weight-bold is-size-4"
          >{{ discountedPrice }}$</span
        >
      </div>
    </div>
    <footer class="card-footer grid-footer">
      <nuxt-link :to="''" class="card-footer-item">Learn More</nuxt-link>
      <a target="_" :href="'#'" class="card-footer-item">Enroll</a>
    </footer>
  </div>
</template>


<script>
export default {
  props: {
    image: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    discountedPrice: {
      type: Number,
      required: true
    },
    username: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.title {
  font-size: 2rem;
}
.subtitle {
  font-size: 1.15rem;
}
.description {
  font-size: 1rem;
}
.card-image:hover {
  cursor: pointer;
  opacity: 0.9;
}
.price-box {
  text-align: right;
}
.price-box .price {
  color: gray;
  text-decoration: line-through;
}
.grid {
  display: grid;
  grid-template-rows:
    [image-start]minmax(min-content, max-content)
    [image-end content-start] 380px
    [content-end footer-start] 50px [footer-end];
}
.grid-image {
  grid-row: image;
}
.grid-content {
  grid-row: content;
}
.grid-footer {
  grid-row: footer;
}
.is-flex {
  flex-direction: column;
}
.grid-content-fix {
  display: grid;
  grid-template-rows: 190px 1fr 36px;
}

@media (max-width: 1407px) {
  .grid {
    grid-template-rows:
      [image-start]minmax(min-content, max-content)
      [image-end content-start] 410px
      [content-end footer-start] 50px [footer-end];
  }
}

@media (max-width: 1215px) {
  .title {
    font-size: 1.75rem;
  }
  .subtitle {
    font-size: 1.25rem;
  }
  .description {
    font-size: 1.25rem;
  }
  .grid {
    grid-template-rows:
      [image-start] minmax(min-content, max-content)
      [image-end content-start] 300px
      [content-end footer-start] 50px [footer-end];
  }
  .grid-content-fix {
    grid-template-rows: 120px 1fr 36px;
  }
}

@media (max-width: 900px) {
  .grid {
    grid-template-rows:
      [image-start] minmax(min-content, max-content)
      [image-end content-start] 340px
      [content-end footer-start] 50px [footer-end];
  }
}

@media (max-width: 768px) {
  .title {
    font-size: 2.25rem;
  }
  .subtitle {
    font-size: 1.5rem;
  }
  .description {
    font-size: 1.25rem;
  }
  .grid {
    grid-template-rows:
      [image-start] minmax(min-content, max-content)
      [image-end content-start] minmax(min-content, max-content)
      [content-end footer-start] 50px [footer-end];
  }
}

@media (max-width: 540px) {
    .title {
    font-size: 1.5rem;
  }
  .subtitle {
    font-size: 1.25rem;
  }
  .description {
    font-size: 1rem;
  }
}

@media (max-width: 320px) {
    .title {
    font-size: 1.25rem;
  }
  .subtitle {
    font-size: 1rem;
  }
  .description {
    font-size: 0.75rem;
  }
}
</style>
