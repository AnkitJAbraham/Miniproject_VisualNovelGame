import Image from 'next/image'
import { Inter } from 'next/font/google'
import ContainerBlock from '../components/ContainerBlock.js'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <ContainerBlock />
    </main>
  )
}
