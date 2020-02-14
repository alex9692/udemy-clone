<template>
  <div class="card">
    <header class="card-header">
      <p
        class="card-header-title is-size-2 has-text-weight-semibold p-lg has-text-grey"
      >
        Course Landing Page
      </p>
    </header>
    <div class="card-content p-lg p-t-xl p-b-xl">
      <div class="content">
        <form>
          <div class="field">
            <div class="control">
              <label class="label has-text-grey-dark">Course Title</label>
              <input
                type="text"
                v-model="title"
                @blur="$v.title.$touch()"
                placeholder="Update course title"
                class="input is-medium"
              />
              <div v-if="$v.title.$error" class="form-error">
                <span v-if="!$v.title.required" class="help is-danger"
                  >Title is required</span
                >
              </div>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <label class="label has-text-grey-dark">Course Subtitle</label>
              <input
                v-model="subtitle"
                type="text"
                placeholder="Update course subtitle"
                class="input is-medium"
              />
            </div>
          </div>
          <div class="field">
            <div class="control">
              <label class="label has-text-grey-dark">Course Description</label>
              <textarea
                v-model="description"
                type="text"
                placeholder="Update course description"
                class="textarea is-medium"
              ></textarea>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <label class="label has-text-grey-dark">Category</label>
              <div class="select is-medium">
                <select v-model="category">
                  <option disabled value="">Select Category</option>
                  <option
                    v-for="category in categories"
                    :key="category._id"
                    :value="category._id"
                    >{{ category.name }}</option
                  >
                </select>
              </div>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <label class="label has-text-grey-dark">Course Image</label>
              <div class="columns">
                <div class="column">
                  <figure class="image is-4by2">
                    <img :src="image" alt="" />
                  </figure>
                </div>
                <div class="column">
                  <input
                    v-model="image"
                    type="text"
                    placeholder="Update course image"
                    @blur="$v.image.$touch()"
                    class="input is-medium"
                  />
                  <div v-if="$v.image.$error" class="form-error">
                    <span v-if="!$v.image.url" class="help is-danger"
                      >Url is invalid</span
                    >
                    <span
                      v-if="!$v.image.supportedFIleTypes"
                      class="help is-danger"
                      >Image Format not supported</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <label class="label has-text-grey-dark">Course Link</label>
              <input
                v-model="productLink"
                type="text"
                placeholder="Update course link"
                class="input is-medium"
                @blur="$v.productLink.$touch()"
              />
              <div v-if="$v.productLink.$error" class="form-error">
                <span v-if="!$v.productLink.url" class="help is-danger"
                  >Course Link is invalid</span
                >
              </div>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <label class="label has-text-grey-dark">Course Video Link</label>
              <input
                v-model="promoVideoLink"
                type="text"
                placeholder="Update course video link"
                class="input is-medium"
                @blur="$v.promoVideoLink.$touch()"
              />
              <div v-if="$v.promoVideoLink.$error" class="form-error">
                <span v-if="!$v.promoVideoLink.url" class="help is-danger"
                  >Course Promo Video Link is invalid</span
                >
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>


<script>
import { required, url } from "vuelidate/lib/validators";
import { supportedFIleTypes } from "~/helpers/validator";
import { mapState } from "vuex";
export default {
  props: {
    course: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapState({
      categories: state => state.category.categories
    })
  },
  data() {
    return {
      title: this.course.title,
      subtitle: this.course.subtitle || "",
      description: this.course.description || "",
      category: this.course.category._id,
      image: this.course.image || "",
      productLink: this.course.productLink || "",
      promoVideoLink: this.course.promoVideoLink || ""
    };
  },
  validations: {
    title: {
      required
    },
    image: {
      url,
      supportedFIleTypes
    },
    productLink: {
      url
    },
    promoVideoLink: {
      url
    }
  },
  methods: {
    emitEvent(data) {
      this.$store.dispatch(
        "instructor/manageCourse/UPDATE_COURSE_VALUES",
        data
      );
    },
    emitAllowUpdate(data) {
      this.$store.commit("instructor/manageCourse/SET_ALLOWSAVE", data);
    }
  },
  watch: {
    title(val) {
      if (val) {
        this.emitEvent({
          title: val
        });
        this.emitAllowUpdate(true);
      } else {
        this.emitAllowUpdate(false);
      }
    },
    subtitle(val) {
      this.emitEvent({
        subtitle: val
      });
    },
    description(val) {
      this.emitEvent({
        description: val
      });
    },
    category(val) {
      this.emitEvent({
        category: val
      });
    },
    image(val) {
      if (!this.$v.image.$error) {
        this.emitEvent({
          image: val
        });
      }
    },
    productLink(val) {
      if (!this.$v.productLink.$error) {
        this.emitEvent({
          productLink: val
        });
      }
    },
    promoVideoLink(val) {
      if (!this.$v.promoVideoLink.$error) {
        this.emitEvent({
          promoVideoLink: val
        });
      }
    }
  }
};
</script>
