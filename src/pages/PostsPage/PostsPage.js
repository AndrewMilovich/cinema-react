import React, {useEffect, useState} from 'react';
import {postService} from "../../service/post.service";
import Post from "../../components/Post/Post";

const PostsPage = () => {
    let [posts, setPosts] = useState([]);
    useEffect(() => {
        postService.getAll().then(value => setPosts([...value]))
    }, [])
    return (
        <div>
            <h1>Posts</h1>
            {posts.map(post=> <Post key={post.id} post={post}   />)}
        </div>
    );
};

export default PostsPage;