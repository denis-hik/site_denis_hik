import styled from "styled-components";

interface StyledProps {
    isVisible: boolean;
    customStyles?: string;
}

export const FadeBody = styled.div<StyledProps>`
    transition: all 0.7s ease-out;
    opacity: 0;
    transform: translateY(20px);

    ${({ isVisible }) =>
        isVisible && `
        opacity: 1;
        transform: translateY(0);
    `}


    ${({ customStyles }) =>
            customStyles && `
            ${customStyles}
        `}
`;