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

        <div>
            <Image width={600} alt="graph of data" src="/vermeergraph.png"/>
            <h1>This is the model demo page!</h1>
        </div>
    
    )
  }