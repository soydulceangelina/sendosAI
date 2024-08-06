import * as SecureStore from "expo-secure-store";

async function saveItem(key: string, value: string) {
  try {
    await SecureStore.setItemAsync(key, value);
  } catch (error) {
    console.error("Error guardando la sesión:", error);
  }
}

async function getItem(key: string) {
  try {
    const value = await SecureStore.getItemAsync(key);
    return value;
  } catch (error) {
    console.error("Error obteniendo la sesión:", error);
  }
}

async function deleteItem(key: string) {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.error("Error eliminando la sesión:", error);
  }
}

export { saveItem, getItem, deleteItem };
