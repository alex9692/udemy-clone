import { helpers } from "vuelidate/lib/validators";

export const supportedFIleTypes = val => {
  if (!helpers.req(val)) {
    return true;
  }
  const allowedFormats = ["jpg", "jpeg", "png", "svg"];
  const ext = val.split(".").pop();
  return allowedFormats.includes(ext);
};
