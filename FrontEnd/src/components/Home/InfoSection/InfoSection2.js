import React from 'react'
import styled from 'styled-components';

const Section = styled.section`
width: 100%;
height: 100%;
background: #fff;
`;
const Container = styled.div`
padding: 0rem calc((100vw-1300px)/2);
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: 600px;

@media screen and (max-width: 768px){
    grid-template-columns: 1fr;
}
`;
const ColumnLeft = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
line-height: 1.4;
padding: 1rem 2rem;
order: ${({ reverse }) => (reverse ? '2' : '1')};

h1{
    margin-bottom: 2rem;
    padding-left: 0rem;
}
p{
    margin-bottom: 2rem;
    padding-left: 0rem;
    padding-right: 2.5rem;
    font-size: 1.1rem;
}
`;
const ColumnRight = styled.div`
padding: 1rem 2rem;
order: ${({ reverse }) => (reverse ? '2' : '1')};
display: flex;
justify-content: center;
align-items: center;

@media screen and (max-width: 768px){
    order: ${({ reverse }) => (reverse ? '2' : '1')};
}

img{
    width: 80%;
    height: 80%;
    object-fit: contain;

    @media screen and (max-width: 800px){
        width: 100%;
        height: 100%;
    }
}
`;

const InfoSection2 = ({ heading, paragraphOne, paragraphTwo, reverse, image }) => {
    return (
        <Section >
            <Container>
                <ColumnRight reverse={reverse}>
                    <img src={image} alt="info" />
                </ColumnRight>
                <ColumnLeft>
                    <h1>{heading}</h1>
                    <p>{paragraphOne}</p>
                    <p>{paragraphTwo}</p>
                    {/* <Button>label</Button> */}
                </ColumnLeft>


            </Container>
        </Section>
    )
}

export default InfoSection2