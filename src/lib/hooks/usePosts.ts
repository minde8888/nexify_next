import { useEffect } from 'react';
import {  useSelector } from 'react-redux';
import { fetchPosts, createPost, updatePost, deletePost } from '../features/posts/postSlice';
import { RootState } from '../store';
import { Post } from '../types/Post';
import { useAppDispatch } from '../store';

// Define a type for the hook's return value
interface UsePosts {
  posts: Post[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  addPost: (postData: Post) => void;
  editPost: (id: string, postData: Partial<Post>) => void;
  removePost: (id: string) => void;
}

const usePosts = (): UsePosts => {
  const dispatch = useAppDispatch();
  const posts = useSelector((state: RootState) => state.posts.items);
  const status = useSelector((state: RootState) => state.posts.status);
  const error = useSelector((state: RootState) => state.posts.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPosts());
    }
  }, [status, dispatch]);

  const addPost = (postData: Post) => {
    dispatch(createPost(postData));
  };

  const editPost = (id: string, postData: Partial<Post>) => {
    dispatch(updatePost({ id, postData }));
  };

  const removePost = (id: string) => {
    dispatch(deletePost(id));
  };

  return {
    posts,
    status,
    error,
    addPost,
    editPost,
    removePost,
  };
};

export default usePosts;
