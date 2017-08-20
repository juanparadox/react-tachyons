import React from "react";
import {Switch, Route} from 'react-router-dom';
import {
  ArticleListsExample,
  ArticlesExample,
  AvatarsExample,
  BannersExample,
  ButtonExample,
  CardsExample,
  DefinitionListsExample,
  ErrorPagesExample,
  FooterExample,
  FormExample,
  HeadersExample,
  LayoutExample,
  LinksExample,
  ListsExample,
  NavExample,
  QuotesExample,
  TablesExample,
  TextExample
} from '../../components'


import Links from './Links'

const Components = () =>
  <section className="ph5 pb5">
    <Switch>
      <Route exact path="/components" component={Links}/>
      <Route path="/components/article-lists" component={ArticleListsExample}/>
      <Route path="/components/articles" component={ArticlesExample}/>
      <Route path="/components/avatars" component={AvatarsExample}/>
      <Route path="/components/banners" component={BannersExample}/>
      <Route path="/components/button" component={ButtonExample}/>
      <Route path="/components/cards" component={CardsExample}/>
      <Route path="/components/definition-lists" component={DefinitionListsExample}/>
      <Route path="/components/error-pages" component={ErrorPagesExample}/>
      <Route path="/components/footers" component={FooterExample}/>
      <Route path="/components/forms" component={FormExample}/>
      <Route path="/components/headers" component={HeadersExample}/>
      <Route path="/components/layout" component={LayoutExample}/>
      <Route path="/components/links" component={LinksExample}/>
      <Route path="/components/lists" component={ListsExample}/>
      <Route path="/components/nav" component={NavExample}/>
      <Route path="/components/quotes" component={QuotesExample}/>
      <Route path="/components/tables" component={TablesExample}/>
      <Route path="/components/text" component={TextExample}/>
    </Switch>
  </section>

export default Components
