import { View } from "react-native";
import React from "react";
import LoginForm from "../components/Molecules/LoginForm";
import UserDashboard from "../components/Organisms/UserDashboard";

export default function HomeScreen() {
  const auth = null;
  return <View>{auth ? <UserDashboard /> : <LoginForm />}</View>;
}
