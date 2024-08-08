import { SafeAreaView, Image, View } from "react-native";
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
    </View>
  );
}
