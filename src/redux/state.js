let renderEntireTree = ()=>{
	console.log(state);
};

export let state = {
	profilePage: {
		posts: [
			{id: 1, msg: "pashasdasdasda", likesCount: 25},
			{id: 2, msg: "andresadyJ", likesCount: 17},
			{id: 3, msg: "Romasdasa", likesCount: 0},
			{id: 4, msg: "sobaasdasdasken", likesCount: 104},
			{id: 5, msg: "Krakdasdasden", likesCount: 64},
		],
		newPostText: "itKamasutra"
	},
	dialogsPage: {
		messages: [
			{id: 1, msg: "pashasdasdasda"},
			{id: 2, msg: "andresadyJ"},
			{id: 3, msg: "Romasdasa"},
			{id: 4, msg: "sobaasdasdasken"},
			{id: 5, msg: "Krakdasdasden"},
		],
		dialogs: [
			{userID: 1, userName: "pasha"},
			{userID: 2, userName: "andreyJ"},
			{userID: 3, userName: "Roma"},
			{userID: 4, userName: "Sobaken"},
			{userID: 5, userName: "Kraken"},
		],
	},
	sidebar: {}
};

export let addPost = () => {
	const newPost = {
		id: 6,
		msg: state.profilePage.newPostText,
		likesCount: 21
	};
	state.profilePage.posts.push(newPost);
	state.profilePage.newPostText = "";
	renderEntireTree(state);
};

export let updateNewPostText = (newText) => {
	state.profilePage.newPostText = (newText);
	renderEntireTree(state);
};

export const subscribe = (observer) => {
	renderEntireTree = observer;
}