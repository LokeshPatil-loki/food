import { Navbar } from "./components/Navbar";
import { LatestRecipes } from "./components/LatestRecipes";
import { MostPopular } from "./components/MostPopular";
export default function App() {
  return (
    <div className="App font-body grid md:grid-cols-3">
      <Navbar className="col-span-1" />

      <main className="px-16 py-6 bg-gray-100 md:col-span-2">
        <div className="flex justify-center md:justify-end">
          <a
            className="text-primary btn border-primary md:border-2 hover:bg-red-500 hover:text-white"
            href="#"
          >
            Log in
          </a>
          <a
            className="text-primary btn border-primary md:border-2 ml-2  hover:bg-red-500 hover:text-white"
            href="#"
          >
            Sign up
          </a>
        </div>
        <clockSvg />
        <header>
          <h2 className=" text-gray-700 text-6xl font-semibold ">Recipes</h2>
          <h3 className="text-2xl font-semibold ">For LoKi Variants</h3>
        </header>

        <LatestRecipes />
        <MostPopular />
        <div className="flex justify-center">
          <div className="btn bg-secondary-100 text-secondary-200">Load More</div>
        </div>
      </main>
    </div>
  );
}
