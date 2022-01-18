import React from 'react';
import styles from '../styles/Cards.module.css'
import ListItem from './ListItem'
import { IPokemon } from '../../types'

type Props = {
    pokemons: IPokemon[];
}

const PokemonList = ({ pokemons }: Props) => {
    return (
        <main className={styles.cards}>
            {pokemons.map((pokemon: any, index: number) => {
                return <ListItem key={index} pokemon={pokemon} />
            })}
        </main>
    )
}

export default PokemonList;