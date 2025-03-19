import { GetPokemonData } from "@/Database/PokeApi";
import { useEffect, useState } from "react";
import { Image, Text } from "react-native";

export function PokemonCard({pokemon}) {
    const [pokemonData, setPokemonData] = useState<object>({})

    useEffect(() => {
        GetPokemonData().then((res) => {
            setPokemonData(res.data)
        })
    }, [])

    return (
        <>
        <Text>{pokemon.name}</Text>
        </>
    )
}