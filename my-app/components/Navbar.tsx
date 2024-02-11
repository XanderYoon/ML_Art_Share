'use client'

import { useRouter } from 'next/navigation'

export default async function() {
    const router = useRouter()
    return(
        <div className="flex w-full px-4 lg:px-40 py-4 items-center border-b text-center gap-8 justify-between">
            <div className="flex gap-2 h-full">
                <button type="button" onClick={() => router.push('/')}>Market</button>
            </div>

            <div className="flex gap-2 h-full">
                <button type="button" onClick={() => router.push('/model')}>Analysis</button>
            </div>

            <div className="flex gap-2 h-full">
                <button type="button" onClick={() => router.push('/upload')}>Upload</button>
            </div>
        </div>
    )
}