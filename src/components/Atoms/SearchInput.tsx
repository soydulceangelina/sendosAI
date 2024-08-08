import React, { useState } from "react";
import {
  View,
  TextInput,
  FlatList,
  Text,
  TouchableHighlight,
} from "react-native";
import Icons from "./Icons";
import { jobs } from "../../utils/jobsDB";

export default function SearchInput() {
  const [query, setQuery] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(jobs);
  const [showDropdown, setShowDropdown] = useState(false);
  const [btnColor, setBtnColor] = useState("#B6B6B6");

  const handleSelect = (item: string) => {
    setQuery(item);
    setShowDropdown(false);
  };

  const filterOptions = (text: string) => {
    const newData = jobs.filter((item) =>
      item.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredOptions(newData);
    setQuery(text);
    setShowDropdown(true);
  };
  return (
    <View className="relative w-full">
      <TextInput
        value={query}
        onChangeText={filterOptions}
        placeholder={"Buscar"}
        onFocus={() => setShowDropdown(true)}
        className="border border-gray-100 py-4 pl-4 pr-10 rounded-xl bg-white"
      />
      {showDropdown && (
        <FlatList
          data={filteredOptions}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableHighlight
              underlayColor="#6078B8"
              onPressIn={() => setBtnColor("#ffffff")}
              onPressOut={() => setBtnColor("#B6B6B6")}
              className=""
              onPress={() => handleSelect(item)}
            >
              <Text style={{color: btnColor}} className="p-2 text-base">{item}</Text>
            </TouchableHighlight>
          )}
          className="absolute border border-gray-100 rounded-xl top-14 left-0 right-0 bg-gray-50"
        />
      )}
      <View className="absolute right-4 top-4 transform -translate-y-1/2">
        <Icons name="search" size={24} color="#6A6A6A" />
      </View>
    </View>
  );
}
