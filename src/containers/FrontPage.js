import React, { useEffect, useState } from 'react';

// Services
import { Posts } from 'utils/services/tkr';

// Components
import Content from 'components/Content';

const FrontPage = () => {
	const [post, setHomePage] = useState(null);

	useEffect(() => {
		// Gets the current post data from the TKR Service
		const fetchPost = async () => {			
			await Posts.getById(__tkr__.settings.home_page)
				.then(response => {
					setHomePage(response);
				})
				.catch(err => {
					// TODO: send to 404
					throw new Error(err);
				});
		};
		
		
		if (!post) {
			fetchPost();
		}
	}, [post]);
	
	return(
		<div className="tkr-content">
			<div className="container">

				{ !post &&
					<p>Loading...</p>
				}
				
				{ post &&
					<Content post={ post } />
				}
			
			</div>    
		</div>
	);
};

export default FrontPage;