import React from 'react';
import { A } from 'hookrouter';

// Components
import Icon from 'components/Icon';

// Theme variables
const site_logo = __tkr__.settings.site_logo;
const site_title = __tkr__.settings.meta.title;
const social_menu = __tkr__.settings.menus.social_menu;

const Footer = () => {
	return(
		<footer className="tkr-footer">
			<div className="tkr-footer-top py-5">
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
								{ social_menu && social_menu.items.map((item, index) => (
									<li key={index}>
										<Icon icon={item.title}/>
										<A href={`${item.url.protocol}://${item.url.host}`}></A>
									</li>
								))}
							</ul>
						</div>

						<div className="tkr-footer-links col-md-8">
							<div className="row">

								<div className="col-md-3">
									<div className="tkr-footer-links-title">
										<h4 className="mt-0">Discover</h4>
									</div>

									<ul className="px-0 list-style-none">
										<li className="mb-2"><A href="/#">Terms</A></li>
										<li className="mb-2"><A href="/#">Privacy Policy</A></li>
										<li className="mb-2"><A href="/#">Terms</A></li>
										<li className="mb-2"><A href="/#">Privacy Policy</A></li>
									</ul>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>

			<div className="tkr-footer-bottom">
				<div className="container justify-content-center">

					<span>© { new Date().getFullYear() } Sam Wyness</span>

				</div>
			</div>
		</footer>
	);
};
export default Footer;
