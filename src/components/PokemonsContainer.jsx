import { useQuery } from "@apollo/client";
import Pokemon from "./Pokemon";
import { GET_POKEMONS } from "../graphql/get-pokemons";

export default function PokemonsContainer() {
  const { data, loading, error } = useQuery(GET_POKEMONS, {
    variables: {
      first: 5,
    },
  });

  if (loading) return <h1>LOADING...!</h1>;

  if (error) return <p>ERROR: {error.message}</p>;

  const pokemons = data?.pokemons || [];

  return (
    <div className="container">
      {pokemons &&
        pokemons.map((pokemon) => {
          return <Pokemon pokemon={pokemon} key={pokemon.id} />;
        })}
    </div>
  );
}
