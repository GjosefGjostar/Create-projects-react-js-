import React from 'react';
import Post from '../Post/Post';
import s from './MyPost.module.css'

const MyPost = (props) => {
	return (
		<div className={s.postBlock}>
			<h3>Myposts</h3>
			<div>
				<div>
					<textarea name="" id="" cols="30" rows="2"></textarea>
				</div>
				<div>
					<button>Add post</button>
				</div>
			</div>
			<div>
				<Post hi='Hi my fraind' like='10' />
				<Post hi='I also' like='1' />
			</div>
		</div>
	)
}

export default MyPost