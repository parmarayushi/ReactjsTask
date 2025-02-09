import { yupResolver } from "@hookform/resolvers/yup";
import {
  Button,
  Group,
  NumberInput,
  Radio,
  Select,
  Textarea,
  TextInput,
} from "@mantine/core";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { CategoryOptions } from "../../utility/constants/constants";
import {
  useAddProductMutation,
  useUpdateProductMutation,
} from "../../utility/services/products.service";
import {
  initialValues,
  productSchema,
} from "../../utility/validations/products.validation";

export const ProductsForm = ({ product, onSuccess }) => {
  const [addProduct] = useAddProductMutation();
  const [updateProduct] = useUpdateProductMutation();

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(productSchema),
    defaultValues: initialValues,
  });

  useEffect(() => {
    if (product) {
      reset(product);
    }
  }, [product, reset]);

  // add and update product data
  const onSubmit = async (data) => {
    try {
      if (product) {
        await updateProduct({ id: product.id, ...data }).unwrap();
      } else {
        await addProduct(data).unwrap();
      }
      alert(`Product ${product ? "updated" : "added"} successfully!`);
      reset();
      onSuccess();
    } catch (error) {
      console.error("Error saving product", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        label="Product Name"
        {...register("name")}
        error={errors.name?.message}
      />
      <Textarea
        label="Description"
        {...register("description")}
        error={errors.description?.message}
        mt="md"
      />

      <Controller
        name="price"
        control={control}
        render={({ field }) => (
          <NumberInput
            {...field}
            label="Price"
            mt="md"
            error={errors.price?.message}
            value={field.value || undefined}
            onChange={(value) =>
              field.onChange(value === "" ? undefined : value)
            }
          />
        )}
      />

      <Controller
        name="category"
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            label="Category"
            data={CategoryOptions}
            mt="md"
            error={errors.category?.message}
            onChange={(value) => field.onChange(value)}
          />
        )}
      />

      <Controller
        name="status"
        control={control}
        render={({ field }) => (
          <Radio.Group
            {...field}
            label="Status"
            mt="md"
            error={errors.status?.message}
            onChange={(value) => field.onChange(value)}
          >
            <Group>
              <Radio value="active" label="Active" />
              <Radio value="inactive" label="Inactive" />
            </Group>
          </Radio.Group>
        )}
      />

      <Button type="submit" fullWidth mt="lg">
        {product ? "Update Product" : "Add Product"}
      </Button>
    </form>
  );
};
