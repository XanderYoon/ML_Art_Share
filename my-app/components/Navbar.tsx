'use client'
import { useRouter } from 'next/navigation'

export default async function Header() {
    const router = useRouter()
    return (
        <div className="flex w-full px-4 lg:px-40 py-4 items-center border-b text-center justify-between">
            {/* Navigation buttons */}
            <div className="flex gap-4 items-center">
                <button type="button" onClick={() => router.push('/')} className="font-bold text-xl">pArt</button>
                <button type="button" onClick={() => router.push('/market')} className="font-bold text-lg">Marketplace</button>
                <button type="button" onClick={() => router.push('/model')} className="font-bold text-lg">Buy</button>
                <button type="button" onClick={() => router.push('/upload')} className="font-bold text-lg">Analyze</button>
            </div>

            {/* Search bar */}
            <div className="flex h-full items-center">
                <input
                    type="text"
                    placeholder="Search..."
                    disabled
                    className="placeholder:italic placeholder-text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-3 pr-9 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                />
            </div>
        </div>
    )
}
