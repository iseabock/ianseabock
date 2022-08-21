import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import homeStyles from '../styles/Home.module.css';
import Link from 'next/link';

const name = 'ian test seabock';
export const siteTitle = 'Web Duhveloper';

export default function Layout({ children, home }) {
    return (
        <Container fluid className={homeStyles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="Ian Seabock Personal Site" />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <header className={styles.header}>
                {home ? (
                    <>
                        <h1 className={utilStyles.heading2Xl}>{name}</h1>
                    </>
                ) : (
                    <>
                        <h2 className={utilStyles.headingLg}>
                            <Link href="/" passHref>
                                <a>{name}</a>
                            </Link>
                        </h2>
                    </>
                )}
            </header>
            <main>
                <Row>
                    <Col>{children}</Col>
                </Row>
            </main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">
                        <a>← Back to home</a>
                    </Link>
                </div>
            )}
            <a
                href="https://www.linkedin.com/in/seabock/"
                className={homeStyles.linkdinLink}
                rel="noreferrer"
                target="_blank">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
            </a>
        </Container>
    );
}

Layout.propTypes = {
    children: PropTypes.array,
    home: PropTypes.bool
};
