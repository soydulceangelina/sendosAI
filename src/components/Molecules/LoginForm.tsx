import { useState } from "react";
import { View, Text } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { user } from "../../utils/userDB";
import { auth } from "../../utils/auth";
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

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data: FormData) => {
    setAuthError("");
    auth(user, setAuthError, data);
  };

  return (
    <View className="p-8">
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
          <Text className="text-red text-xs mt-1">
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
        {errors.password && (
          <Text className="text-red text-xs mt-1">Contraseña no válida.</Text>
        )}
      </View>
      <Button
        title="Inicia sesión"
        onPress={handleSubmit(onSubmit)}
        isValid={true}
      />
      {authError && <Text className="text-red text-xs mt-1">{authError}</Text>}
    </View>
  );
}
