import React, { useEffect, useState } from 'react';
import { usePath } from 'hookrouter';

// Services
import { Posts } from 'utils/services/tkr';

// Components
import Content from 'components/Content';

const Single = () => {
	const current_path = usePath().split('/')[1];
	const [post, setCurrentPost] = useState(null);

	useEffect(() => {
		// Gets the current post data from the TKR Service
		const fetchPost = async () => {			
			setCurrentPost(null);
			
			await Posts.getBySlug(current_path)
				.then(response => {
					setCurrentPost(response);
				})
				.catch(err => {
					// TODO: send to 404
					throw new Error(err);
				});
		};
		
		
		if (!post || post.slug !== current_path) {
			fetchPost();
		}
	}, [current_path, post]);
	
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

export default Single;