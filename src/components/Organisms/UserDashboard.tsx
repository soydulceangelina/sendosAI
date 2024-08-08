import { View, Image, Text } from "react-native";
import Button from "../Atoms/Button";
import SearchInput from "../Atoms/SearchInput";
import { user } from "../../utils/userDB";

export default function UserDashboard() {
  return (
    <View className="p-8 w-full flex items-center">
      <View className="w-full flex flex-row items-center justify-between mb-6">
        <View>
          <Text className="font-bold text-xl text-gray-300">
            Hola {user.firstName}
          </Text>
          <Text className="font-bold text-base text-gray-100">
            Vas a llegar lejos
          </Text>
        </View>
        <View>
          <Text className="font-bold text-right text-main text-xl">
            {user.currentJob}
          </Text>
          <Text className="font-bold text-right text-base text-gray-100">
            Puesto
          </Text>
        </View>
      </View>
      <SearchInput />
      <View className="">
        <Image
          className="h-80 w-80 my-20"
          source={require("../../../assets/brecha.png")}
        />
      </View>
      <Button title="Crear brecha" onPress={() => {}} isValid={true} />
    </View>
  );
}
