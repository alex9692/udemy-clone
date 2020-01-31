import Vue from "vue";
Vue.filter("minifyText", (text, maxlength = 300) => {
  if (text && typeof text === "string") {
    return text.length > maxlength ? text.slice(0, maxlength) + "..." : text;
  } else {
    throw Error("please provide a string field to this filter");
  }
});
