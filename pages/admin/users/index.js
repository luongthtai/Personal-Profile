/* eslint-disable react-hooks/rules-of-hooks */
import Head from 'next/head';
import { useRouter } from 'next/router'
import React from 'react'

export default function user() {
    const router = useRouter();

    console.log(router)
    return (
        <>
            <Head>User</Head>
            <div>user: {router.asPath}</div>
        </>
    )
}
