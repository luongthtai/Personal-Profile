/* eslint-disable react-hooks/rules-of-hooks */
import Head from "next/head";
import { useRouter } from "next/router";

export default function userItem() {
    const id = useRouter();

    return (
        <>
            <Head>
                <title> {id.query.id}</title>
            </Head>

            <div>
                <p>id: {id.query.id}</p>
            </div>
        </>
    )
}
