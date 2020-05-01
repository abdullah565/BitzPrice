import React from 'react';
import Layout from '../components/Layout';
import Head from 'next/head';

const about = () => (
    <Layout>
        <Head>
            <meta name="description" content="This is the Bitzprice about page" />
            <title>BitzPrice | About</title>
        </Head>
        <div>
            <h1>About BitzPrice</h1>
            <p>Application to view Bitcoin Prices.</p>
        </div>
    </Layout>
);

export default about;