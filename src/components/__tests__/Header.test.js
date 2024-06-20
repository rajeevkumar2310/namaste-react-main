import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../Header";
import Body from "../Body";
import MOCK_DATA from "../mocks/allResCardsMockData.json";
import { act } from "react";
import Contact from "../Contact";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      Promise.resolve(MOCK_DATA);
    },
  });
});

it("should render Header component with a login button", () => {
  //rendering
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );
  //Querying
  const loginButton = screen.getByRole("button", { name: "Login" });

  //Assertion
  expect(loginButton).toBeInTheDocument();
});

it("should render Header component with name Cart - 0 items ", () => {
  //rendering
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );
  //Querying
  const cart = screen.getByText("Cart - 0 Items");

  //Assertion
  expect(cart).toBeInTheDocument();
});

it("should render Header component which has Cart - 0 items - querying using regex", () => {
  //rendering
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );
  //Querying using regex
  const cart = screen.getByText(/Cart/);

  //Assertion
  expect(cart).toBeInTheDocument();
});

it("should change Login button to Logout button on click event in my header component", async () => {
  await act(async () => {
    render(
      <Provider store={appStore}>
        <BrowserRouter>
          <Header />
          <Body />
          <Contact />
        </BrowserRouter>
      </Provider>
    );
  });

  const button = screen.getByRole("button", { name: "Login" });
  fireEvent.click(button);
  const newBtn = screen.getByRole("button", { name: "Logout" });
  expect(newBtn).toBeInTheDocument();
  fireEvent.click(newBtn);
  expect(screen.getByRole("button", { name: "Login" })).toBeInTheDocument();
  const darkThemeBtn = screen.getByRole("button", { name: "Set Dark Theme" });
  fireEvent.click(darkThemeBtn);
  expect(
    screen.getByRole("button", { name: "Set Light Theme" })
  ).toBeInTheDocument();
  fireEvent.offline(window);
  expect(screen.getByText("Offline")).toBeInTheDocument();

  expect(
    screen.getByText(
      "Looks like you're offline. Please check your internet connection"
    )
  ).toBeInTheDocument();
  fireEvent.online(window);
  const userNameTextBox = screen.getByTestId("userName");
  expect(userNameTextBox).toBeInTheDocument();
});
