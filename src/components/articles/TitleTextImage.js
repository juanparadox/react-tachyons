import React from 'react';

const TitleTextImage = ({ title, img, alt }) => (
  <article className="pa3 pa5-ns">
    <h1 className="f2">{ title }</h1>
    <img src={ img } className="w-100 f5 measure" alt={ alt }/>
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

TitleTextImage.defaultProps = {
  title: "Title Text with Image",
  img: "http://tachyons.io/img/space.jpg",
  alt: "Photo of outer space"
};

TitleTextImage.propTypes = {
  title: React.PropTypes.string,
  img: React.PropTypes.string,
  alt: React.PropTypes.string
}

export default TitleTextImage;
