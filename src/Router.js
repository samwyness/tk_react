import React from 'react';
import { useRoutes } from 'hookrouter';

// Utils
import { routes } from 'utils/routes';

import NotFound from 'containers/404';

const Router = () => {
  const routeMatch = useRoutes(routes);

  return routeMatch || <NotFound></NotFound>;
};

export default Router;
