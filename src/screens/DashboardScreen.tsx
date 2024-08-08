import { SafeAreaView, TouchableOpacity } from "react-native";
import { useEffect } from "react";
import Icons from "../components/Atoms/Icons";
import UserDashboard from "../components/Organisms/UserDashboard";

export default function DashboardScreen({ navigation }) {
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => {console.log('hola')}}>
          <Icons name="settings" size={30} color="#454545" />
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
