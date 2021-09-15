import React from 'react'
import styled from 'styled-components'
function Title({ title, id}) {
    return (
        <TitleContainer>
            <div className="title-content-container" id={id}>
                <h1>{title}</h1>
            </div>
        </TitleContainer>
    )
}

const TitleContainer = styled.div`
        width: 100%;
        display: flex;
        align-items: center;
        .title-content-container {
            display: flex;
            align-items: center;
            border-bottom: 2px solid white;

            h1 {
                font-size: 3rem;
                font-weight: 400;
            }
            
        }
    
`;
export default Title
