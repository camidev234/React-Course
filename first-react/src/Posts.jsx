import { useState } from "react";
import PostService from "./services/PostService";
import { VscBug } from 'react-icons/vsc';

const Post = () => {
    const service = new PostService();
    const [posts, setPosts] = useState(service.getPosts());

    const fetchData = async () => {
        try {
            const response = await service.fetchAll();
            alert('fetching completed');
            setPosts(service.getPosts());
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <button onClick={fetchData}><VscBug/>Get data</button>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </>
    )
}

export default Post