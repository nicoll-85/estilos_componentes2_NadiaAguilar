import { expect, it } from "vitest";
import renderer from "react-test-renderer";
import Button from "./Button";

it("ButtonTest", () => {
  const tree = renderer.create(<Button />).toJSON();
  expect(tree).toMatchSnapshot();
});
