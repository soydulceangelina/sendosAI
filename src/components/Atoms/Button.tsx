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
      className={`py-5 rounded-xl ${isValid ? "bg-main" : "bg-gray-100"}`}
      disabled={!isValid}
      onPress={onPress}
    >
      <Text className="text-white text-center">{title}</Text>
    </TouchableOpacity>
  );
}
