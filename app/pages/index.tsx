import Head from 'next/head'
import Image from 'next/image'
import EventLog from '../components/event-log'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen py-8">
      <Head>
        <title>The Audit Log</title>
        <meta name="description" content="A searchable audit log powered by event streams" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="justify-self-start">
        <h1 className="text-6xl font-bold">The Audit Log</h1>
      </header>

      <main className="w-full px-12">
        <EventLog className="mt-12 w-full" />
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t mt-auto">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  )
}
