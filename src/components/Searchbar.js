import React from 'react'

export default function Searchbar() {
  return (
	<div className='searchbar'>
		<div className="sBarLogo">Store</div>
		<div className="searchBox">
			<svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.5 0C12.9183 0 16.5 3.58172 16.5 8C16.5 9.8486 15.8703 11.5487 14.8174 12.9033L18.207 16.293L18.2754 16.3691C18.5957 16.7619 18.5731 17.3409 18.207 17.707C17.8409 18.0731 17.2619 18.0957 16.8691 17.7754L16.793 17.707L13.4033 14.3174C12.0487 15.3703 10.3486 16 8.5 16C4.08172 16 0.5 12.4183 0.5 8C0.5 3.58172 4.08172 0 8.5 0ZM8.5 2C5.18629 2 2.5 4.68629 2.5 8C2.5 11.3137 5.18629 14 8.5 14C11.8137 14 14.5 11.3137 14.5 8C14.5 4.68629 11.8137 2 8.5 2Z" fill="#2E2F2E"/>
</svg>

			<input type="text" placeholder='Search for Kuntal Care'/>
			<div className="bag">
			<svg id='bagIco' width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.5 2.83203L4.25 8.4987V28.332C4.25 29.0835 4.54851 29.8041 5.07986 30.3355C5.61122 30.8669 6.33189 31.1654 7.08333 31.1654H26.9167C27.6681 31.1654 28.3888 30.8669 28.9201 30.3355C29.4515 29.8041 29.75 29.0835 29.75 28.332V8.4987L25.5 2.83203H8.5Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4.25 8.5H29.75" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22.6668 14.168C22.6668 15.6709 22.0698 17.1122 21.0071 18.1749C19.9444 19.2376 18.5031 19.8346 17.0002 19.8346C15.4973 19.8346 14.0559 19.2376 12.9932 18.1749C11.9305 17.1122 11.3335 15.6709 11.3335 14.168" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

		</div>
		</div>
	</div>
  )
}
