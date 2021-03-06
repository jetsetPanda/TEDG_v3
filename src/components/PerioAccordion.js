import React from 'react';
import {Accordion, Row, Col} from "react-bootstrap";
import styled from "styled-components";
import PDFLink from "./UXElements/PDFLink";
import implantbg from '../files/Song-Post-Op-Implant-Bone-GraftV2.pdf';
import tissuegraft from '../files/Song-Post-Op-Tissue-GraftV2.pdf';
import lanap from '../files/Post-Op-LANAP.pdf';
import periogeneral from '../files/Post-Op-PerioV2.pdf';
import sinuslift from '../files/Song-Post-Op-Sinus-LiftV2.pdf';
import extractionssong from '../files/Song-Post-Op-ExtV2.pdf';
import crownlength from '../files/Post-Op-Crown-LengtheningV2.pdf';

const StyledAccHeader = styled(Accordion.Item)`
  background: #ffffff;
  color: #000000;
`



const PerioAccordion = (props) => (
    <div className="my-md-3 pb-5">
        <h2 className="my-md-5 text-center mb-4 mt-4">Patient Resources</h2>
        <Accordion>
            <StyledAccHeader eventKey="0">
                <Accordion.Header><strong>LANAP/PERIODONTAL SURGERY</strong></Accordion.Header>
                <Accordion.Body>
                <h6 className="py-3">
                        <PDFLink pdfFile={lanap} cta="Post-LANAP Diet Instructions PDF"/> 
                    </h6>
                    <h6 className="py-3">
                        <PDFLink pdfFile={periogeneral} cta="Post-Operative Care Instructions PDF"/> 
                    </h6>

                </Accordion.Body>
            </StyledAccHeader>

            <StyledAccHeader eventKey="1">
                <Accordion.Header><strong>CROWN LENGTHENING</strong></Accordion.Header>
                <Accordion.Body>
                <h6 className="py-3">
                        <PDFLink pdfFile={crownlength} cta="Post-Operative Instructions PDF"/> 
                    </h6>

                </Accordion.Body>
            </StyledAccHeader>

            <StyledAccHeader eventKey="2">
                <Accordion.Header><strong>EXTRACTIONS</strong></Accordion.Header>
                <Accordion.Body>
                <h6 className="py-3">
                        <PDFLink pdfFile={extractionssong} cta="Post-Operative Instructions PDF"/> 
                    </h6>

                </Accordion.Body>
            </StyledAccHeader>

            <StyledAccHeader eventKey="3">
                <Accordion.Header><strong>SINUS LIFT</strong></Accordion.Header>
                <Accordion.Body>
                <h6 className="py-3">
                        <PDFLink pdfFile={sinuslift} cta="Post-Operative Instructions PDF"/> 
                    </h6>

                </Accordion.Body>
            </StyledAccHeader>

            <StyledAccHeader eventKey="4">
                <Accordion.Header><strong>IMPLANT & BONE GRAFT</strong></Accordion.Header>
                <Accordion.Body>
                <h6 className="py-3">
                        <PDFLink pdfFile={implantbg} cta="Post-Operative Instructions PDF"/> 
                    </h6>

                </Accordion.Body>
            </StyledAccHeader>

            <StyledAccHeader eventKey="5">
                <Accordion.Header><strong>CONNECTIVE TISSUE GRAFT</strong></Accordion.Header>
                <Accordion.Body>
                <h6 className="py-3">
                        <PDFLink pdfFile={tissuegraft} cta="Post-Operative Instructions PDF"/> 
                    </h6>

                </Accordion.Body>
            </StyledAccHeader>

        </Accordion>





    </div>
   );

export default PerioAccordion;