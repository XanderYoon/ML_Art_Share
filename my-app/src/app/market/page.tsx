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
            <h1>This is the market page!</h1>
        </div>
    
    )
  }