import * as React from 'react'
import Container from './Container'

export default class DustbinFC extends React.PureComponent {
	public render() {
		return (
			<div>
				<p>
					<b>
						<a href="https://github.com/react-dnd/react-dnd/tree/master/packages/documentation/src/examples/01%20Dustbin/Single%20Target%20with%20SCs">
							Browse the Source
						</a>
					</b>
				</p>
				<p>This is the same simple example using React Function Components</p>
				<Container />
			</div>
		)
	}
}
