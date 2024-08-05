import { View } from "react-native";
import React from "react";
import LoginForm from "../components/Molecules/LoginForm";
import UserDashboard from "../components/Organisms/UserDashboard";
import useAuth from "../hooks/useAuth";

export default function HomeScreen() {
  const { auth } = useAuth();
  return <View>{auth ? <UserDashboard /> : <LoginForm />}</View>;
}
