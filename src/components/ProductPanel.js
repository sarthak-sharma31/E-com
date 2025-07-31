import React from 'react'
import ProductCards from './ProductCards';
import image7 from '../images/image7.png';
import image171 from '../images/image171.png';
import image174 from '../images/image174.png';

export default function ProductPanel(props) {
  return (
	<>
	<div className='proHeading'>{props.name}</div>
	<div className='productPanel'>
		<ProductCards name="Amrutam Kuntal care Hair Spa | Do- it yourself Hair Treatment" image={image7} amt="649.00" qty="200 ml" reviews={"(52)"}/>
		<ProductCards name="Amrutam Kuntal Care Herbal Shampoo | Healthy, Natural and Dynamic Hair" image={image171} amt="649.00" qty="200 ml" reviews={"(52)"}/>
		<ProductCards name="Amrutam Nari Sondarya Malt | Complete Care For Women's Health And Beauty" image={image174} amt="649.00" qty="200 ml" reviews={"(52)"}/>
		<div className="pNext">
			<svg width="25" height="16" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24.2071 8.70711C24.5976 8.31658 24.5976 7.68342 24.2071 7.29289L17.8431 0.928933C17.4526 0.538409 16.8195 0.538409 16.4289 0.928933C16.0384 1.31946 16.0384 1.95262 16.4289 2.34315L22.0858 8L16.4289 13.6569C16.0384 14.0474 16.0384 14.6805 16.4289 15.0711C16.8195 15.4616 17.4526 15.4616 17.8431 15.0711L24.2071 8.70711ZM0.5 8L0.5 9L23.5 9L23.5 8L23.5 7L0.5 7L0.5 8Z" fill="#A5A5A5"/>
</svg>

		</div>
	</div>
	</>
  )
}
