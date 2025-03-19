import { Text, View } from "react-native";
import styles from "./styles";
import { useEffect, useState } from "react";
import { GetAllPokemon } from "@/Database/PokeApi";
import { PokemonCard } from "@/components/PokemonCard";

export default function Index() {
  const [pokemon, setPokemon] = useState<object>({})

  useEffect(() => {
    GetAllPokemon().then((res) => {
      setPokemon(res.data.results[0])
    })
  }, [])

  return (
    <View
      style={styles.IndexView}
    >
      <PokemonCard pokemon={pokemon}/>
    </View>
  );
}
