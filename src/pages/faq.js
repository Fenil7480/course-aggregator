import Head from 'next/head'
import Faq from '../components/faq'
import Header from '../components/Header'
import Container from '../components/container'

export default function Details() {
    return (
    <>
        <Head>
            <title>Web 3.0 A New Chapter | FAQ</title>
            <meta name="description" content="FAQs about Web3" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header blue>
            <div className='py-12'>
                <h1>Frequently Asked Questions</h1>
                <p className='text-xl mb-8'>Learn more about Web3 with our FAQ section.</p>
            </div>
        </Header>
        <Container>
            <main className='max-w-3xl'>
                <section className='py-12'>
                    <p className='py-6'>Get quick answers to your Web3 questions.</p>
                    <Faq />
                </section>
            </main>
        </Container>
    </>
    )
}