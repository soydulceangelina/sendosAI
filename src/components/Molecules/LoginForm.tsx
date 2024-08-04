import { useState, useEffect } from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import Button from "../Atoms/Button";
import CustomTextInput from "../Atoms/TextInput";
import { emailValidator } from "../../utils/emailValidator";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isFormValid, setIsFormValid] = useState(false);

  //Validate that the form fields are correctly filled out and ready for submission
  useEffect(() => {
    const isPasswordValid = password.length > 3;
    setIsFormValid(emailValidator(email) && isPasswordValid);
  }, [email, password]);

  //Check that a valid email address is entered.
  const handleEmailChange = (text: string) => {
    setEmail(text);
    setIsValidEmail(emailValidator(text));
  };

  return (
    <View className="p-8">
      <View className="mb-5">
        <CustomTextInput
          type="email"
          showIcon={true}
          onChangeValue={handleEmailChange}
          value={email}
          autoCapitalize="none"
        />
        {!isValidEmail && email.length > 3 && (
          <Text className="text-red text-xs mt-1">
            Correo electrónico no válido
          </Text>
        )}
      </View>
      <View className="mb-5">
        <CustomTextInput
          type="password"
          showIcon={true}
          onChangeValue={setPassword}
          value={password}
        />
      </View>
      <Button
        title="Inicia sesión"
        onPress={() => {
          console.log("Holanda yolanda");
        }}
        isValid={isFormValid}
      />
    </View>
  );
}
