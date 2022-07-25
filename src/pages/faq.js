import Head from 'next/head'
import Faq from '../components/faq'
import Header from '../components/Header'

export default function Details() {
    return (
    <>
        <Head>
            <title>Web 3.0 A New Chapter | FAQ</title>
            <meta name="description" content="FAQs about Web3" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header>
            <div className='py-12'>
                <h1>Frequently Asked Questions</h1>
            </div>
        </Header>
        <div className='container mx-auto px-8 lg:px-16'>
            <main className='max-w-3xl'>
                <section className='py-12'>
                    <p className='py-6'>Get quick answers to your Web3 questions.</p>
                    <Faq />
                </section>
            </main>
        </div>
    </>
    )
}