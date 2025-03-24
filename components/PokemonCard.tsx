import styles from "@/app/styles";
import { GetPokemonData } from "@/Database/PokeApi";
import { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";

interface PokemonCardProps {
    url: string;
}

interface Pokemon {
    name: string;
    order: number;
    sprites: {
        other: {
            'official-artwork': {
                front_default: string;
            }
        }
    }
    types: {
        slot: number;
        type: {
            name: string;
        }
    }
}

export function PokemonCard({url} : PokemonCardProps){
    const [pokemon, setPokemon] = useState<Pokemon>()

    useEffect(() => {
        GetPokemonData({url}).then((res) => {
            setPokemon(res.data)
        })
    }, [url])

    if (!pokemon) return null

    return (
        <View style={styles.container}>
            <Image
                source={{
                    uri: pokemon.sprites.other['official-artwork'].front_default
                }}
                style={styles.image}
            />
            <Text style={styles.name}>{pokemon.name}</Text>
        </View>
    )
}