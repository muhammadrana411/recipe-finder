/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import { getRecipe } from "../services/api";
import { useParams } from "react-router";
import { Button, Grid, Header, Image, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";

function RecipeDetails() {
  let [recipe, setRecipe] = useState({});

  let { recipeId } = useParams();

  useEffect(() => {
    let getData = async () => {
      let res = await getRecipe(recipeId);
      if (res && res.recipe) {
        setRecipe(res.recipe);
      }
    };
    getData();
  });

  return Object.keys(recipe).length > 0 ? (
    <Grid container stackable columns={2} className="detailsPageContent">
      <Grid.Column>
        <Button
          as={Link}
          to={`/recipes`}
          content="Back to Recipe List"
          color="yellow"
          style={{ marginBottom: "40px" }}
        />
        <Image src={recipe.image_url} />
      </Grid.Column>
      <Grid.Column>
        <Header size="medium">{recipe.title}</Header>
        <p>Provided by: {recipe.publisher}</p>
        <Button
          as={"a"}
          href={recipe.publisher_url}
          target="_blank"
          color="blue"
          content="Publisher Webpage"
        />
        <Button
          as={"a"}
          href={recipe.source_url}
          target="_blank"
          color="green"
          content="Publisher Webpage"
        />
        <Header size="large" content="Ingredients" />
        <Segment.Group>
          {recipe &&
            recipe.ingredients.map((data) => {
              return (
                <Segment>
                  <h5>{data}</h5>
                </Segment>
              );
            })}
        </Segment.Group>
      </Grid.Column>
    </Grid>
  ) : null;
}
export default RecipeDetails;
