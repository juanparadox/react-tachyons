// React
import React, {Component} from "react";
// eslint-disable-next-line
import tachyons from "tachyons"; // TODO: determine the best way to load tachyons in...

// Text
import TextExample from "./components/text/TextExample";

// Links
import LinksExample from "./components/links/LinksExample";

// Layout
import LayoutExample from "./components/layout/LayoutExample";

// Buttons
import ButtonExample from "./components/buttons/ButtonExample";

// Forms
import FormExample from "./components/forms/FormsExample";

// Lists
import ListsExample from "./components/lists/ListsExample";

// Nav
import NavExample from "./components/nav/NavExample";

 // Error Pages
import ErrorPagesExample from "./components/errorpages/ErrorPagesExample";

// Footer
import FooterExample from "./components/footers/FooterExample";

// Headers
import HeadersExample from "./components/headers/HeadersExample";

// Article Lists
import ArticleListsExample from "./components/articlelists/ArticleListsExample";

// Articles
import ArticlesExample from "./components/articles/ArticlesExample";

// Banners
import BannersExample from "./components/banners/BannersExample";

// Banners - Basic
import Basic from "./components/banners/Basic";

// Definition Lists
import DefinitionListsExample from "./components/definitionlists/DefinitionListsExample";

// quotes
import QuotesExample from "./components/quotes/QuotesExample";

// tables
import TablesExample from "./components/tables/TablesExample";

class App extends Component {
  render() {
    return (
      <div>
        <Basic
          tagline="React.JS + Tachyons component library"
          subline="stateless react components and a whole lot of tachyons"
          small="Want to contribute?"
          leftButton={{ text: "GitHub", href: "https://github.com/juanparadox/react-tachyons", bgColor: "bg-dark-green"}}
          rightButton={{ text: "Issues", href: "https://github.com/juanparadox/react-tachyons/issues"}}
        />
        <section className="ph5">
          <TextExample/>
          <LinksExample/>
          <ButtonExample/>
          <FormExample/>
          <LayoutExample/>
          <ListsExample/>
          <ErrorPagesExample/>
          <FooterExample/>
          <HeadersExample/>
          <ArticleListsExample/>
          <ArticlesExample/>
          <BannersExample/>
          <DefinitionListsExample />
          <QuotesExample />
          <TablesExample />
          <NavExample/>
        </section>
      </div>
    );
  }
}

export default App
