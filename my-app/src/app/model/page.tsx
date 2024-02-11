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
        <div className="flex flex-col items-center">
            <h1 className="text-3xl"> View historical and projected value </h1>

            <div className="flex flex-col items-center pt-16">
            <Image width={600} alt="graph of data" src="/vermeergraph.png"/>
            </div>

            <div className="flex flex-col items-center pt-16">
            <Image width={500} alt="pearlgirl" src="/pearlgirl.png"/>
            </div>
        </div>
    )
  }