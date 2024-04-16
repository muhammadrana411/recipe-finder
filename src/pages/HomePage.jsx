import { Button } from "semantic-ui-react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <Header title="Our Recipes" bgClass="bg-image">
        <Button
          content="Search Recipes"
          color="primary"
          as={Link}
          to={"/recipes"}
          size="big"
        />
      </Header>
    </div>
  );
}
export default HomePage;
