import Card from './components/Card';
import { useCounter } from './useCounter';
import { useFetch } from './useFetch';

export const CustomHook = () => {
    const { counter, decrement, increment } = useCounter(1);
    const { data, hasError, isLoading } = useFetch(
        `https://pokeapi.co/api/v2/pokemon/${counter}`
    );

    return (
        <div>
            <h1>API de Pokémon</h1>
            <hr />

            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <Card
                    id={counter}
                    name={data?.name}
                    sprites={[
                        data.sprites.front_default,
                        data.sprites.front_shiny,
                        data.sprites.back_default,
                        data.sprites.back_shiny,
                    ]}
                />
            )}

            <button className="btn btn-primary" onClick={() => decrement()}>
                Anterior
            </button>
            <button className="btn btn-primary" onClick={() => increment()}>
                Siguiente
            </button>
        </div>
    );
};
