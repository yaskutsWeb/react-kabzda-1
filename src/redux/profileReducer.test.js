import {addPostActionCreator, deletePost, profileReducer} from "./profileReducer";
import React from 'react';

const state = {
	posts: [
		{id: 1, msg: "pashasdasdasda", likesCount: 25},
		{id: 2, msg: "andresadyJ", likesCount: 17},
		{id: 3, msg: "Romasdasa", likesCount: 0},
		{id: 4, msg: "sobaasdasdasken", likesCount: 104},
		{id: 5, msg: "Krakdasdasden", likesCount: 64},
	],
	profile: null,
	status: 'add me'
};

it('length of posts should be incremented', () => {
	const action = addPostActionCreator('yaProduction');
	const newState = profileReducer(state, action);
	expect(newState.posts.length).toBe(6);
});

it('message of new post should be correct', () => {
	const newPostText = 'yaProduction';
	const action = addPostActionCreator(newPostText);
	const newState = profileReducer(state, action);
	expect(newState.posts[5].msg).toBe(newPostText);
});

it('length after deleting should be decremented', () => {
	const action = deletePost(1);
	const newState = profileReducer(state, action);
	expect(newState.posts.length).toBe(4);
});

it('length after deleting non existing post should not change', () => {
	const action = deletePost(1000);
	const newState = profileReducer(state, action);
	expect(newState.posts.length).toBe(5);
});