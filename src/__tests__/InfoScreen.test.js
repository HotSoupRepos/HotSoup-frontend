import React from "react";
import renderer from "react-test-renderer";
import { render } from "@testing-library/react-native"

import Container from "../screens/InfoScreen/InfoScreen"



    it("renders default elements", () => {
        render(<Container />)
         });

 
//   it("has 3 children when locations.length === 2", () => {
//     const tree = renderer
//       .create(<LocationList locations={mockLocations} />)
//       .toJSON();
//     expect(tree.children.length).toBe(3);
//   });
