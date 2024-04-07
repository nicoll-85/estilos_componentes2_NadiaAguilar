// sum.test.js
import { expect, it } from "vitest";
import GridContainer from "./GridContainer";
import renderer from "react-test-renderer";

it("GridContainerTest", () => {
  const tree = renderer.create(<GridContainer />).toJSON();
  expect(tree).toMatchSnapshot();
});
