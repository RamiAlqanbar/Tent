import React from 'react'
import { useHistory } from 'react-router-dom'

export const Navigation = () => {
	const history = useHistory()

	return (
		<div className="navigationBarWrapper">
			<h1 className="title">React Tentamen - April 2021</h1>
			<span className="span1" onClick={() => history.push('/uppgift1')}>Uppgift 1 <br />(För Godkänt)</span>
			<span className="span2" onClick={() => history.push('/uppgift2')}>Uppgift 2 <br />(För Godkänt)</span>
			<span className="span3" onClick={() => history.push('/uppgift3')}>Uppgift 3 <br />(För Väl Godkänt)</span>
		</div>
	)
}
