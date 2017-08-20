import React from 'react';

const TitlePreviewAuthorMediaFlipped = ({ articles }) => (
    <section className="mw7 center">
        <h2 className="athelas ph3 ph0-l">News</h2>
        { articles.map((item, index) => (
                <article className="pv4 bt bb b--black-10 ph3 ph0-l" key={ index }>
                    <div className="flex flex-column flex-row-ns">
                        <div className="w-100 w-60-ns pr3-ns order-2 order-1-ns">
                            <h1 className="f3 athelas mt0 lh-title">{ item.title }</h1>
                            <p className="f5 f4-l lh-copy athelas">
                                { item.content }
                            </p>
                        </div>
                        <div className="pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-40-ns">
                            <img src={ item.img.src } className="db" alt={ item.img.alt }/>
                        </div>
                    </div>
                    <p className="f6 lh-copy gray mv0">By <span className="ttu">{ item.by }</span></p>
                    <time className="f6 db gray">{ item.date }</time>
                </article>
            )
        )}
    </section>
);

TitlePreviewAuthorMediaFlipped.defaultProps = {
    articles: [
        {
            title: "Tech Giant Invests Huge Money to Build a Computer Out of Science Fiction",
            content: "The tech giant says it is ready to begin planning a quantum computer, a powerful cpu machine that relies on subatomic particles instead of transistors.",
            img: {
                src: "http://mrmrs.github.io/photos/cpu.jpg",
                alt: "Photo of a dimly lit room with a computer interface terminal."
            },
            by: "Robin Darnell",
            date: "Nov. 21, 2016"
        },
        {
            title: "A whale takes up residence in a large body of water",
            content: "This giant of a whale says it is ready to begin planning a new swim later this afternoon. A powerful mammal that relies on fish and plankton instead of hamburgers.",
            img: {
                src: "http://mrmrs.github.io/photos/whale.jpg",
                alt: "Photo of a whale's tale coming crashing out of the water."
            },
            by: "Katherine Grant",
            date: "Nov. 19, 2016"
        },
        {
            title: "‘We Couldn’t Believe Our Eyes’: A Lost World of Vinyl Is Found",
            content: "Archaeologists have found more than 40 tons of vinyl records, some more than a five years old, shedding light on early hipster trends.",
            img: {
                src: "http://mrmrs.github.io/photos/warehouse.jpg",
                alt: "Photo of a warehouse with stacked shelves."
            },
            by: "Imelda Clancy",
            date: "Nov. 19, 2016"
        }
    ]
};

TitlePreviewAuthorMediaFlipped.propTypes = {
    articles: React.PropTypes.arrayOf(
        React.PropTypes.shape({
            title: React.PropTypes.string,
            content: React.PropTypes.string,
            img : React.PropTypes.shape({
                src: React.PropTypes.string,
                alt: React.PropTypes.string
            }),
            by: React.PropTypes.string,
            date: React.PropTypes.string
        })
    )
};

export default TitlePreviewAuthorMediaFlipped;
