import React from "react";

const ProductCard = ({ name, img, description, price }) =>
	<article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
		<img src={img} className="db w-100 br2 br--top" role="presentation" />
		<div className="pa2 ph3-ns pb3-ns">
			<div className="dt w-100 mt1">
				<div className="dtc">
					<h1 className="f5 f4-ns mv0">
						{name}
					</h1>
				</div>
				<div className="dtc tr">
					<h2 className="f5 mv0">
						${price.toLocaleString("en")}
					</h2>
				</div>
			</div>
			<p className="f6 lh-copy measure mt2 mid-gray">
				{description}
			</p>
		</div>
	</article>;

ProductCard.defaultProps = {
	name: "Cat",
	img: "http://placekitten.com/g/600/300",
	price: 1000,
	description: "If it fits, i sits burrow under covers. Destroy couch leave hair everywhere, and touch water with paw then recoil in horror."
};

ProductCard.propTypes = {
	name: React.PropTypes.string,
	img: React.PropTypes.string,
	price: React.PropTypes.number,
	description: React.PropTypes.string
};

export default ProductCard;
