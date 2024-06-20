import { render, screen, fireEvent } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import { act } from "react";
import MOCK_DATA from "../mocks/resMenuDataMock.json";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import Cart from "../Cart";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

test("complete Cart functionality should work", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    );
  });

  const accordionHeader = screen.getByText("Late Night Bestsellers (10)");

  expect(accordionHeader).toBeInTheDocument();

  fireEvent.click(accordionHeader);

  expect(screen.getAllByTestId("foodItem").length).toBe(10);

  expect(screen.getByText("Cart - 0 Items")).toBeInTheDocument();
  const addItemBtns = screen.getAllByText("Add +");
  fireEvent.click(addItemBtns[0]);
  fireEvent.click(addItemBtns[1]);
  fireEvent.click(addItemBtns[1]);
  expect(screen.getByText("Cart - 3 Items")).toBeInTheDocument();

  expect(screen.getAllByTestId("foodItem").length).toBe(13);
  expect(
    screen.getByRole("button", { name: "Clear Cart" })
  ).toBeInTheDocument();
  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));
  expect(screen.getAllByTestId("foodItem").length).toBe(10);
});
