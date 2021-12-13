import React from 'react';
import {Accordion, Row, Col} from "react-bootstrap";
import styled from "styled-components";
import PDFLink from "./UXElements/PDFLink";
import implantbg from '../files/Song-Post-Op-Implant-Bone-Graft.pdf';
import tissuegraft from '../files/Song-Post-Op-Tissue-Graft.pdf';
import lanap from '../files/Lanap-Post-Op.pdf';
import periogeneral from '../files/Song-Post-Op-Perio-Surgery.pdf';

const StyledAccHeader = styled(Accordion.Item)`
  background: #ffffff;
  color: #000000;
`



const PerioAccordion = (props) => (
    <div className="my-md-3 pb-5">
        <h2 className="my-md-5 text-center mb-4 mt-4">Patient Resources</h2>
        <Accordion>
            <StyledAccHeader eventKey="0">
                <Accordion.Header><strong>LANAP</strong></Accordion.Header>
                <Accordion.Body>
                <h6 className="py-3">
                        <PDFLink pdfFile={lanap} cta="Post-Operative Instructions PDF"/> 
                    </h6>

                </Accordion.Body>
            </StyledAccHeader>

            <StyledAccHeader eventKey="1">
                <Accordion.Header><strong>IMPLANT & BONE GRAFT</strong></Accordion.Header>
                <Accordion.Body>
                <h6 className="py-3">
                        <PDFLink pdfFile={implantbg} cta="Post-Operative Instructions PDF"/> 
                    </h6>

                </Accordion.Body>
            </StyledAccHeader>


        </Accordion>





    </div>
   );

export default PerioAccordion;