export default function About(){
    return(
        <div className="min-h-screen w-full flex flex-col items-center justify-center">
        <div className="px-15 md:px-50 flex flex-col items-center justify-center">
            <h1 className="-mt-30 lg:-mt-50 mb-4 text-[40px] font-semibold bg-linear-to-r from-orange-300 to-blue-300 bg-clip-text text-transparent">ABOUT</h1>
            <p className="text-xl md:text-2xl text text-gray-200 text-center">Welcome to CryptoCurrent - your one-stop hub for real-time cryptocurrency insights. Track live prices of the world’s most popular coins in clean, intuitive dashboard. With search functionality, you can find popular coin and know about its price. Whether you’re a trader, investor, or just crypto-curious, CryptoCurrent keeps you updated with prices, every second of the market day.</p>
        </div>
        </div>
    )
}