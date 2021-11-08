import React from 'react';
import {Container, Row} from "react-bootstrap";
import BirdeyeTestimonialCard from "./BirdeyeTestimonialCard";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 750px;
  border: 8px solid #4587a4;
  padding: 25px;
  border-radius: 5px;

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  
  @media (max-width: 768px) {
    flex-wrap: wrap;
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

function TestimonialSection(props) {
    return (
        <Row>
            <Container className="d-flex  justify-content-center">
                <StyledDiv>
                    <LeftDiv>
                        <h2>
                            What our patients are saying about us:
                        </h2>
                    </LeftDiv>
                    <div className="d-flex">
                        <BirdeyeTestimonialCard/>
                    </div>
                </StyledDiv>
            </Container>
        </Row>

    );
}

export default TestimonialSection;