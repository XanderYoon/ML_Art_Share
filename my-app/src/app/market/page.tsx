import { Image } from "@nextui-org/react"

async function getData() {
    const res = await fetch('')

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        //throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async function Page() {
    // const data = await getData();
    return (
        <div className="flex flex-col items-center justify-center pt-16" style={{ maxWidth: "100%", margin: "0 auto", marginTop: "-50px" }}>
            <h1 className="text-6xl font-bold text-white font-inter"> Find new art.</h1>

            <div className="flex flex-col lg:flex-row items-center gap-8 p-8">
                <Image width={900} alt="market" src="/market.png"/>
            </div>
        </div>
    )
}
