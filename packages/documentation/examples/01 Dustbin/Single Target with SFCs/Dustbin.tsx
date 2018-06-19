import * as React from 'react'
import {
	DropTarget,
	DropTargetConnector,
	DropTargetMonitor,
	ConnectDropTarget,
} from 'react-dnd'
import ItemTypes from '../Single Target/ItemTypes'

const style: React.CSSProperties = {
	height: '12rem',
	width: '12rem',
	marginRight: '1.5rem',
	marginBottom: '1.5rem',
	color: 'white',
	padding: '1rem',
	textAlign: 'center',
	fontSize: '1rem',
	lineHeight: 'normal',
	float: 'left',
}

export interface DustbinProps {
	canDrop?: boolean
	isOver?: boolean
	connectDropTarget?: ConnectDropTarget
}

const Dustbin: React.SFC<DustbinProps> = ({
	canDrop,
	isOver,
	connectDropTarget,
}) => {
	const isActive = canDrop && isOver

	let backgroundColor = '#222'
	if (isActive) {
		backgroundColor = 'darkgreen'
	} else if (canDrop) {
		backgroundColor = 'darkkhaki'
	}

	return connectDropTarget
		? connectDropTarget(
				<div style={{ ...style, backgroundColor }}>
					{isActive ? 'Release to drop' : 'Drag a box here'}
				</div>,
		  )
		: null
}

export default DropTarget(
	ItemTypes.BOX,
	{
		drop() {
			return { name: 'Dustbin' }
		},
	},
	(connect: DropTargetConnector, monitor: DropTargetMonitor) => ({
		connectDropTarget: connect.dropTarget(),
		isOver: monitor.isOver(),
		canDrop: monitor.canDrop(),
	}),
)(Dustbin)
