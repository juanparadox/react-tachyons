import React from 'react';

const HeadlineTitleText = ({ title }) => (
    <article class="pa3 pa5-ns">
      <h1 class="f3 f1-m f-headline-l">{ title }</h1>
      <p class="measure lh-copy">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
        tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
        vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
        no sea takimata sanctus est Lorem ipsum dolor sit amet.
      </p>
      <p class="measure lh-copy">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
        tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
        vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
        no sea takimata sanctus est Lorem ipsum dolor sit amet.
      </p>
    </article>
);

HeadlineTitleText.defaultProps = {
  title: "Title"
};

HeadlineTitleText.propTypes = {
  title: React.PropTypes.string
}

export default HeadlineTitleText;