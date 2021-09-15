import React from 'react'
import styled from 'styled-components'
function Card({ icon, heading, description }) {
    return (
        <CardContainer>
            <i class={icon}></i>
            <h2>{heading}</h2>
            <p>{description}</p>
        </CardContainer>
    )
}
const CardContainer = styled.div`
    width: 300px;
    height: 300px;
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #07002e;
    margin: 20px;
    transition: 0.2s ease-in-out;
    border-radius: 10px;

    &:hover {
        border-top: 8px solid #533bda ;
    }

    i {
        font-size: 3rem;
        color: #007bff;
    }

    p {
         text-align: center;
    }
`;
export default Card
