import { useState } from "react";
import { View, Text } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { auth } from "../../services/auth";
import useAuth from "../../hooks/useAuth";
import Button from "../Atoms/Button";
import CustomTextInput from "../Atoms/TextInput";

const schema = yup
  .object({
    email: yup.string().required().email(),
    password: yup.string().required().min(6),
  })
  .required();

export default function LoginForm() {
  const [authError, setAuthError] = useState("");
  const { login } = useAuth();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data: FormData) => {
    setAuthError("");
    auth(setAuthError, data, login);
  };

  return (
    <View className="w-full">
      <Text className="mb-5 ml-4 text-3xl font-bold text-gray-300">
        Ingresa
      </Text>
      <View className="mb-5">
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, value } }) => (
            <CustomTextInput
              type="email"
              showIcon={true}
              onChangeValue={onChange}
              value={value}
              autoCapitalize="none"
            />
          )}
          name="email"
        />
        {errors.email && (
          <Text className="text-red text-base mt-1">
            Correo electrónico no válido
          </Text>
        )}
      </View>
      <View className="mb-5">
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, value } }) => (
            <CustomTextInput
              type="password"
              showIcon={true}
              onChangeValue={onChange}
              value={value}
            />
          )}
          name="password"
        />
        <View className="flex flex-row items-center justify-between">
          {errors.password && (
            <Text className="text-red text-base mt-1">Contraseña no válida.</Text>
          )}
          <Text className="text-base text-gray-200 ml-auto mt-1">Olvidé mi contraseña.</Text>
        </View>
      </View>
      <Button
        title="Inicia sesión"
        onPress={handleSubmit(onSubmit)}
        isValid={true}
      />
      {authError && (
        <Text className="text-red text-base mt-1">{authError}</Text>
      )}
    </View>
  );
}
