import React from 'react';
import Post from '../Post/Post';
import s from './Content.module.css'

const Cont = (props) => {
	return (
		<div className={s.content}>
		<div>
		<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4dmsYSNKQTnRVt7kHvDyqI_3qZmTc6Ei68w&s' className={s.img}></img>
		</div>
		<div>ava + description</div>
		<div>My post</div>
	   <Post hi='Hi my fraind  ' />
		<Post hi='I also ' />
		</div>
	)
}

export default Cont