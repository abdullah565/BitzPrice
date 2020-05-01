import React from 'react';
import Navbar from './Navbar';
import Head from 'next/head';

const layout = (props) => (
    <div>
        <Head>
            <meta name="description" content="This is the Bitzprice index page" />
            <title>BitzPrice | Index</title>
        </Head>
        <Navbar />
        <div className="body-content">
            {props.children}
        </div>

        <style>{`
            body,html{
                margin: 0;
                padding:0;
                box-sizing:border-box;
                font-family: monospace;
            }
            .body-content{
                max-width:1170px;
                margin:auto;
                padding:0 30px;
            }
        `}</style>
    </div>
);

export default layout;