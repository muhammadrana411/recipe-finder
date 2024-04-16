/* eslint-disable react/prop-types */
import { Container, Grid, GridColumn, Header } from "semantic-ui-react";
import RecipeListItem from "./RecipeListItem";

function RecipeList({ recipes, searchedQuery }) {
  return (
    <Container>
      {searchedQuery && (
        <Header
          size="huge"
          content={`Recipes list for "${searchedQuery}"`}
          textAlign="center"
        />
      )}
      <Grid columns={4} doubling={true}>
        {recipes &&
          recipes.map((recipe) => {
            return (
              <GridColumn key={recipe.id}>
                <RecipeListItem recipe={recipe} />
              </GridColumn>
            );
          })}
      </Grid>
    </Container>
  );
}
export default RecipeList;
