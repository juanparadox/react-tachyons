import React from 'react';

const PhotoEssay = ({ title, subtitle, cover, preface, leftImg, images }) => (
  <article className="helvetica pb5">
    <header className="vh-100 bg-light-pink dt w-100">
      <div
        style={{background: `url(${cover}) no-repeat center right`, backgroundSize: 'cover'}}
        className="dtc v-mid cover ph3 ph4-m ph5-l">
        <h1 className="f2 f-subheadline-l measure lh-title fw9">{ title }</h1>
        <h2 className="f6 fw6 black">{ subtitle }</h2>
      </div>
    </header>
    <div className="serif ph3 ph4-m ph5-l">
      <p className="lh-copy f5 f3-m f1-l measure center pv4">
        { preface } </p>
      <div className="f5 f3-m lh-copy">
        <div className="cf dt-l w-100 bt b--black-10 pv4">
          <div className="dtc-l v-mid mw6 pr3-l">
            <img className="w-100" src={ leftImg } alt=""/>
          </div>
          <div className="dtc-l v-mid f6 f5-m f4-l measure-l">
            <p className="measure pv4-l center">
              <span className="fw9 fw4-ns">
                Before it burned to the ground, the structure</span> filled a small beach
              inlet below the Cliff House, also owned by Adolph Sutro at the time.
              Shortly after closing, a fire in 1966 destroyed the building
              while it was in the process of being demolished. All that remains
              of the site are concrete walls, blocked off stairs and
              passageways, and a tunnel with a deep crevice in the middle. The
              cause of the fire was arson. Shortly afterwards, the developer
              left San Francisco and claimed insurance money.
            </p>
          </div>
        </div>
        <div className="cf dn">
          <div className="fl w-100 w-50-l">
            <p className="f5 pv4">
              During high tides, water would flow directly into the pools from the
              nearby ocean, recycling the <span className="db f4 f3-m f1-l fw6 measure lh-title">two million US gallons of water in about an hour. </span>
            </p>
          </div>
          <div className="fl w-100 w-50-l">
            <p className="f5">
              During low tides, a powerful turbine water pump,
              built inside a cave at sea level, could be switched on from a control
              room and could fill the tanks at a rate of 6,000 US gallons a minute,
              recycling all the water in five hours.
            </p>
          </div>
        </div>
        <div className="cf">
          <div className="fl w-100 w-50-l pr2-l pb3">
            <img className="db w-100" src={ images[0].url } alt={ images[0].alt }/>
          </div>
          <div className="fl w-50 w-50-l pr1 pr0-l pl2-l pb3">
            <img className="db w-100" src={ images[1].url } alt={ images[1].alt }/>
          </div>
          <div className="fl w-50 w-50-l pl2 pl0-l pr2-l pb3">
            <img className="db w-100" src={ images[2].url } alt={ images[2].alt }/>
          </div>
          <div className="fl w-100 w-50-l pl2-l">
            <img className="db w-100" src={ images[3].url } alt={ images[3].alt }/>
          </div>
        </div>
      </div>
    </div>
  </article>
);

PhotoEssay.defaultProps = {
  title: "A Night Taking Photos at San Francisco’s Spooky Ruins of the Sutro Baths",
  subtitle: "A story by Nancy Drew",
  cover: "http://mrmrs.github.io/photos/display.jpg",
  preface: "On March 14, 1896, the Sutro Baths were opened to the public as the world's largest indoor swimming pool establishment.",
  leftImg: "http://mrmrs.github.io/photos/009.jpg",
  images: [
    {
      url: "http://mrmrs.github.io/photos/010.jpg",
      alt: "Photo of a dusk skyline above a grassy rockface covered in trees."
    },
    {
      url: "http://mrmrs.github.io/photos/011.jpg",
      alt: "Photo of the sea and sky on the horizon with the foundations of a demolished house."
    },
    {
      url: "http://mrmrs.github.io/photos/012.jpg",
      alt: "Photo of the sea with mist covering the rocky formations near the shore."
    },
    {
      url: "http://mrmrs.github.io/photos/013.jpg",
      alt: "Photo of the foundations of a building on a cliff overlooking a lighthouse."
    }
  ]
};

PhotoEssay.propTypes = {
  title: React.PropTypes.string,
  subtitle: React.PropTypes.string,
  cover: React.PropTypes.string,
  preface: React.PropTypes.string,
  leftImg: React.PropTypes.string,
  images: React.PropTypes.array
}

export default PhotoEssay;
