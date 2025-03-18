import React from 'react';
import MyPost from '../Mypost/Mypost';
import Post from '../Post/Post';
import ProfileInfo from '../ProfileInfo/ProfileInfo';
import s from './Content.module.css'

const Cont = (props) => {
	return (
		<div>
			<ProfileInfo />
			<MyPost />
		</div>
	)
}

export default Cont