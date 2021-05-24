import React, { useState } from 'react'
import { Avatar } from '@material-ui/core';

import './ChatScreen.css';

function ChatScreen() {

	const [input, setInput] = useState('')

	const [messages, setMessages] = useState([
		{
			name: 'Ellen',
			image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNR7FvvC_9X1l2xqi2rdkStAHaSRMmg89O_g&usqp=CAU',
			message: 'Whats aup??'
		}, {
			name: 'Ellen',
			image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNR7FvvC_9X1l2xqi2rdkStAHaSRMmg89O_g&usqp=CAU',
			message: 'WHos aup??'
		}, {
			name: '',
			image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNR7FvvC_9X1l2xqi2rdkStAHaSRMmg89O_g&usqp=CAU',
			message: 'Hows aup??'
		}, 
	]);

	const handleSend = e => {
		e.preventDefault();

		setMessages([...messages, { message: input }]);
		setInput('')
	}

	return (
		<div>
			<h2>YOU MATCHED WITH ELLEN ON 10/08/2000</h2>
			{ messages.map(message => (
				message.name ? 
					(
						<div className="chatScreen__message" >
							<Avatar 
								className="chatScreen__image"
								alt={message.name}
								src={message.image}
							/>
							<p className="chatScreen__text" >{message.message}</p>
						</div>
					): (
						<div className="chatScreen__message" >
							<p className="chatScreen__textUser" >{message.message}</p>
						</div>
					)
				))
			}

			<form className="chatScreen__input" >
				<input 
					className="chatScreen__inputField"
					value={input}
					onChange={(e) => setInput(e.target.value)}
					type="text"
					placeholder="Type a message"
				/>
				<button 
					className="chatScreen__inputButton" 
					type="submit"
					onClick={handleSend}
				>	
					SEND
				</button>
			</form>

		</div>
	)
}

export default ChatScreen;