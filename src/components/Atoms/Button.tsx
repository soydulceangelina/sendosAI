import { TouchableOpacity, Text } from "react-native";
import React from "react";

export default function Button({
  title,
  onPress,
  isValid,
}: {
  title: string;
  onPress: () => void;
  isValid: boolean;
}) {
  return (
    <TouchableOpacity
      className={`py-4 rounded-xl ${isValid ? "bg-main" : "bg-gray-100"}`}
      disabled={!isValid}
      onPress={onPress}
    >
      <Text className="text-white text-center font-bold text-xl tracking-widest">{title}</Text>
    </TouchableOpacity>
  );
}
