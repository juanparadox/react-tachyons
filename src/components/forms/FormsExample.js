// React
import React from "react";

// Forms
import CheckboxList from "./CheckboxList";
import InputTextLabel from "./InputTextLabel";
import NewsletterSubscription from "./NewsletterSubscription";
import Password from "./Password";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import TextareaLabel from "./TextareaLabel";

export default () => (
	<article id="links" className="measure-wide center pt4">
        <h2 className="f2 lh-title">Forms</h2>
        <section id="checkbox-list">
        	<h3 className="f3 lh-copy">Checkbox List</h3>
            <CheckboxList/>
        </section>
        <section id="input-text-label">
        	<h3 className="f3 lh-copy">Input Text Label</h3>
            <InputTextLabel/>
        </section>
        <section id="newsletter-subscription">
        	<h3 className="f3 lh-copy">Newsletter Subscription</h3>
            <NewsletterSubscription/>
        </section>
        <section id="password">
        	<h3 className="f3 lh-copy">Password</h3>
            <Password/>
        </section>
        <section id="sign-in">
        	<h3 className="f3 lh-copy">Sign In</h3>
            <SignIn/>
        </section>
        <section id="sign-up">
        	<h3 className="f3 lh-copy">Sign Up</h3>
            <SignUp/>
        </section>
        <section id="textarea-label">
        	<h3 className="f3 lh-copy">Textarea Label</h3>
            <TextareaLabel/>
        </section>
    </article>
)