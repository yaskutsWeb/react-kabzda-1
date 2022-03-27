import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

	const postsElements = props.posts.map(post => <Post key={post.id} message={post.msg} likeCount={post.likesCount}/>);

	let newPostMsg = React.createRef();

	const addPost = () => {
		props.addPost();
	};

	const onPostChange = () =>{
		const msg = newPostMsg.current.value;
		props.updateNewPostText(msg);
	};

	return (
		<div className={styles.postsBlock}>
			<h2>
				my posts
			</h2>
			<div>
				<div>
					<textarea onChange={onPostChange} ref={newPostMsg} value={props.newPostText}/>
				</div>
				<div>
					<button onClick={addPost}>Add post</button>
				</div>

			</div>
			<div className={styles.myPosts}>
				{postsElements}
			</div>
		</div>
	);
}

export default MyPosts;