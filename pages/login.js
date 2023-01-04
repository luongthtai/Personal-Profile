import Head from "next/head";
import NavBar from "../components/NavBar/NavBar";
import css from "../styles/scss/login.module.scss";

export default function login() {
    return (
        <>
            <Head>
                <title>Login Page</title>
            </Head>

            <NavBar />
            <main id={css.login}>
                <form>
                    <h1>login page</h1>
                    <div>
                        <label>Email adsress</label>
                        <input type="text" placeholder="Enter your Email" required />
                    </div>

                    <div>
                        <label>Password</label>
                        <input type="password" placeholder="Enter your  Password" />
                    </div>
                </form>
            </main>
        </>
    );
}
