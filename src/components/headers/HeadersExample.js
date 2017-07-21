// React
import React from "react";

// Forms
import CircleAvatarTitleSubtitle from "./CircleAvatarTitleSubtitle";
import RoundedAvatarTitleSubtitle from "./RoundedAvatarTitleSubtitle";
import StartupHero from "./StartupHero";

export default () => (
	<article id="links" className="center pt4">
        <h2 className="f2 lh-title">Headers</h2>
        <section id="circle-avatar-title-subtitle">
        	<h3 className="f3 lh-copy">Circle Avatar Title Subtitle</h3>
            <CircleAvatarTitleSubtitle/>
        </section>
        <section id="rounded-avatar-title-subtitle">
        	<h3 className="f3 lh-copy">Rounded Avatar Title Subtitle</h3>
            <RoundedAvatarTitleSubtitle/>
        </section>
        <section id="startup-hero">
        	<h3 className="f3 lh-copy">Startup Hero</h3>
            <StartupHero/>
        </section>
    </article>
)
