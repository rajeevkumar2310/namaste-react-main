import { render, screen } from "@testing-library/react";
import RestaurantCard, { withPromotedLabel } from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMockData.json";
import "@testing-library/jest-dom";

it("should render resCard component with props in it", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  //Querying
  const name = screen.getByText("Nawabi Chaats");

  //Assertion
  expect(name).toBeInTheDocument();
});

it("should render restaurant card component with promoted label", () => {
  const Kpve = withPromotedLabel(RestaurantCard);
  render(<Kpve resData={MOCK_DATA} />);

  const topRatedLabel = screen.getByText("Top Rated");

  expect(topRatedLabel).toBeInTheDocument();
});
