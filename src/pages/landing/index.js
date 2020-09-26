import React from "react";
import styled from "styled-components";


const StyledPageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const LandingPage = () => {
    return (
        <StyledPageContainer>
            <h1>Simple React Boiler Plate</h1>
        </StyledPageContainer>
    );
};

export default LandingPage;
