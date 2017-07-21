import React from 'react';

const TitleText = ({ title }) => (
  <article className="pa3 pa5-ns">
    <h1 className="f2">{ title }</h1>
    <p className="measure lh-copy">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
      tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
      vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
      no sea takimata sanctus est Lorem ipsum dolor sit amet.
    </p>
    <p className="measure lh-copy">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
      tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
      vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
      no sea takimata sanctus est Lorem ipsum dolor sit amet.
    </p>
  </article>
);

TitleText.defaultProps = {
  title: "Title"
};

TitleText.propTypes = {
  title: React.PropTypes.string
}

export default TitleText;
