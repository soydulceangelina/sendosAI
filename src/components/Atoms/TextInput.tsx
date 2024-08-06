import React from "react";
import { View, TextInput, TextInputProps } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
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
        className={`border border-gray-100 py-4 pl-4 rounded-xl bg-white ${
          showIcon ? "pr-10" : "pr-4"
        }`}
        placeholder={getPlaceholder(type)}
        keyboardType={getKeyboardType(type)}
        secureTextEntry={getSecureTextEntry(type)}
        onChangeText={onChangeValue}
        {...props}
      />
      {showIcon && <FontAwesome name={getIconName(type)} size={20} color="#6A6A6A" />}
    </View>
  );
};

export default CustomTextInput;
