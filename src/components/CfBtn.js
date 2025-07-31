import React from 'react'

export default function CfBtn(props) {
  return (
	<div className='cfBtn'>
			<div className="cfOut">
				<div className="cfIn">
					{props.svg}
				</div>
			</div>
			{props.type}
		</div>
  )
}
