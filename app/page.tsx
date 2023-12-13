import Image from 'next/image'

export default function Home() {
  return (
    <main className="h-screen flex lg:items-center md:items-center justify-center flex-col sm:items-start p-4">
      <Image src="/oso.png" alt='img' width={64} height={91} className='image-style' />
      <h1 className="mb-4 text-2xl tracking-normal leading-loose text-gray-1000 text-style font-bold">OSO is getting popular and currently at capacity.</h1>
      <p className="mb-6 text-base font-normal text-gray-500   dark:text-gray-400 text-style-min">You will receive an email when a spot opens up, or join OSO PRO to access it immediately.</p>
      <a href="#" className="inline-flex items-center justify-center px-4 py-3 text-sm font-medium text-center text-white bg-purple-600 rounded-lg">
        Join OSO Pro now for instant access
      </a>
    </main>
  )
}
