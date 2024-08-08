import { View, Image, Text } from "react-native";
import { useState } from "react";
import useSelectedOptions from "../../hooks/useSelectedOptions";
import Button from "../Atoms/Button";
import SearchInput from "../Atoms/SearchInput";
import { user } from "../../utils/userDB";
import JobPath from "../Molecules/JobPath";

export default function UserDashboard() {
  const [query, setQuery] = useState("");
  const [path, setPath] = useState(undefined);

  const generatePath = () => {
    setPath(useSelectedOptions(query));
  };

  return (
    <View className="p-8 h-screen bg-white w-full flex items-center relative">
      <View className="w-full flex flex-row items-center justify-between mb-6">
        <View>
          <Text className="font-bold text-xl text-gray-300">
            Hola {user.firstName}
          </Text>
          <Text className="font-bold text-base text-gray-100">
            Vas a llegar lejos
          </Text>
        </View>
        <View>
          <Text className="font-bold text-right text-main text-xl">
            {user.currentJob}
          </Text>
          <Text className="font-bold text-right text-base text-gray-100">
            Puesto
          </Text>
        </View>
      </View>
      <View className="z-50 w-full">
        <SearchInput query={query} setQuery={setQuery} />
      </View>
      <View className="z-0">
        {path ? (
          <JobPath jobPath={path}/>
        ) : (
          <Image
            className="h-100 w-100 my-20"
            source={require("../../../assets/brecha.png")}
          />
        )}
      </View>
      <View className="w-full absolute bottom-40 transform -translate-y-1/2">
        <Button
          title="Crear brecha"
          onPress={() => generatePath()}
          isValid={true}
        />
      </View>
    </View>
  );
}
