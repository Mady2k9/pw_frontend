import { useQuery } from 'react-query';

// Define the shape of the return type from the `useChacheDemo` hook.
interface ReturnType {
  pokemon: any; // Contains the Pokemon data if the fetch is successful.
  isLoading: boolean; // Indicates if the data is currently being fetched.
  error: unknown; // Contains error information if the fetch fails.
}

/**
 * Fetch a specific Pokemon's details from the PokeAPI.
 *
 * @param pokemon - The name of the Pokemon to fetch.
 * @returns Promise containing the Pokemon details.
 */
const fetchPokemon = async (pokemon: string) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then((res) =>
    res.json()
  );
};

/**
 * Custom hook that fetches a Pokemon's details and utilizes caching via react-query.
 *
 * This hook fetches the details of a hardcoded 'bulbasaur' Pokemon, and makes use of
 * react-query's caching capabilities. The data, once fetched, will be considered
 * "stale" after 5000 milliseconds (5 seconds), prompting a refetch if the hook is used
 * after this duration.
 *
 * @returns An object containing the Pokemon data, loading status, and any error encountered.
 */
const useChacheDemo = (): ReturnType => {
  const pokemonName = 'bulbasaur'; // Hardcoded Pokemon name for the demo.

  // Use react-query's `useQuery` hook to fetch and cache Pokemon data.
  const {
    isLoading, // Boolean indicating if the fetch operation is in progress.
    error, // Contains error information if the fetch operation fails.
    data: pokemon, // Contains the fetched Pokemon data on successful fetch.
  } = useQuery(
    `fetch-${pokemonName}`, // Unique key for caching this query.
    () => fetchPokemon(pokemonName), // Function to fetch the Pokemon data.
    {
      staleTime: 5000, // Time (in ms) until the data becomes "stale" and requires a refetch.
    }
  );

  // Return the Pokemon data, loading status, and error information.
  return {
    error,
    isLoading,
    pokemon,
  };
};

export default useChacheDemo; // Export the custom hook for use in other components.
