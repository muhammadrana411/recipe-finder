/* eslint-disable react/prop-types */
import { Form, Grid, Input } from "semantic-ui-react";
import { useState } from "react";

function Search({ setSearchedQuery }) {
  let [value, setValue] = useState("");

  let onFormSubmit = () => {
    setSearchedQuery(value);
  };

  return (
    <Grid columns={2} textAlign="center" className="search-box">
      <Grid.Column>
        <h2 className="search-heading">
          Search Recipe with
          <span style={{ color: "#2185D0" }}> Recipe Finder</span>
        </h2>
        <h4>Input Recipe Name</h4>
        <Form onSubmit={() => onFormSubmit()}>
          <Input
            placeholder="tomato, potato, pizza"
            action={{ icon: "search", color: "blue" }}
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
        </Form>
      </Grid.Column>
    </Grid>
  );
}
export default Search;
