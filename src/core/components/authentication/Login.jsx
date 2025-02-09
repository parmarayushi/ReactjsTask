import { yupResolver } from "@hookform/resolvers/yup";
import {
  Alert,
  Button,
  Card,
  Center,
  PasswordInput,
  Stack,
  TextInput,
  Title,
} from "@mantine/core";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { login } from "../../utility/services/authService";
import { loginSchema } from "../../utility/validations/login.validations";

const Login = () => {
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const navigate = useNavigate();

  //navigate to dashboard it username and password are correct
  const onSubmit = async (data) => {
    try {
      await login(data.email, data.password);
      navigate("/");
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <Center style={{ height: "100vh" }}>
      <Card
        shadow="lg"
        padding="xl"
        radius="md"
        withBorder
        style={{ width: 400 }}
      >
        <Title order={2} align="center" mb="md">
          Login
        </Title>

        {error && (
          <Alert color="red" radius="md" mb="md">
            {error}
          </Alert>
        )}

        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack>
            <TextInput
              placeholder="Enter your email"
              {...register("email")}
              error={errors.email?.message}
              radius="md"
            />

            <PasswordInput
              placeholder="Enter your password"
              {...register("password")}
              error={errors.password?.message}
              radius="md"
            />

            <Button type="submit" fullWidth mt="md" radius="md">
              Login
            </Button>
          </Stack>
        </form>
      </Card>
    </Center>
  );
};

export default Login;
