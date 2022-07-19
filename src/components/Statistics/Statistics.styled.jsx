import styled from "styled-components";

export const Container  = styled.div `
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

export const List = styled.ul`
padding: 20px;
font-size: 22px;
`

export const Item = styled.li`

&:not(:last-child){
	margin-bottom: 20px;
}
`
