import React from 'react';

// Store
import { useCurrentPage } from 'store/actions/appActions';

// Components
import Content from 'components/Content';

const Single = ({ post_slug }) => {
  const currentPage = useCurrentPage(post_slug);
  const post_type = currentPage.data ? currentPage.data.post_type : false;

  return (
    <div className={`tkr-content ${post_type ? post_type : ''}`}>
      {!currentPage.loading && !currentPage.hasError && currentPage.data && (
        <Content post={currentPage.data} />
      )}
    </div>
  );
};

export default Single;
