import { View, Text } from "react-native";
import { useForm, Controller } from "react-hook-form";
import Button from "../Atoms/Button";
import CustomTextInput from "../Atoms/TextInput";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type FormData = {
  email: string;
  password: string;
};

const schema = yup
  .object({
    email: yup.string().required().email(),
    password: yup.string().required().min(6),
  })
  .required();

export default function LoginForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(schema) });

  const onSubmit = (data: FormData) => {
    console.log(data);
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
    </View>
  );
}
