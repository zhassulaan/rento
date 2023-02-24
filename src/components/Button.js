import React from 'react';
import styled from 'styled-components';

function Button({ text }) {
	return (
		<Wrapper className='btn'>
			{text}
		</Wrapper>
	);
}

const Wrapper = styled.button`
	width: 200px;
	height: 100%;
	font-size: 20px;
	font-weight: 500;
	color: var(--clr-white);
	background: var(--clr-primary-1);
	border: none;
	border-radius: 8px;
	padding: 12px 0;
`

export default Button;