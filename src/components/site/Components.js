import React from "react";
// Text
import TextExample from "../text/TextExample";

// Links
import LinksExample from "../links/LinksExample";

// Layout
import LayoutExample from "../layout/LayoutExample";

// Buttons
import ButtonExample from "../buttons/ButtonExample";

// Forms
import FormExample from "../forms/FormsExample";

// Lists
import ListsExample from "../lists/ListsExample";

// Nav
import NavExample from "../nav/NavExample";

 // Error Pages
import ErrorPagesExample from "../errorpages/ErrorPagesExample";

// Footer
import FooterExample from "../footers/FooterExample";

// Headers
import HeadersExample from "../headers/HeadersExample";

// Article Lists
import ArticleListsExample from "../articlelists/ArticleListsExample";

// Articles
import ArticlesExample from "../articles/ArticlesExample";

// Banners
import BannersExample from "../banners/BannersExample";

// Definition Lists
import DefinitionListsExample from "../definitionlists/DefinitionListsExample";

// quotes
import QuotesExample from "../quotes/QuotesExample";

// tables
import TablesExample from "../tables/TablesExample";

const Components = () =>
  <section className="ph5">
    { /*The below code is how we can possibly show the list of components where the visitor can click on a component to view more about it */}
    <h2 className="f2 lh-title">Article Lists</h2>
    <h3><a href="/rt/components/article-lists/title-preview-author-media" className="no-underline black f3 lh-copy">TitlePreviewAuthorMedia</a></h3>
    <h3><a href="/rt/components/article-lists/title-preview-author-media-flipped" className="no-underline black f3 lh-copy">TitlePreviewAuthorMediaFlipped</a></h3>
    { /*The below code is how the components were showing */}
    <ArticleListsExample/>
    <ArticlesExample/>
    <TextExample/>
    <LinksExample/>
    <ButtonExample/>
    <FormExample/>
    <LayoutExample/>
    <ListsExample/>
    <ErrorPagesExample/>
    <FooterExample/>
    <HeadersExample/>
    <BannersExample/>
    <DefinitionListsExample />
    <QuotesExample />
    <TablesExample />
    <NavExample/>
  </section>

export default Components
