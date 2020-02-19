import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import 'bulma/css/bulma.css'
import './styles.scss'

// import and set up provider
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Reducer } from './reducers'

const store = createStore(Reducer)

const rootElement = document.getElementById('root')
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	rootElement
)
