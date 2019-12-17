import React from 'react';
import { A } from 'hookrouter';

// Store
import { usePosts } from 'store/actions/appActions';

// Components
import ImageSet from 'components/ImageSet';

const hasThumbnail = (post) => (post && post.featured_media.id);

const setPostClassName = (post) => {
	let className = 'tkr-post d-lg-flex flex-lg-row'; // default classes

	// Post has thumbnail class
	className = hasThumbnail(post) ? `${className} has-thumbnail` : className;

	return className;
};

const Blog = () => {
	const posts = usePosts();

	return(
		<div className="tkr-content-blog">
			<div className="container">
				<div className="row">

					{ posts.loading &&
                        <p>Loading...</p>
					}

					{ !posts.loading && !posts.hasError && posts.data.map((post) => (
						<div key={post.id} className="col-12 col-md-6 col-lg-12 p-0 px-md-3">

							<article className={ setPostClassName(post) }>
								{ post && hasThumbnail(post) &&
									<div className="tkr-entry-thumbnail">
										<ImageSet src={ post.featured_media.sizes.full } meta={ post.featured_media.meta } />
									</div>
								}

								<div className="tkr-entry-meta">
									<header className="tkr-entry-header">
										<h2 className="tkr-entry-title">{ post && post.title }</h2>
									</header>

									<p className="tkr-entry-content" dangerouslySetInnerHTML={ { __html: post.excerpt } }></p>

									<A className="tkr-entry-link" href={ `/${post.slug}/` } alt={ post.title }>Read more..</A>
								</div>
							</article>

						</div>
					)) }

				</div>
			</div>
		</div>
	);
};

export default Blog;
