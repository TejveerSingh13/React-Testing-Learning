import { render, screen } from "@testing-library/react";
import { Skills } from "./skills";

describe("Skills", () => {
  const skills = ["HTML", "CSS", "JavaScript"];

  test("Component renders Correctly", () => {
    render(<Skills skills={skills} />);
    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });

  test("renders a list of skills", () => {
    render(<Skills skills={skills} />);
    const listItemEle = screen.getAllByRole("listitem");
    expect(listItemEle).toHaveLength(skills.length);
  });

  test("renders Login Button", () => {
    render(<Skills skills={skills} />);
    const loginButton = screen.getByRole("button", { name: "Login" });
    expect(loginButton).toBeInTheDocument();
  });

  test("Does not renders StartLearning Button", () => {
    render(<Skills skills={skills} />);
    const SLButton = screen.queryByRole("button", { name: "Start learning" });
    expect(SLButton).not.toBeInTheDocument();
  });

  test("start learning is eventually displayed", async () => {
    render(<Skills skills={skills} />);
    const SLButton = await screen.findByRole(
      "button",
      {
        name: "Start learning",
      },
      { timeout: 2000 }
    );
    expect(SLButton).toBeInTheDocument();
  });
});
