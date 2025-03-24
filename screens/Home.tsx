import { FlatList, SafeAreaView, ActivityIndicator } from "react-native";
import { useEffect, useState } from "react";
import { GetAllPokemon, GetNext } from "@/Database/PokeApi";
import { PokemonCard } from "@/components/PokemonCard";
import styles from "@/app/styles";

interface Pokemon {
  name: string,
  url: string
}

export function Home() {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const [next, setNext] = useState<string>()
  const [isLoadingMore, setIsLoadingMore] = useState(false)

  useEffect(() => {
    GetAllPokemon().then((res) => {
      setPokemon(res.data.results);
      setNext(res.data.next)
    });
  }, []);

  const loadMore = () => {
    if (isLoadingMore) return
    if (next){
      setIsLoadingMore(true)
      GetNext(next).then((res) => {
        setPokemon(prevPokemon => ([...prevPokemon, ...res.data.results]));
        setNext(res.data.next)
        setIsLoadingMore(false)
      })
    }
  }

  return (
    <SafeAreaView style={styles.IndexView}>
      <FlatList
        data={pokemon}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => <PokemonCard url={item.url} name={item.name}/>}
        onEndReached={loadMore}
        ListFooterComponent={() => isLoadingMore ? <ActivityIndicator/> : null}
      />
    </SafeAreaView>
  );
}