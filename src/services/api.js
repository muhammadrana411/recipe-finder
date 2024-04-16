let API_URL = "https://forkify-api.herokuapp.com/api";

let getRecipes = async (searchedQuery) => {
  try {
    let response = await fetch(`${API_URL}/search?q=${searchedQuery}`);
    let data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
    return error.response;
  }
};

let getRecipe = async (searchedQuery) => {
  try {
    let response = await fetch(`${API_URL}/get?rId=${searchedQuery}`);
    let data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
    return error.response;
  }
};

export { getRecipe, getRecipes };
