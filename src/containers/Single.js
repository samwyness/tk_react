import React from 'react';
import { usePath } from 'hookrouter';

// Store
import { useCurrentPage } from 'store/actions/appActions';

// Components
import Content from 'components/Content';

const Single = () => {
	const current_path = usePath().split('/')[1];
	const current_page = useCurrentPage(current_path);
	const post_type = (current_page.data) ? current_page.data.post_type : false;

	return(

		<div className={`tkr-content ${ post_type ? post_type : '' }`}>
			<div className="container">

				{ current_page.loading &&
                    <p>Loading...</p>
				}

				{ !current_page.loading && !current_page.hasError && current_page.data &&
                    <Content post={ current_page.data } />
				}

			</div>
		</div>
	);
};

export default Single;
