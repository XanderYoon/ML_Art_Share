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
        <div className="flex flex-col items-center pt-16">
                <h1 className="text-3xl">Browse the Market</h1>

                <div className="flex flex-col lg:flex-row items-center gap-8 p-8 max-w-6xl w-full">
                <h1>This is the market page!</h1>
                <h1>This is the market page!</h1>
                <h1>This is the market page!</h1>
                <h1>This is the market page!</h1>
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-8 p-8 max-w-6xl w-full">
                <h1>This is the market page!</h1>
                <h1>This is the market page!</h1>
                <h1>This is the market page!</h1>
                <h1>This is the market page!</h1>
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-8 p-8 max-w-6xl w-full">
                <h1>This is the market page!</h1>
                <h1>This is the market page!</h1>
                <h1>This is the market page!</h1>
                <h1>This is the market page!</h1>
                </div>
        </div>
    )
  }