export default function Home() {
  return (
    <div className="flex w-full h-screen"> {/* Adjusted for full viewport height */}
      <div className="w-1/2 flex flex-col justify-center items-center text-center p-8 space-y-4 overflow-auto">
        <h1 className="text-6xl font-bold text-white">
          Invest in your favorite art.
        </h1>
        <p className="text-gray-300 text-xl">
          ArtShare allows you to invest in your favorite art pieces, including those you've seen in museums. We offer innovative fractional ownership of art pieces, enabling affordable investments in art.
        </p>
        <div style={{ height: '20px' }}></div>
        {/* Logo and subtext container */}
        <div className="flex flex-col items-center space-y-2">
          <img
            src='/logo.svg'
            alt="ArtShare Logo"
            className="w-[100px] h-auto" // Set width to 100px and auto height for aspect ratio
          />
        </div>
      </div>

      {/* Image section with 100% viewport height */}
      <div className="w-1/2 h-screen mt-[-62px]"> {/* Adjusted margin-top */}
        <img
          src='/money.png'
          alt="The Kiss"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  )
}
