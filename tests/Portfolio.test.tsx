import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Portfolio from "../src/components/Portfolio";

describe("Portfolio landing page", () => {
  it("renders the name and headline", () => {
    render(<Portfolio />);
    expect(screen.getByText("MOKSHA")).toBeInTheDocument();
    expect(screen.getByText("RODE")).toBeInTheDocument();
    expect(screen.getByText("CURIOUS")).toBeInTheDocument();
    expect(screen.getByText("PRODUCTS")).toBeInTheDocument();
  });

  it("renders all six nav links", () => {
    render(<Portfolio />);
    const navLinks = ["ABOUT", "SKILLS", "PROJECTS", "EXPERIENCE", "EDUCATION", "CONTACT"];
    navLinks.forEach((label) => {
      expect(screen.getByText(label)).toBeInTheDocument();
    });
  });

  it("links PROJECTS to the real GitHub profile", () => {
    render(<Portfolio />);
    const projectLinks = screen.getAllByText("PROJECTS");
    projectLinks.forEach((link) => {
      expect(link.closest("a")).toHaveAttribute(
        "href",
        "https://github.com/moksharode65-ship-it",
      );
    });
  });

  it("links featured project names to their live deployments", () => {
    render(<Portfolio />);
    expect(screen.getByText("Azad Zindagi Foundation").closest("a")).toHaveAttribute(
      "href",
      "https://azadzindagifoundation.org",
    );
    expect(screen.getByText("Sahaara Sangati").closest("a")).toHaveAttribute(
      "href",
      "https://sahaara-sangati.vercel.app",
    );
    expect(screen.getByText("ZENCHI").closest("a")).toHaveAttribute(
      "href",
      "https://zenchi-nu.vercel.app",
    );
    expect(screen.getByText("StandardsAI").closest("a")).toHaveAttribute(
      "href",
      "https://frontend-silk-delta-80.vercel.app",
    );
    expect(screen.getByText("Phantom SOS").closest("a")).toHaveAttribute(
      "href",
      "https://phantom-kohl-kappa.vercel.app",
    );
  });

  it("lists the services from the resume", () => {
    render(<Portfolio />);
    expect(screen.getByText(/Web Development \(React \/ Node.js\)/)).toBeInTheDocument();
  });

  it("renders the CGPA stat", () => {
    render(<Portfolio />);
    expect(screen.getByText("CGPA")).toBeInTheDocument();
    expect(screen.getByText("7.4/10")).toBeInTheDocument();
  });

  it("renders the Stack stat", () => {
    render(<Portfolio />);
    expect(screen.getByText("STACK")).toBeInTheDocument();
  });

  it("renders the footer with contact info", () => {
    render(<Portfolio />);
    expect(screen.getByText(/B\.Tech IT.*28/)).toBeInTheDocument();
    expect(screen.getByText(/A\. C\. Patil College of Engineering/)).toBeInTheDocument();
    expect(screen.getByText(/Mumbai, India/)).toBeInTheDocument();
  });

  it("renders the PLAY INTRO button", () => {
    render(<Portfolio />);
    expect(screen.getByText("PLAY INTRO")).toBeInTheDocument();
  });
});