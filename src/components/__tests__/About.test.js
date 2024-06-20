//This is unit testing my friends! Testing a component in isolation.

import { render, screen } from "@testing-library/react";
import About from "../About";
import "@testing-library/jest-dom";

//describe is just to group the test cases. not a big thing.
//You can write multiple describes, you can write nested describes.

describe("group of about us test cases ", () => {
  test("should render about us component", () => {
    render(<About />);
    const heading = screen.getByRole("heading");

    //Assertion
    expect(heading).toBeInTheDocument();
  });

  test("should load button in about us component", () => {
    render(<About />);
    const button = screen.getByRole("button");

    //Assertion
    expect(button).toBeInTheDocument();
  });

  //we can write "test" or "it" to create test cases. its just a naming convention. But remember! please use only of test/it.
  // Or else you'd get confused.
  it("should load input box in about us component", () => {
    //rendering
    render(<About />);

    //Querying
    const inputBoxes = screen.getAllByRole("textbox");
    //   console.log(inputBoxes);

    //Assertion
    expect(inputBoxes.length).toBe(2);
  });
});
