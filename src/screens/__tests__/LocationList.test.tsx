import React from "react";
import ReactTestRenderer, { ReactTestRendererJSON } from "react-test-renderer";
import { LocationList } from "@components";

describe("Testing : <LocationList />", () => {
  const mockLocation = [
    {
      name: "Leaning Tower of Pisa",
      address: "main street",
      phone: "5050-5050",
      lat: "43.7230",
      lng: "10.3966",
    },
  ];
  const multipleMockLocations = [
    {
      name: "The Great Pyramid of Giza",
      address: "main street",
      phone: "2020-2020",
      lat: "29.9792",
      lng: "31.1342",
    },
    {
      name: "Leaning Tower of Pisa",
      address: "main street",
      phone: "5050-5050",
      lat: "43.7230",
      lng: "10.3966",
    },
  ];

  it("renders 1 child(location)", () => {
    const tree = ReactTestRenderer.create(
      <LocationList locations={mockLocation} />
    ).toJSON() as ReactTestRendererJSON;

    expect(tree.children?.length).toBe(2);
  });

  it("renders multiple children(locations)", () => {
    const tree = ReactTestRenderer.create(
      <LocationList locations={multipleMockLocations} />
    ).toJSON() as ReactTestRendererJSON;

    expect(tree.children?.length).toBe(3);
  });
});
