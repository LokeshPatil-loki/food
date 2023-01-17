import { Card } from "./Card";
export const LatestRecipes = () => {
  const recipes = [
    {
      img: "img/stew.jpg",
      title: "5 Bean Chilli Stew",
      author: "LoKi",
    },
    {
      img: "img/noodles.jpg",
      title: "Veg Noodles",
      author: "LoKi",
    },
    {
      img: "img/curry.jpg",
      title: "Tofu Curry",
      author: "LoKi",
    },
  ];
  return (
    <div>
      <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">Latest Recipes</h4>
      <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {recipes.map((recipe) => (
          <Card img={recipe.img} title={recipe.title} author={`Recipe by ${recipe.author}`} />
        ))}
      </div>
    </div>
  );
};
