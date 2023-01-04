import Head from 'next/head'
import React from 'react'
import NavBar from '../../components/NavBar/NavBar'

export default function user() {
  return (
    <>
      <Head>
        <title>Admin Page</title>
      </Head>

      <NavBar />
      <main>
        <h1>ADMIN</h1>
      </main>
    </>
  )
}
