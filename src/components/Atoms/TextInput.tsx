import React from "react";
import { View, TextInput, TextInputProps } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  getSecureTextEntry,
  getPlaceholder,
  getKeyboardType,
  getIconName,
} from "../../utils/inputVariantValidators";

interface CustomTextInputProps extends TextInputProps {
  type: "email" | "password" | "username" | "text";
  showIcon?: boolean;
  onChangeValue: (string: string) => void;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  type,
  showIcon,
  onChangeValue,
  ...props
}) => {
  return (
    <View>
      <TextInput
        className={`border border-gray-100 py-5 pl-5 rounded-xl bg-white ${
          showIcon ? "pr-10" : "pr-5"
        }`}
        placeholder={getPlaceholder(type)}
        keyboardType={getKeyboardType(type)}
        secureTextEntry={getSecureTextEntry(type)}
        onChangeText={onChangeValue}
        {...props}
      />
      {/* {showIcon && <Ionicons name="map" size={20} color="#6A6A6A" />} */}
    </View>
  );
};

export default CustomTextInput;
