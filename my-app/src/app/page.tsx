'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  
  return (
    

    <div>
      This is the landing page!
      <Link href="model">Model</Link>
      <Link href="upload">Upload</Link>

      <button type="button" onClick={() => router.push('/model')}>
      Model Button
      </button>
    </div>
  );
}
