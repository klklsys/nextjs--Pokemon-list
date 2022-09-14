import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image';
import styles from '../styles/Home.module.css'

// get data from serverSide 

// export async function getServerSideProps(){
//   const resp = await fetch('https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json');
//   return{
//     props:{
//       pokemon:await resp.json(),
//     }
//   }
// }



// export default function Home({pokemon}) {
//   // const [pokemon, setPokemon] = useState([]);
//   // useEffect(() => {
//   //   async function getPokemon() {
//   //     const resp = await fetch('https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json');
//   //     setPokemon(await resp.json());
//   //   }
//   //   getPokemon();
//   // }, []);
//   return (
//     <>
//       <Head>
//         <title>Pokemon List Test</title>
//       </Head>
//       <div className={styles.grid}>
//         {pokemon.map((pokemon) => (
//           <div className={styles.card} key={pokemon.id}>
//             <Link href={`/pokemon/${pokemon.id}`}>
//               <a>
//                 <img
//                   src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokemon.image}`}
//                   alt={pokemon.name}
//                   className={styles.card_image}
//                 />
//                 <h3 className={styles.title}>{pokemon.name}</h3>
//               </a>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </>
//   )
// }



export default function Home () {
  const[pokemon, setPokemon]= useState([]);
  useEffect(()=>{
    async function getPokemon (){
      const resp = await fetch ('https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json');
      setPokemon(await resp.json());
    }
    getPokemon();
  },[])
  return(
    <>
    <Head>Pokemon Grid</Head>
    <div className={styles.grid}>
      {pokemon.map((pokemon)=>(
        <div className={styles.card} key={pokemon.id}>
          <Link href={`/pokemon/${pokemon.id}`} >
            <a>
              <img src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokemon.image}`}
              alt={pokemon.name}
           className={styles.card_image}/>
            <h3 className={styles.title}>{pokemon.name}</h3>


            </a>
        </Link>
      
        </div>
      ))}

    </div>
    </>
  )


}