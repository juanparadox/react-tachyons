// React
import React from "react";
// Banners - Basic
import Basic from "../banners/Basic";

export default () => (
    <Basic
      tagline="React.JS + Tachyons component library"
      subline="Stateless react components and a whole lot of tachyons."
      small="Want to contribute?"
      bgColor=""
      fontColor="mid-gray"
      leftButton={{ text: "GitHub", href: "https://github.com/juanparadox/react-tachyons", bgColor: "dark-blue"}}
      rightButton={{ text: "Issues", href: "https://github.com/juanparadox/react-tachyons/issues"}}
    />
);
