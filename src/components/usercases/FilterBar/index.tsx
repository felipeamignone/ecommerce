import React from "react";

import {
  Container,
  Item,
  RadioDescribleContainer,
  RadioItem,
  RadioLabel,
} from "./styles";
import { IFilterBar } from "./types";

const FilterBar = (props: IFilterBar): JSX.Element => {
  const { Filters, HandleFilter } = props;
  return (
    <Container>
      {Filters.map((filter) => (
        <Item>
          <RadioItem
            id={filter}
            value={filter}
            defaultChecked={filter === "Todos" ? true : false}
            onClick={() => HandleFilter(filter)}
          />
          <RadioDescribleContainer>
            <RadioLabel htmlFor={filter}>{filter}</RadioLabel>
          </RadioDescribleContainer>
        </Item>
      ))}
    </Container>
  );
};

export default FilterBar;
