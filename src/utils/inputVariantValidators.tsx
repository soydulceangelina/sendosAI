import { KeyboardTypeOptions } from "react-native";

// Set up variants based on input type
const getKeyboardType = (type: string): KeyboardTypeOptions => {
  switch (type) {
    case "email":
      return "email-address";
    default:
      return "default";
  }
};

const getSecureTextEntry = (type: string): boolean => {
  return type === "password";
};

const getPlaceholder = (type: string): string => {
  switch (type) {
    case "email":
      return "Correo electrónico";
    case "password":
      return "••••••••";
    case "username":
      return "Username";
    default:
      return "";
  }
};

const getIconName = (type: string): string => {
  switch (type) {
    case "email":
      return "user";
    case "password":
      return "lock";
    case "username":
      return "user";
    default:
      return "";
  }
};

export {
  getIconName,
  getKeyboardType,
  getPlaceholder,
  getSecureTextEntry,
};
