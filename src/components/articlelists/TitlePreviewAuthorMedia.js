import React from 'react';

const TitlePreviewAuthorMedia = ({ articles }) => (
    <section className="mw7 center avenir">
        <h2 className="baskerville fw1 ph3 ph0-l">News</h2>
        { articles.map((item, index) => (
                <article className="bt bb b--black-10" key={ index }>
                    <a className="db pv4 ph3 ph0-l no-underline black dim" href="#0">
                        <div className="flex flex-column flex-row-ns">
                            <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
                                <img src={ item.img.src } className="db" alt={ item.img.alt }/>
                            </div>
                            <div className="w-100 w-60-ns pl3-ns">
                                <h1 className="f3 fw1 baskerville mt0 lh-title">{ item.title }</h1>
                                <p className="f6 f5-l lh-copy">
                                    { item.content }
                                </p>
                                <p className="f6 lh-copy mv0">By { item.by }</p>
                            </div>
                        </div>
                    </a>
                </article>
            )
        )}
    </section>
);

TitlePreviewAuthorMedia.defaultProps = {
    articles: [
        {
            title: "Tech Giant Invests Huge Money to Build a Computer Out of Science Fiction",
            content: "The tech giant says it is ready to begin planning a quantum computer, a powerful cpu machine that relies on subatomic particles instead of transistors.",
            img: {
                src: "http://mrmrs.io/photos/cpu.jpg",
                alt: "Photo of a dimly lit room with a computer interface terminal."
            },
            by: "Robin Darnell"
        },
        {
            title: "A whale takes up residence in a large body of water",
            content: "This giant of a whale says it is ready to begin planning a new swim later this afternoon. A powerful mammal that relies on fish and plankton instead of hamburgers.",
            img: {
                src: "http://mrmrs.io/photos/whale.jpg",
                alt: "Photo of a whale's tale coming crashing out of the water."
            },
            by: "Katherine Grant"
        },
        {
            title: "‘We Couldn’t Believe Our Eyes’: A Lost World of Vinyl Is Found",
            content: "Archaeologists have found more than 40 tons of vinyl records, some more than a five years old, shedding light on early hipster trends.",
            img: {
                src: "http://mrmrs.io/photos/warehouse.jpg",
                alt: "Photo of a warehouse with stacked shelves."
            },
            by: "Imelda Clancy"
        }
    ]
};

TitlePreviewAuthorMedia.propTypes = {
    articles: React.PropTypes.arrayOf(
        React.PropTypes.shape({
            title: React.PropTypes.string,
            content: React.PropTypes.string,
            img : React.PropTypes.shape({
                src: React.PropTypes.string,
                alt: React.PropTypes.string
            }),
            by: React.PropTypes.string
        })
    )
};

export default TitlePreviewAuthorMedia;