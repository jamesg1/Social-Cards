import React from "react";
import styled from "styled-components";
import { SocialCard } from "./SocialCard";
import renderer from "react-test-renderer";
import "jest-styled-components";

import data from "../../data";

describe("<SocialCard />", () => {
  test("it renders with props", () => {
    const tree = renderer.create(<SocialCard {...data[0]} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
