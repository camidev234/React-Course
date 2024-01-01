import axios from 'axios';


class PostService {
    constructor() {
        this.posts = [];
    }

    async fetchAll() {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            this.posts = response.data;
        } catch (error) {
            console.error(error);
        }
    }

    getPosts() {
        return this.posts;
    }
}

export default PostService