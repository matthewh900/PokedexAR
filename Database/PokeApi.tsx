import axios from "axios";

export function GetAllPokemon() {
    return axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0").then((res) => {
        return res
    })
}