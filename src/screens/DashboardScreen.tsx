import { SafeAreaView, TouchableOpacity } from "react-native";
import { useEffect } from "react";
import Entypo from "@expo/vector-icons/Entypo";
import UserDashboard from "../components/Organisms/UserDashboard";

export default function DashboardScreen({ navigation }) {
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => {console.log('hola')}}>
          <Entypo name="dots-three-horizontal" size={30} color="#454545" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);
  return (
    <SafeAreaView>
      <UserDashboard />
    </SafeAreaView>
  );
}
