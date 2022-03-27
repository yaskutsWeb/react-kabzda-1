import React from "react";
import styles from "./Post.module.css";

const Post = (props) => {
	return (
		<div>
			<div className={styles.item}>
				<img
					src="https://images.vexels.com/media/users/3/129616/isolated/preview/fb517f8913bd99cd48ef00facb4a67c0-businessman-avatar-silhouette-by-vexels.png"
					alt=""/>
				<p>{props.message}</p>
				<span>{props.likeCount}</span>
			</div>
		</div>
	);
}

export default Post;