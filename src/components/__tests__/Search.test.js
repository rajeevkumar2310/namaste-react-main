import { render, screen, fireEvent } from "@testing-library/react";
import Body from "../Body";
import { BrowserRouter } from "react-router-dom";
// import { act } from "react-dom/test-utils"; <--- act is deprecated in react-dom/test-utils import act from react instead
import { act } from "react";
import MOCK_DATA from "../mocks/allResCardsMockData.json";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

// beforeAll(() => {
//   console.log("Before All");
// });
// beforeEach(() => {
//   console.log("Before Each");
// });
// afterAll(() => {
//   console.log("After All");
// });
// afterEach(() => {
//   console.log("After Each");
// });

it("should get restaurant cards based on search input", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const resCardsBeforeSearch = screen.getAllByTestId("resCard");
  expect(resCardsBeforeSearch.length).toBe(8);
  const searchInput = screen.getByTestId("searchInput");
  const searchBtn = screen.getByRole("button", { name: "Search" });
  fireEvent.change(searchInput, { target: { value: "pizZA" } });
  fireEvent.click(searchBtn);
  const resCardsAfterSearch = screen.getAllByTestId("resCard");
  expect(resCardsAfterSearch.length).toBe(1);
});

it("should get top rated restaurants on click of top rated restaurants button", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const resCardsBeforeTopRatedBtnClick = screen.getAllByTestId("resCard");
  expect(resCardsBeforeTopRatedBtnClick.length).toBe(8);
  const topRatedBtn = screen.getByRole("button", {
    name: "Top Rated Restaurants",
  });
  fireEvent.click(topRatedBtn);
  const resCardsAfterTopRatedBtnClick = screen.getAllByTestId("resCard");
  expect(resCardsAfterTopRatedBtnClick.length).toBe(3);
});
