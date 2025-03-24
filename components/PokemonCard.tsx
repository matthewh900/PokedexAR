import styles from "@/app/styles";
import { GetPokemonData } from "@/Database/PokeApi";
import { useEffect, useState } from "react";
import { ActivityIndicator, Image, Text, View } from "react-native";
import { useQuery } from "@tanstack/react-query";

interface PokemonCardProps {
  url: string;
  name: string;
}

interface Pokemon {
  name: string;
  order: number;
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
  types: {
    slot: number;
    type: {
      name: string;
    };
  };
}

export function PokemonCard({ url, name }: PokemonCardProps) {
    const {isLoading, error, data} = useQuery<Pokemon>({ queryKey: ['pokemon', name], queryFn: () => GetPokemonData({url})})

  if (!data || error) return null;
  if (isLoading) return <ActivityIndicator/>

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: data.sprites.other["official-artwork"].front_default,
        }}
        style={styles.image}
      />
      <Text style={styles.name}>{data.name}</Text>
    </View>
  );
}
