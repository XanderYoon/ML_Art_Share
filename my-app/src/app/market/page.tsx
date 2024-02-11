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
                <h1 className="text-4xl">Browse the Market</h1>

                <div className="flex flex-col lg:flex-row items-center gap-8 p-8">
                    <Image width={500} alt="gtbuzz" src="/gtbuzz.png"/>
                    <Image width={500} alt="dream" src="/dream.png"/>
                    <Image width={500} alt="christ" src="/christ.png"/>
                    <Image width={500} alt="drowning" src="/drowning.png"/>
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-8 p-8">
                    <Image width={500} alt="boating" src="/boatingparty.png"/>
                    <Image width={500} alt="lasmeninas" src="/lasmeninas.png"/>
                    <Image width={500} alt="pearlgirl" src="/pearlgirl.png"/>
                    <Image width={500} alt="poker" src="/poker.png"/>
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-8 p-8">
                    <Image width={500} alt="school" src="/school.png"/>
                    <Image width={500} alt="water" src="/water.png"/>
                    <Image width={500} alt="image" src="/gtbuzz.png"/>
                    <Image width={500} alt="image" src="/gtbuzz.png"/>
                </div>
        </div>
    )
  }