const { 
	wp_api: WP_API,
	tkr_api: TKR_API
} = __tkr__.urls;

export default class Menus {
	static getAll() {
		return new Promise((resolve, reject) => {
			fetch(`${WP_API}/menus`)
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
			fetch(`${WP_API}/menus/${id}`)
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
    
	static getByLocation(location) {		
		return new Promise((resolve, reject) => {
			fetch(`${TKR_API}/menus/locations/${location}`)
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