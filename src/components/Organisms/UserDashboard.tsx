import { View, Text } from "react-native";
import Button from "../Atoms/Button";
import SearchInput from "../Atoms/SearchInput";

export default function UserDashboard() {
  return (
    <View className="p-8 w-full">
      <SearchInput />
      <Text>UserDashboard</Text>
      <Button title="Crear brecha" onPress={() => {}} isValid={true} />
    </View>
  );
}
