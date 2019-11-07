import React, { useState, useEffect, useRef } from 'react';
import { A } from 'hookrouter';

// Store
import { useMainMenu } from 'store/actions/appActions';

// Components
import Button from 'components/Button';
import ButtonLink from 'components/ButtonLink';
import Icon from 'components/Icon';

// Theme variables
const site_logo = __tkr__.settings.site_logo;
const site_title = __tkr__.settings.meta.title;

const scrollToTop = () => {
	window.scroll({
		top: 0,
		behavior: 'smooth'
	});
};

const Header = () => {
	const [scrolled, setScrolled] = useState(false);
	const [expanded, setExpanded] = useState(false);
	const top_nav = useRef(null);
	const scroll_button = useRef(null);
	
	const main_menu = useMainMenu();
	
	let header_class = 'tkr-header';
	let mobile_drawer_btn_icon = 'menu';
	
	const onScroll = () => {		
		const top_nav_height = top_nav.current.getBoundingClientRect().height;

		if (pageYOffset > (top_nav_height * 0.25)) {
			setScrolled(true);
		} else {
			setScrolled(false);
		}
	};

	// Handle on scroll
	useEffect(() => {
		window.addEventListener('scroll', onScroll);

		return () => {
			window.removeEventListener('scroll', onScroll);
		};
	});
	
	if (scrolled) {
		header_class = `${header_class} scrolled`;
	}
	
	if (expanded) {
		header_class = `${header_class} expanded`;
		mobile_drawer_btn_icon = 'x';
	}	

	return(
		<header className={ header_class } ref={ top_nav }>
			
			<div className="container d-flex justify-content-between">
				
				<Button className="tkr-header-btn tkr-mobile-drawer-btn" icon={mobile_drawer_btn_icon} onClick={ () => setExpanded(!expanded) }/>
					
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

				<Button className="tkr-header-btn tkr-action-btn" icon="phone"/>
					
			</div>
			
			{/* <div className="tkr-mobile-drawer">
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

				<nav className="tkr-main-menu">
					<ul>
						{ main_menu && main_menu.items && main_menu.items.filter(item => item.status === 'publish').map((item, index) => (
							<li key={ index }>													
								<ButtonLink href={ item.url.path }>
									{ item.title }
								</ButtonLink>
							</li>
						)) }
					</ul>
				</nav>
			</div> */}

			<span 
				ref={ scroll_button }
				className={`tkr-scroll-arrow ${ scrolled ? 'visible' : '' }`} 
				onClick={ scrollToTop }
			>
				<Icon icon="arrow-up"/>
			</span>

		</header>
	);
};

export default Header;