import { SafeAreaView, Image, View } from "react-native";
import LoginForm from "../Molecules/LoginForm";

export default function LoginLayout() {
  return (
    <SafeAreaView className="flex p-8 w-full items-center">
      <View>
        <Image
          className="h-12 w-44"
          source={require("../../../assets/sendos-logo.png")}
        />
      </View>
      <LoginForm />
    </SafeAreaView>
  );
}
