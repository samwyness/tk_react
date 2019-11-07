import React from 'react';
import { A } from 'hookrouter';

// Components
import Icon from 'components/Icon';

// Theme variables
const site_logo = __tkr__.settings.site_logo;
const site_title = __tkr__.settings.meta.title;

const Footer = () => {
	return(
		<footer className="tkr-footer pt-5">
			<div className="container">
				<div className="row">

					<div className="col-md-4">
						<A href="/" className="tkr-site-branding">
							{ site_logo &&
							<span className="tkr-site-logo">
								<img src={ site_logo } />
							</span>
							}

							{ !site_logo && site_title &&
							<span className="tkr-site-title">
								<strong>{ site_title }</strong>
							</span>
							}			
						</A>
						
						<ul className="tkr-social-links mt-3 list-style-none list-horizontal">
							<li><Icon icon="facebook"/></li>
							<li><Icon icon="instagram"/></li>
							<li><Icon icon="linkedin"/></li>
							<li><Icon icon="youtube"/></li>
							<li><Icon icon="gmail"/></li>
						</ul>
					</div>
					
					<div className="col-md-8">
						<div className="row">
							<ul className="col-md-3 my-3 list-style-none">
								<li><A href="/#">Terms</A></li>
								<li><A href="/#">Privacy Policy</A></li>
								<li><A href="/#">Terms</A></li>
								<li><A href="/#">Privacy Policy</A></li>
							</ul>

							<ul className="col-md-3 my-3 list-style-none">
								<li><A href="/#">Terms</A></li>
								<li><A href="/#">Privacy Policy</A></li>
								<li><A href="/#">Terms</A></li>
								<li><A href="/#">Privacy Policy</A></li>
							</ul>

							<ul className="col-md-3 my-3 list-style-none">
								<li><A href="/#">Terms</A></li>
								<li><A href="/#">Privacy Policy</A></li>
								<li><A href="/#">Terms</A></li>
								<li><A href="/#">Privacy Policy</A></li>
							</ul>

							<ul className="col-md-3 my-3 list-style-none">
								<li><A href="/#">Terms</A></li>
								<li><A href="/#">Privacy Policy</A></li>
								<li><A href="/#">Terms</A></li>
								<li><A href="/#">Privacy Policy</A></li>
							</ul>
						</div>
					</div>

				</div>
			</div>
			
			<div className="tkr-footer-bottom mt-5">
				<div className="container justify-content-center">
					
					<span>© { new Date().getFullYear() } Sam Wyness</span>

				</div>
			</div>
		</footer>
	);
};
export default Footer;