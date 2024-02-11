export default function Home() {
  return (
    <div className="flex flex-col items-center pt-16">
      <div className="flex flex-col lg:flex-row items-center gap-8 p-8 max-w-6xl w-full">
        <div className="flex flex-col space-y-4 lg:w-1/2 w-full">

          <h1 className="text-5xl font-bold">
            Welcome to Art Share!
          </h1>

          <p className="text-purple-200 text-lg">
            A creative art valuation solution for your convenience.
            Invest in your favorite works and submit your own for valuation.
          </p>
          
        </div>
        
        <div className="lg:w-1/2 w-full mt-8 lg:mt-0">
          <img
            src='/thekiss.png'
            alt=""
            className="rounded-lg object-cover w-full h-full"
          />
        </div>
        <div className="lg:w-1/2 w-full mt-8 lg:mt-0">
        <img
            src='/monalisa.png'
            alt=""
            className="rounded-lg object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  )
}
