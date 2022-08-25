import styled from "styled-components";

interface Props {
    width?: number
    fullWidth?: boolean
    fullHeight?: boolean
    center?: boolean;
    height?: number;
    color?: string;
    img?: string;
    gap?: number;
    bottom?: boolean
    fontSize?: number;
    padding?: number[];
    gradient?: boolean

}

interface PropsSelect {
    padding: number[];
}
export const Container = styled.div<Props>`
    
    ${props => props.center && `
        width: 90%;
        max-width: 120rem;
        max-width: ${props.width}rem;
        margin: 0 auto;
    `}

    ${props => props.fullWidth && `
        margin: 0 auto;
        width: 100%;
        max-width: ${props.width}rem;
    `}

    ${props => props.height && `height: ${props.height}rem;`}
    ${props => props.height && ` @media (min-width: 550px) {
        height: 70rem;
    }`}

    ${props => props.fullHeight && `
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    overflow-y: auto;

    @media (max-width: 550px) {
       background-image: unset;
    }
    `}

    ${props => props.color && `background-color: ${props.color}`}

    ${props => props.img && `background-image: linear-gradient(rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, .5) 50%, rgba(0, 0, 0, 1) 100%), url(${props.img}); background-repeat: no-repeat; background-size: cover; background-position: center;`}
    ${props => props.gradient && `
    background-image: linear-gradient(to top,rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, .5) 50%), url(${props.img});

    @media (min-width: 550px) {
        background-image: linear-gradient(to right,rgba(0, 0, 0, .8) 0%, rgba(0, 0, 0, .5) 50%), url(${props.img});
    }
    `}

    ${props => props.bottom && `border-bottom: .9rem solid #222;`}
`;

export const TopBar = styled.div<Props>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1.5rem;
    @media (min-width: 768px) {
        padding: 0 5rem;
    }
`;
export const Button = styled.button<Props>`
    width: fit-content;
    width: ${props => props.fullWidth && '100%'};
    font-size: 1.4rem;
    padding: .4rem .8rem;
    padding: ${props => props.padding?.[0]}rem ${props => props.padding?.[1]}rem;
    background-color: #e50914;
    color: #fff;
    border: none;
    border-radius: .2rem;
    cursor: pointer;
`;

export const Select = styled.select<PropsSelect>`
    background-color: transparent;
    color: #fff;
    font-size: 1.6rem;
    border-radius: .5rem;
    padding: ${props => props.padding[0]}rem  ${props => props.padding[1]}rem;
`;

export const Option = styled.option<Props>`
    color: #000;
    font-size: 1.5rem;
`;

export const Flex = styled.div<Props>`
    display: flex;
    gap: ${props => props.gap}rem;
`;

export const Title = styled.h3<Props>`
    font-size: ${props => props.fontSize}rem;
`;