import Head from 'next/head'
import Faq from '../components/faq'

export default function Details() {
    return (
    <div>
        <Head>
            <title>Web3suggest | Details</title>
            <meta name="description" content="Details page of course." />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <header className='bg-blue-800 text-white-100 container mx-auto px-8 lg:px-16'>
            <div className='py-12'>
                <h1>Course Title</h1>
                <p>Rating | Author</p>
                <p className='text-xl'>Price</p>
                <br></br>
                <a className='bg-blue-400 font-bold px-16 py-4 my-6' href='/'>View Course</a>
            </div>
        </header>
        <div className='flex flex-1 flex-col-reverse md:flex-row container mx-auto px-8 lg:px-16'>
            <main className='max-w-3xl'>
                <section className='pt-12'>
                    <h2>Description</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et congue velit, ac placerat velit. Suspendisse tristique dui at nunc pellentesque iaculis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed bibendum rhoncus nibh vel sollicitudin. Cras finibus accumsan urna, et ultricies massa scelerisque a. Donec eget lectus tristique sem rhoncus egestas. Donec auctor augue pretium turpis varius sodales. Etiam sollicitudin ipsum nec lacus consequat, nec lacinia dolor sagittis. Nulla et interdum risus. Proin facilisis ante nec odio sollicitudin placerat.</p>
                    <br></br>
                    <a className='bg-blue-400 font-bold px-16 py-4 my-6 text-white-100' href='/'>View Course</a>
                </section>
                <section className='py-12'>
                    <h2>Frequently Asked Questions</h2>
                    <Faq />
                </section>
            </main>
            <aside className='max-w-xl'>
                <div className='pt-12'>
                    <h3>Categories</h3>
                    <ul className='flex gap-1'>
                        <li className='px-4 py-2 bg-blue-300 rounded-full text-center'>Blockchain</li>
                        <li className='px-4 py-2 bg-blue-300 rounded-full text-center'>Blockchain</li>
                        <li className='px-4 py-2 bg-blue-300 rounded-full text-center'>Blockchain</li>
                    </ul>
                </div>
            </aside>
        </div>
    </div>
    )
}
