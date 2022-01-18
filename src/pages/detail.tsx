import { useEffect, useState } from 'react'
import styles from '../styles/Detail.module.css'
import stylesCards from '../styles/Cards.module.css'
import { withRouter } from 'next/router'
import { IPokemon } from '../../types'
import Image from 'next/image'
import Link from 'next/link'

const Detail = ({ router: { query } }: any) => {
    const [pokemon, setPokemon] = useState<IPokemon>()

    useEffect(() => {
        const object = JSON.parse(query.object);
        if (object) setPokemon(object)
    }, []);

    if (pokemon === undefined || !pokemon.name) return null;

    return (
        <div className={styles.main}>
            <Link href={{ pathname: '/' }}>
                <button>Back</button>
            </Link>
            <h1 className={styles.title}>{pokemon.name}</h1>
            <div className={styles.container}>
                <div className={styles.item}>
                    <div className={styles.imageContainer}>
                        <Image width={'100%'} height={'100%'} src={pokemon.sprites.other.dream_world.front_default} alt={`${pokemon.name} image`} />
                    </div>
                    <div style={{ flexDirection: 'row', display: 'flex' }}>
                        <div className={styles.descriptionItem}>
                            <p className={styles.descriptionTitle}>Weight: {pokemon.weight}</p>
                        </div>
                        <div className={styles.descriptionItem}>
                            <p className={styles.descriptionTitle}>Height: {pokemon.height}</p>
                        </div>
                    </div>

                </div>
                <div className={styles.item}>
                    <h5 className={stylesCards.typesTitle}>TYPE</h5>
                    <div className={stylesCards.typesDiv}>
                        {pokemon.types[0] && <span>{pokemon.types[0].type.name}</span>}
                        {pokemon.types[1] && <span>{pokemon.types[1].type.name}</span>}
                    </div>
                    <h5 className={stylesCards.abilitiesTitle}>ABILITIES</h5>
                    <div className={stylesCards.abilitiesDiv}>
                        {pokemon.abilities[0] && <span>{pokemon.abilities[0].ability.name}</span>}
                        {pokemon.abilities[1] && <span>{pokemon.abilities[1].ability.name}</span>}
                    </div>
                </div>
                <div className={styles.item}>
                    {pokemon.stats.map((stat: any) => {
                        return (
                            <div className={styles.stat}>
                                <p>{stat.stat.name.toUpperCase()}</p>
                                <p className={styles.baseStat}>{stat.base_stat}</p>
                            </div>)
                    })}
                </div>

                <div className={styles.item}>
                    <h5 className={stylesCards.typesTitle}>MOVES</h5>
                    {pokemon.moves.map((move: any) => {
                        return (
                            <div className={styles.move}>
                                <p>{move.move.name.toUpperCase()}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>

    );
}

export default withRouter(Detail);