import { getPageData } from '../lib/page';
import Head from 'next/head'
import Form from '../components/form'
import styles from '../styles/Home.module.css'
import React from 'react'
import Link from 'next/link'
import parse from 'html-react-parser';

export async function getServerSideProps() {
    const pageData = await getPageData();
    return {
        props: {
            pageData,
            isWide: false
        }
    }
}

const Solution = (props: { pageData: any, isWide: boolean }) => {
    const data = props.pageData
    return (
        <>
            <Head>
                <title>Придумаем</title>
                <meta name="description" content="Придумаем что-то там" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header><h1><Link href="/">Придумаем</Link></h1></header>
            <main>
                <div className={styles.container}>
                    <div className={styles.content}>
                        {parse(data.content)}
                        <Form />
                    </div>
                </div>
            </main>
        <footer></footer>
    </>
    )
}
export default Solution;
