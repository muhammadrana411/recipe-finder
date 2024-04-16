import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

function Navbar() {
  return (
    <Menu borderless fixed="top">
      <Menu.Item>
        <h3>React Recipe Finder</h3>
      </Menu.Item>
      <Menu.Item name="home" as={Link} to={"/"} />
      <Menu.Item name="recipes" as={Link} to={"/recipes"} />
    </Menu>
  );
}
export default Navbar;
