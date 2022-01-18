import styles from '../styles/Cards.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { IPokemon } from '../../types';

type Props = {
    pokemon: IPokemon;
}

const ListItem = ({ pokemon }: Props) => {

    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                <Image width={'100%'} height={'100%'} src={pokemon.sprites.other.dream_world.front_default} alt={`${pokemon.name} image`} />
            </div>
            <div className={styles.description}>
                <h2 className={styles.pokemonName}>{pokemon.name}</h2>

                <h5 className={styles.typesTitle}>TYPE</h5>
                <div className={styles.typesDiv}>
                    {pokemon.types[0] && <span>{pokemon.types[0].type.name}</span>}
                    {pokemon.types[1] && <span>{pokemon.types[1].type.name}</span>}
                </div>

                <Link href={{ pathname: '/detail', query: { object: JSON.stringify(pokemon) } }}>
                    <button>+ More</button>
                </Link>
            </div>
        </div>
    )
}

export default ListItem;
