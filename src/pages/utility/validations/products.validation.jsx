import * as yup from "yup";

export const initialValues = {
  name: "",
  description: "",
  price: "",
  category: "",
  status: "",
};

export const productSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  description: yup.string().required("Description is required"),
  price: yup
    .number()
    .required("Price is required")
    .typeError("Price must be a number")
    .positive("Price must be positive"),
  category: yup.string().required("Category is required"),
  status: yup
    .string()
    .oneOf(["active", "inactive"], "Select status")
    .required("Status is required"),
});
