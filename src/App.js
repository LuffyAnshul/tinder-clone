import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import { Chats, ChatScreen } from './screens';
import { Header, SwipeButtons, TinderCards } from './components';

function App() {
	return (
		<div className="App">

			<Router>
				<Switch>
					<Route path="/chat/:person" >
						<Header backButton="/chat" />
						<ChatScreen />
					</Route>

					<Route path="/chat" >
						<Header backButton="/" />
						<Chats />
					</Route>

					<Route path="/" >
						<Header />
						<TinderCards />
						<SwipeButtons />
					</Route>
				</Switch>
				{/* Tinder Card */}

				{/* Buttons Below Tinder Cards */}

				{/* Chat Screens */}
				{/* Individual Chat Screen */}
			</Router>

		</div>
	);
}

export default App;
