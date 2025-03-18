import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css'

const DialogItem = (props) => {
	return (
		<div className={s.dialog + ' ' + s.active}>
       <NavLink to={'/dialog/' + props.id}>{props.name}</NavLink>
		</div>
	)
}

const Message = (props) => {
	return (
		<div className={s.message}>{props.message}</div>
	)
}

const Dialogs = (props) => {
	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				<DialogItem name='Gjosef' id='1'/>
				<DialogItem name='Trump' id='2'/>
				<DialogItem name='Big_nigga' id='3'/>
				<DialogItem name='Sasha' id='4'/>
				<DialogItem name='Valera' id='5'/>
			
			</div>
			<div className={s.messages}>
				<Message message='Hi' />
				<Message message='Where my coca-cola??' />
				<Message message='Bed and you' />
				<Message message='I not give you 100 money' />
				<Message message='Go to drink bear' />
			</div>
		</div>
	);
};

export default Dialogs