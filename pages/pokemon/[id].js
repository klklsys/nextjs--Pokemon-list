import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Details.module.css";

// export async function getServerSideProps({params}){
//     const resp = await fetch (`https://jherr-pokemon.s3.us-west-1.amazonaws.com/pokemon/${params.id}.json`);
//     return{
//         props:{
//             pokemon:await resp.json(),
//         },
//     };
// // }
// export default function Details(){
//     // 定义路径
//     const {query:{ id }, } = useRouter();
// // 用useState更新数据，UseEffect抓取数据
//     const [pokemon, setPokemon] = useState(null);

//     useEffect(() => {
//         async function getPokemon(){
//             const resp = await fetch (`https://jherr-pokemon.s3.us-west-1.amazonaws.com/pokemon/${id}.json`);
//             setPokemon(await resp.json());
//         }
//         if(id){
//             getPokemon();
//         }
//     },[id]);
//     if(!pokemon){
//         return null;
//     }
//     return(
//     <div className={styles.container}><Head><titile>{pokemon.name}</titile></Head>
//     <div><Link href="/"><a>Back to Home</a></Link></div>
//     <div className={styles.layout}>
//         <div>
//             <img className={styles.picture}
//             src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokemon.image}`}
//             alt={pokemon.name.english} />
//         </div>
//         <div><p>{pokemon.name}</p></div>
//         <div>{JSON.stringify(pokemon)}</div>
//     </div>
//         </div>
//     )
// }

export default function Details() {
  const {
    query: { id },
  } = useRouter();
  const [pokemon, setPokemon] = useState(null);
  useEffect(() => {
    async function getPokemon() {
      const resp = await fetch(
        `https://jherr-pokemon.s3.us-west-1.amazonaws.com/pokemon/${id}.json`
      );
      setPokemon(await resp.json());
    }
    if (id) {
      getPokemon();
    }
  }, [id]);
  if (!pokemon) {
    return null;
  }

  return (
    <>
      <Head>
        <title>{pokemon.name}</title>
      </Head>
      <div>Hello! - I am {pokemon.name}</div>
      <Link href="/">
        <a className={styles.button}> See other Pokemons!</a>
      </Link>
      <div className={styles.layout}>
        <div>
          <img
            className={styles.picture}
            src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokemon.image}`}
            alt={pokemon.name.english}
          />
        </div>
        <div>
          <div className={styles.name}>{pokemon.name}</div>
          <div className={styles.type}>{pokemon.type.join(",")}</div>
          <table>
            <thead className={styles.header}>
              <tr>
                <th>Name</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {pokemon.stats.map(({ name, value }) => (
                <tr key={name}>
                  <td className={styles.attribute}>{name}</td>
                  <td className={styles.value}>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
