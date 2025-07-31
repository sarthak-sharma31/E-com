import React from 'react'
import img01 from '../images/img01.png';

export default function FeatureBox(props) {
  return (
	<div className='featureBox'>
		<div className="fboxImg">
			<img src={img01} alt="" />
		</div>
		<div className="fBoxFeature">{props.text}</div>
	</div>
  )
}
