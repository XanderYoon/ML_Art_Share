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
        <div className="flex flex-col items-center justify-center pt-16" style={{ maxWidth: "100%", margin: "0 auto" }}>
            <div className="flex flex-col lg:flex-row items-center gap-8 p-8">
                <Image width={1500} alt="market" src="/SCR-1o3omybt.png" style={{ marginTop: "-100px" }}/>
            </div>
        </div>
    )
}


  
