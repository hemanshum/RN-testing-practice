import { render, fireEvent } from "@testing-library/react-native";
import { toHaveStyle } from "@testing-library/jest-native";

import App from "../App";

describe("App", () => {
  expect.extend({ toHaveStyle });
  describe("layout", () => {
    it("should has initial button text", () => {
      const buttonText = "Change to blue";
      const { getByText } = render(<App />);

      const button = getByText(buttonText);
      expect(button.props.children).toEqual(buttonText);
    });

    it("should has initial button color", () => {
      const { getByA11yLabel } = render(<App />);
      const button = getByA11yLabel("Change button color to blue");

      expect(button).toHaveStyle({ backgroundColor: "red" });
    });
  });

  describe("interaction", () => {
    it("should change button color and text, when it's clicked", () => {
      const buttonText = "Change to red";
      const { getByA11yLabel, getByText } = render(<App />);
      const btnByColor = getByA11yLabel("Change button color to blue");

      fireEvent.press(btnByColor);

      expect(btnByColor).toHaveStyle({ backgroundColor: "blue" });

      const btnByText = getByText(buttonText);
      expect(btnByText.props.children).toEqual(buttonText);
    });
  });
});
