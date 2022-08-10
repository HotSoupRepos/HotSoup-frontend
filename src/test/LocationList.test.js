import React from "react";
import renderer from "react-test-renderer";
import { LocationList } from "@components";

describe("Testing : <LocationList />", () => {
  let Location1 = [
    {
      name: "location1",
      address: "main street",
      phone: "5050-5050",
      lat: "2.5000",
      long: "2.5000",
    },
    {
      name: "location2",
      address: "second street",
      phone: "6050-6050",
      lat: "3.5000",
      long: "3.5000",
    },
  ];

  it("has 3 child when locations.length === 2", () => {
    const tree = renderer
      .create(<LocationList locations={Location1} />)
      .toJSON();
    expect(tree.children.length).toBe(3);
  });
  it("has 2 children locations.length === 1", () => {
    const tree = renderer
      .create(<LocationList locations={Location1.splice(-1)} />)
      .toJSON();
    expect(tree.children.length).toBe(2);
  });
});
