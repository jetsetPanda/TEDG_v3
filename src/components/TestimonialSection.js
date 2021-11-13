import React from 'react';
import {Container, Row} from "react-bootstrap";
import BirdeyeTestimonialCard from "./BirdeyeTestimonialCard";
import styled from "styled-components";

import homeBanner from '../assets/images/office-washed.png';

const StyledDiv = styled.div`
  width: 750px;
  border: 8px solid #4587a4;
  margin: 30px;
  padding: 35px 25px;
  border-radius: 15px;

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  background-color: rgba(255, 255, 255, 1);

  @media (max-width: 768px) {
    margin: 15px ;
    flex-wrap: wrap;
    padding: 15px 5px;
  border: 5px solid #4587a4;
  }
`
const LeftDiv =styled.div`
  padding-top: 3rem;
  padding-left: 20px;
  color: #51a8d3;

  @media (max-width: 768px) {
    padding-top: 0;
    padding-left: 0px;
    padding-bottom: 10px;
  }
`

const StyledRow = styled(Row)`

`

function TestimonialSection(props) {
    return (
        <div className="my-3 my-md-5" style={{backgroundImage: `url(${homeBanner})`}}>
            <h1 className="text-center my-4 mt-md-5 mb-md-0">Testimonials</h1>
            <StyledRow className="py-md-5">
                <Container className="d-flex  justify-content-center">
                    <StyledDiv>
                        <LeftDiv>
                            <h2 className="text-center text-md-start">
                                What our patients are saying about us:
                            </h2>
                        </LeftDiv>
                        <div className="d-flex">
                            <BirdeyeTestimonialCard/>
                        </div>
                    </StyledDiv>
                </Container>
            </StyledRow>

        </div>

    );
}

export default TestimonialSection;