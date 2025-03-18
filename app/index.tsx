import { Text, View } from "react-native";
import styles from "./styles";
import { useEffect, useState } from "react";
import { GetAllPokemon } from "@/Database/PokeApi";

export default function Index() {
  const [pokemon, setPokemon] = useState()

  useEffect(() => {
    GetAllPokemon().then((res) => {
      setPokemon(res)
    })
  }, [])

  return (
    <View
      style={styles.IndexView}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
