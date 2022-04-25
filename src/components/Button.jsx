
import styled from "styled-components";
// const Button = ({children, onClick}) =>{

//     return (
//         <button onClick={onClick} className="">{children}</button>
//     )
// }

const Button = styled.button`
    border : none;
    border-radius : 4px;
    padding : 10px;
    padding-top : 8px;
    text-align : center;
    background-color : ${(props) => (props.theme === "light" ? "rgb(2, 47, 245)" : "#02f523")};
    color : ${(props) => (props.theme === "light" ? "#02f523" : "rgb(2, 47, 245)")};
    margin : 5px;
    cursor : pointer;

    &:hover {
        box-shadow : #02f523 0 3px 8px;
    }
`

export { Button };