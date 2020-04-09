import React from 'react';

// Utils
import { themeSettings } from 'utils/theme';

// Store
import { useCurrentPage } from 'store/actions/appActions';

// Components
import Content from 'components/Content';

const { home_page_slug } = themeSettings;

const FrontPage = () => {
  const currentPage = useCurrentPage(home_page_slug);

  return (
    <div className="tkr-content">
      {!currentPage.loading && !currentPage.hasError && currentPage.data && (
        <Content post={currentPage.data} />
      )}
    </div>
  );
};

export default FrontPage;
