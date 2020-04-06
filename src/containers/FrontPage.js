import React from 'react';

// Store
import { useCurrentPage } from 'store/actions/appActions';

// Components
import Content from 'components/Content';

const home_page_slug = __tkr__.settings.home_page_slug;

const FrontPage = () => {
  const current_page = useCurrentPage(home_page_slug);

  return (
    <div className="tkr-content">
      {!current_page.loading && !current_page.hasError && current_page.data && (
        <Content post={current_page.data} />
      )}
    </div>
  );
};

export default FrontPage;
