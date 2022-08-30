import React from 'react';

const CallToAction = () => {
	return (
		<section className="cta-section">
			<div className="cta-heading-wrapper">
				<h1 className="cta-heading">Get notified when we update!</h1>
				<p className="cta-desc">
					Get notified when we add new items to our specials menu,
					<br /> update our price list of have promos!
				</p>
			</div>
			<div>
				<form className="cta-form">
					<div>
						<input
							className="cta-input"
							type="email"
							name="email"
							id="email"
							placeholder="youremail@email.com"
						/>
						<button className="cta-button" type="submit">
							Get notified
						</button>
					</div>
				</form>
			</div>
		</section>
	);
};

export default CallToAction;
