// React
import React from "react";

// Cards
import Album from "./Album";
import BasicTextCard from "./BasicTextCard";
import NewsCard from "./NewsCard";
import ProductCard from "./ProductCard";
import ProfileCardTitleSubtitle from "./ProfileCardTitleSubtitle";
import ProfileCard from "./ProfileCard";
import TextCard from "./TextCard";
import SuggestedProfile from "./SuggestedProfile";

export default () =>
	<article id="cards" className="center pt4">
		<h2 className="f2 lh-title">Cards</h2>
		<section id="album">
			<h3 className="f3 lh-copy">Album</h3>
			<code className="db mb3">Props: artistName, albumName, url, img, align</code>

			<Album />
			<code className="db mb3">align="left" (default)</code>

			<Album align="center" />
			<code className="db mb3">align="center"</code>

			<Album align="right" />
			<code className="db mb3">align="right"</code>
		</section>
		<section id="basic-text-card">
			<h3 className="f3 lh-copy">BasicTextCard</h3>
			<code className="db mb3">Props: title, text, bgColor</code>
			<BasicTextCard />
		</section>
		<section id="news-card">
			<h3 className="f3 lh-copy">NewsCard</h3>
			<code className="db mb3">Props: publisher, img, headline, url, source, timestamp</code>
			<NewsCard />
		</section>
		<section id="product-card">
			<h3 className="f3 lh-copy">ProductCard</h3>
			<code className="db mb3">Props: publisher, img, headline, url, source, timestamp</code>
			<ProductCard />
		</section>
		<section id="profile-card-title-subtitle">
			<h3 className="f3 lh-copy">ProfileCardTitleSubtitle</h3>
			<code className="db mb3">Props: title, subtitle, img</code>
			<ProfileCardTitleSubtitle />
		</section>
		<section id="profile-card-title-subtitle">
			<h3 className="f3 lh-copy">ProfileCard</h3>
			<code className="db mb3">Props: title, description, img</code>
			<ProfileCard />
		</section>
		<section id="text-card">
			<h3 className="f3 lh-copy">TextCard</h3>
			<code className="db mb3">Props: title, text</code>
			<TextCard />
		</section>
		<section id="suggested-profile">
			<h3 className="f3 lh-copy">SuggestedProfile</h3>
			<code className="db mb3">Props: title, subtitle, buttonText, img</code>
			<SuggestedProfile />
		</section>
	</article>;
