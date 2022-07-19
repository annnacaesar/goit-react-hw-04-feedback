import styled from "styled-components";

export const FeedbackContainer = styled.div `
	padding: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
`

export const Button = styled.button`
padding: 10px;
font-size: 28px;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);

&:not(:last-child){
	margin-right: 15px;

}

&:hover,
&:focus{
	background-color: rgb(0, 190, 218);
	color: #fff;
}
`