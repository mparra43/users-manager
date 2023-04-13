import Head from 'next/head'
import { Dashboard } from '../features/transversal/components'





export default function Home() {

  const authenticatedUser = {url:'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',  firstName:'Leonardo', lastName:'Cortes'}

  return (
    <>
      <Head>
        <title>Gestor de usuarios</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <Dashboard authenticatedUser={authenticatedUser}/>
      </main>
    </>
  )
}
