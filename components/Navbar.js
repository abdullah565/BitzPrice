import React from 'react';
import Link from 'next/link';

const navbar = () => (
    <div className="navbar">
        <Link href="/"><a className="logo">BitzPrice</a></Link>
        <ul>
            <li><Link href="/"><a>Home</a></Link></li>
            <li><Link href="/about"><a>About</a></Link></li>
        </ul>
        <style jsx>{`
            .navbar {
                background: #333;
                color: #fff;
                display:flex;                
                justify-content: space-between;
            }

            ul{
                list-style:none;
                margin:0;
            }
            
            li{
                display: inline;
            }

            ul li a, .logo{
                color: #ffffff;
                text-decoration: none;
                font-size: 1.3em;
                font-family: monospace;
                display: inline-block;
                height: 70px;
                line-height:4;
                transition:0.3s all;
                padding:0 30px;
            }
            ul li a:hover{
                background:#555;
            }
        `}</style>
    </div>
);

export default navbar;