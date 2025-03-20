import axios from "axios";

export function GetAllPokemon() {
    return axios.get("https://pokeapi.co/api/v2/pokemon").then((res) => {
        return res
    })
}

export function GetNext(next: string) {
    return axios.get(next).then((res) => {
        return res
    })
}

export function GetPokemonData() {
    return axios.get("https://pokeapi.co/api/v2/pokemon/1").then((res) => {
        return res
    })
}