import Link from "next/link";

const HomePage = () => {
  return (
    <div className="relative isolate overflow-hidden h-[calc(100vh-64px)] bg-gray-950 flex items-center justify-center">
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl opacity-20">
        <div
          className="relative left-1/2 -z-10 aspect-1155/678 w-288.75 max-w-none -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#312e81] to-[#6366f1] opacity-30"
          style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)", }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-7xl lg:text-8xl">
          Développons votre <span className="text-indigo-400">vision digitale</span>
        </h1>

        <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-400 font-light leading-8">
          Nous développons des applications sur mesure pour répondre à vos besoins.
          <br className="hidden sm:inline" />
          <span className="text-indigo-400 italic font-medium">
            Ensemble, façonnons l&apos;avenir.
          </span>
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 border-2 border-indigo-600 text-base font-semibold rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 hover:border-indigo-700 transition duration-300 shadow-xl shadow-indigo-500/30"          >
            Démarrer un projet
          </Link>

          <Link href="/services" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 border-2 border-gray-700 text-base font-medium rounded-lg text-gray-300 hover:text-white hover:border-white transition duration-300 bg-gray-900"          >
            Explorer nos services →
          </Link>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="h-10 w-6 border-2 border-gray-600 rounded-full flex justify-center pt-1 animate-bounce">
            <div className="h-2 w-1 bg-gray-500 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
