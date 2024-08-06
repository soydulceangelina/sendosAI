import React, { useState } from "react";
import {
  View,
  TextInput,
  FlatList,
  Text,
  TouchableOpacity,
} from "react-native";
import { jobs } from "../../utils/jobsDB";

export default function SearchInput() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredJobs, setFilteredJobs] = useState(jobs);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const filtered = jobs.filter((job) =>
      job.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredJobs(filtered);
  };
  return (
    <View>
      <TextInput
        placeholder="Buscar el puesto deseado"
        value={searchQuery}
        onChangeText={handleSearch}
        className="p-4 border border-gray-100 rounded-xl bg-white"
      />
      <FlatList
        data={filteredJobs}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => alert(`Seleccionaste: ${item}`)}>
            <Text style={{ padding: 10, borderBottomWidth: 1 }}>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
