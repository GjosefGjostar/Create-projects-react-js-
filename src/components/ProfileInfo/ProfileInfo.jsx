import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
	return (
		<div className={s.content}>
			<div>
				<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4dmsYSNKQTnRVt7kHvDyqI_3qZmTc6Ei68w&s' className={s.img}></img>
			</div>
			<div className={s.descriptionBlock}>
				ava + description</div>
		</div>
	)
}

export default ProfileInfo