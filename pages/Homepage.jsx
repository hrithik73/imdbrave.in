import CardContainer from "../src/components/CardContainer"
import Header from "../src/components/Header"
import SocialCard from "../src/components/SocialCard"

const HomePage = () => {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-full mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-28 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <Header />
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Hey! This is </span>{" "}
                <span className="block text-indigo-600 xl:inline">DBRAVE</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 ">
                Md. Danish Iqbal, who goes with his stage name "Dbrave" is an
                indian singer and rapper from Darbhanga(Bihar).Who has a large
                base of subscriber on youtube and have many super hit song by
                his name."Zila Darbhanga" is one the best hit anthem of all time
                in Bihar
              </p>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:h-full lg:inset-y-0 lg:right-0 lg:w-1/2 ">
        <img
          className="h-full w-full object-contain lg:object-scale-down sm:h-72 md:h-full lg:w-full "
          className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          src="dbrave.png"
          alt=""
        />
      </div>
      <div className="lg:ml-12 lg:pl-12 mt-0	">
        <SocialCard />
      </div>
      <div className="flex items-center justify-center w-full h-full p-5 lg:mt-14">
        <CardContainer />
      </div>
    </div>
  )
}
export default HomePage
