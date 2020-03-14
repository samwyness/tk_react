import ApiService from 'utils/services/ApiService';

const { tkr_api: TKR_API } = __tkr__.urls;

const PostsService = new ApiService(TKR_API);

class Posts {
    constructor() {
        this.endpoint = 'posts';
    }

    getAll() {
        return PostsService.send(this.endpoint);
    }

    getById(id) {
        return PostsService.send(`${this.endpoint}/id/${id}`);
    }

    getBySlug(slug) {
        return PostsService.send(`${this.endpoint}/${slug}`);
    }

    getSingle(options) {
        const { id, slug } = options;

        // Prefer id over slug
        if (id) {
            return this.getById(id);
        } else if (slug) {
            return this.getBySlug(slug);
        }

        return null;
    }
}

export default Posts;
