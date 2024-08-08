import { Text, Image, View } from "react-native";
import Icons from "../Atoms/Icons";
import LoginForm from "../Molecules/LoginForm";

export default function LoginLayout() {
  return (
    <View className="flex p-8 w-full items-center">
      <View className="mt-8 mb-24">
        <Image
          className="h-12 w-44"
          source={require("../../../assets/sendos-logo.png")}
        />
      </View>
      <LoginForm />
      <View className="mt-16 flex items-center ">
        <Text className="text-gray-200 text-base">O continua con</Text>
        <View className="my-8">
          <Icons name="linkedin" size={50} />
        </View>
        <View className="flex items-center">
          <Text className="text-gray-100 text-base">No tienes una cuenta?</Text>
          <Text className="text-gray-300 text-base">
            <Text className="font-bold">Regístrate</Text> con tu cuenta
            empresarial
          </Text>
        </View>
      </View>
    </View>
  );
}
