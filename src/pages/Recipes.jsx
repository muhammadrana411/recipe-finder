import { useEffect, useState } from "react";
import RecipeList from "../components/RecipeList";
import Search from "../components/Search";
import { getRecipes } from "../services/api";

function Recipes() {
  let [searchedQuery, setSearchedQuery] = useState("");
  let [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getSearchedResult();
  }, [searchedQuery]);

  let getSearchedResult = async () => {
    let res = await getRecipes(searchedQuery);
    if (res && res.recipes) {
      setRecipes(res.recipes);
    }
  };

  return (
    <>
      <Search setSearchedQuery={setSearchedQuery} />
      <RecipeList recipes={recipes} searchedQuery={searchedQuery} />
    </>
  );
}
export default Recipes;
