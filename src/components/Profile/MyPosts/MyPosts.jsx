import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import AddPostForm from "./AddPostForm/AddPostForm";

const MyPosts = (props) => {
	const postsElements = props.posts.map(post => <Post key={post.id} message={post.msg} likeCount={post.likesCount}/>);

	return (
		<div className={styles.postsBlock}>
			<h2>
				my posts
			</h2>
			<div>
				<AddPostForm onSubmit={value => props.addPost(value.newPostText)}/>
			</div>
			<div className={styles.myPosts}>
				{postsElements}
			</div>
		</div>
	);
}

export default MyPosts;