import React from 'react';

// Components
import ImageSet from 'components/ImageSet';

const Content = props => {
    const post = props.post;

    return (
        <article className="tkr-post">
            <div className="container-fluid px-0">
                {post && post.featured_media.sizes.full && (
                    <div className="tkr-entry-thumbnail">
                        <ImageSet
                            src={post.featured_media.sizes.full}
                            meta={post.featured_media.meta}
                        />
                    </div>
                )}
            </div>

            <div className="container">
                <header className="tkr-entry-header">
                    {post && post.title && (
                        <h1 className="tkr-entry-title">{post.title}</h1>
                    )}
                </header>
                {post && post.content && (
                    <div
                        className="tkr-entry-content"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    ></div>
                )}
            </div>
        </article>
    );
};

export default Content;
