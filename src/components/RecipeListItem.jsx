/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { Button, Card } from "semantic-ui-react";

function RecipeListItem({ recipe }) {
  return (
    <Card>
      <img src={recipe.image_url} alt="thumbnail" style={{ height: "170px" }} />
      <Card.Content>
        <Card.Header>{recipe.title}</Card.Header>
        <Card.Description>
          <h4>{recipe.publisher}</h4>
        </Card.Description>
      </Card.Content>
      <Card.Content>
        <Button
          as={Link}
          to={`/recipes/${recipe.recipe_id}`}
          color="blue"
          size="tiny"
          content="View Recipe"
        ></Button>

        <Button
          href={recipe.source_url}
          color="green"
          target="_blank"
          size="tiny"
        >
          Recipe URL
        </Button>
      </Card.Content>
    </Card>
  );
}
export default RecipeListItem;
