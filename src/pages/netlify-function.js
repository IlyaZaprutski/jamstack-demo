import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';

import Bio from '../components/bio';
import Layout from '../components/layout';
import SEO from '../components/seo';

class Pokemon {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.sprite = data.sprites.front_default;
        this.type = data.types[0].type.name;
    }
}

const NetlifyFunction = ({ location, data }) => {
    const siteTitle = data.site.siteMetadata.title;

    const [pokemon, setData] = useState(null);
    const [typedPokemonId, setPokemonId] = useState(1);
    const [searchId, setSearch] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            setIsError(false);

            try {
                const response = await fetch(`/.netlify/functions/pokemon?id=${searchId}`);
                const json = await response.json();

                setData(new Pokemon(json));
            } catch (error) {
                setIsError(true);
            }

            setIsLoading(false);
        };

        fetchData();
    }, [searchId]);

    return (
        <Layout location={location} title={siteTitle}>
            <SEO title="All posts" keywords={['blog', 'gatsby', 'javascript', 'react']} />
            <Bio />

            <input
                type="number"
                value={typedPokemonId}
                min="1"
                step="1"
                onChange={event => setPokemonId(event.target.value)}
            />
            <button type="button" onClick={() => setSearch(typedPokemonId)}>
                Search
            </button>

            {isError && <div>Something went wrong ...</div>}

            {isLoading && <div>Loading ...</div>}

            {!isLoading && pokemon && (
                <React.Fragment>
                    <h1>
                        ID:
                        {' '}
                        {pokemon.id}
                        {' '}
                        {pokemon.name}
                    </h1>
                    <p>
                        Type:
                        {pokemon.type}
                    </p>
                    <img src={pokemon.sprite} alt="sprite" />
                </React.Fragment>
            )}
        </Layout>
    );
};

export default NetlifyFunction;

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`;
