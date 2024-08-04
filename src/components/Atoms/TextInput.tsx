import React from "react";
import { View, TextInput, TextInputProps, Text } from "react-native";
// import Icon from "react-native-vector-icons";
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
    <View className="relative mb-4">
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
      {/* {showIcon && (
        <Icon
          name={getIconName(type)}
          size={20}
          color="gray"
          style={{
            position: "absolute",
            right: 10,
            top: "50%",
            transform: [{ translateY: -10 }],
          }}
        />
      )} */}
    </View>
  );
};

export default CustomTextInput;
