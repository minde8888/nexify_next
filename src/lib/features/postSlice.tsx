import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Post } from '../types/Post';

interface PagedResponse {
    pageNumber: number;
    pageSize: number;
    post: Post[];
    length: number;
    totalPages: number;
    totalRecords: number;
}

interface PostState {
    data: PagedResponse;
    lastRequestStatus: boolean | null;
}

const initialState: PostState = {
    data: {
        pageNumber: 0,
        pageSize: 0,
        post: [],
        length: 0,
        totalPages: 0,
        totalRecords: 0
    },
    lastRequestStatus: null
};

const postsSlice = createSlice({
    name: 'posts',
    initialState,

    reducers: {
        fetchPosts: (state, action: PayloadAction<PagedResponse>) => {
            state.data = action.payload;
            state.lastRequestStatus = null;
            return state;
        },

        deletePost: (state, action: PayloadAction<string>) => {
            state.data.post = state.data.post.filter((item) => item.id !== action.payload);
            return state;
        },

        requestBlogStatus: (state, action: PayloadAction<boolean>) => {
            state.lastRequestStatus = action.payload;
            return state;
        }
    }
});

export const { getPosts, removePost, requestBlogStatus } = postsSlice.actions;

export default postsSlice.reducer;