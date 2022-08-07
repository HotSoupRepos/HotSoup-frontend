import React from "react";
import renderer from "react-test-renderer";
import { LocationList } from "@components";

describe("<LocationList />", () => {
  let Location1 = [
    {
      name: "location1",
      address: "man street",
      phone: "5050-5050",
      lat: "2.5000",
      long: "2.5000",
    },
  ];
  it("has 1 child", () => {
    const tree = renderer
      .create(<LocationList locations={Location1} />)
      .toJSON();
    expect(tree.children.length).toBe(2);
  });
});
