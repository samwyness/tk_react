const {
	// wp_api: WP_API,
	tkr_api: TKR_API
} = __tkr__.urls;

export default class Posts {
	static getAll() {
		return new Promise((resolve, reject) => {
			fetch(`${TKR_API}/posts`)
				.then(res => {
					if (!res.ok) {
						throw Error(res.json);
					}

					return res.json();
				})
				.then(response => resolve(response))
				.catch(err => reject(err));
		});
	}

	static getById(id) {
		return new Promise((resolve, reject) => {
			fetch(`${TKR_API}/posts/id/${id}`)
				.then(res => {
					if (!res.ok) {
						throw Error(res.json);
					}

					return res.json();
				})
				.then(response => resolve(response))
				.catch(err => reject(err));
		});
	}

	static getBySlug(slug) {
		return new Promise((resolve, reject) => {
			fetch(`${TKR_API}/posts/${slug}`)
				.then(res => {
					if (!res.ok) {
						throw Error(res.json);
					}

					return res.json();
				})
				.then(response => resolve(response))
				.catch(err => reject(err));
		});
	}
}
