import React from "react";
import renderer from "react-test-renderer";
import { LocationList } from "@components";

describe("Testing : <LocationList />", () => {
  const mockLocation1 = [
    {
      name: "The Great Pyramid of Giza",
      address: "main street",
      phone: "2020-2020",
      lat: "29.9792",
      long: "31.1342",
    },
    {
      name: "Leaning Tower of Pisa",
      address: "main street",
      phone: "5050-5050",
      lat: "43.7230",
      long: "10.3966",
    },
  ];
  const mockLocation2 = [
    {
      name: "Leaning Tower of Pisa",
      address: "main street",
      phone: "5050-5050",
      lat: "43.7230",
      long: "10.3966",
    },
  ];

  it("has 3 child when locations.length === 2", () => {
    const tree = renderer
      .create(<LocationList locations={mockLocation1} />)
      .toJSON();
    expect(tree.children.length).toBe(3);
  });
  it("has 2 children when locations.length === 1", () => {
    const tree = renderer
      .create(<LocationList locations={mockLocation2} />)
      .toJSON();
    expect(tree.children.length).toBe(2);
  });
});
