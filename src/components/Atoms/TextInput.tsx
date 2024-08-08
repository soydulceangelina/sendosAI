import React from "react";
import { View, TextInput, TextInputProps } from "react-native";
import Icons from "./Icons";
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
    <View className="relative">
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
      {showIcon && (
        <View className="absolute right-4 top-4 transform -translate-y-1/2">
          <Icons name={getIconName(type)} size={24} color="#6A6A6A" />
        </View>
      )}
    </View>
  );
};

export default CustomTextInput;
