import React from 'react';
import { A } from 'hookrouter';

// Store
import { useMainMenu } from 'store/actions/appActions';

// Components
import ButtonLink from 'components/ButtonLink';

// Theme variables
const site_logo = __tkr__.settings.site_logo;
const site_title = __tkr__.settings.meta.title;

const Header = () => {
	const main_menu = useMainMenu();

	return(
		<header id="top-nav" className="tkr-header">
			<div className="container d-flex justify-content-between align-items-center">
				
				<nav className="tkr-main-menu align-right">
					<ul className="list-style-none">
						{ (main_menu.loading || !main_menu.data) &&
								<li><ButtonLink href="">...</ButtonLink></li>
						}

						{ main_menu.data && main_menu.data.items && main_menu.data.items.filter(item => item.status === 'publish').map((item, index) => (
							<li key={ index }>													
								<ButtonLink href={ item.url.path }>
									{ item.title }
								</ButtonLink>
							</li>
						)) }
					</ul>
				</nav>

				<A href="/" className="tkr-site-branding">
					{ site_logo &&
						<span className="tkr-site-logo">
							<img src={ site_logo } />
						</span>
					}

					{ site_title &&
						<span className="tkr-site-title">
							<strong>{ site_title }</strong>
						</span>
					}			
				</A>
					
			</div>
		</header>
	);
};

export default Header;