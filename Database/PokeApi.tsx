import axios from "axios";

interface props {
    url: string;
}

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

export function GetPokemonData({url}: props) {
    return axios.get(url).then((res) => {
        return res
    })
}