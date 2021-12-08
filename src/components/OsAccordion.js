import React from 'react';
import {Accordion, Row, Col} from "react-bootstrap";
import styled from "styled-components";
import PDFLink from "./UXElements/PDFLink";
import implantbg from '../files/Post_Op_Implant_Bone_Graft.pdf';


const StyledAccHeader = styled(Accordion.Item)`
  background: #ffffff;
  color: #000000;
`


const OsAccordion = (props) => (
    <div className="my-md-3 pb-5">
        <h2 className="my-md-5 text-center mb-4 mt-4">Patient Resources</h2>
        <Accordion>


            <StyledAccHeader eventKey="0">
                <Accordion.Header><strong>Implant &amp; Bone Graft</strong></Accordion.Header>
                <Accordion.Body><h4>Post-Op Instructions</h4>
                <h6 className="py-3">
                        <PDFLink pdfFile={implantbg} cta="Download PDF"/> 
                    </h6>
                <ol>
                <li> <strong>DO NOT</strong> rinse today. Avoid extremely hot food and liquids. </li>
<li> <strong>Medication: </strong>
    Mild discomfort can be controlled with 2 Tylenol (or similar tablets) every 3-4 hours. Aspirin
    should <strong>NOT </strong>be used. If a PAIN RELIEVER has been prescribed, take only when necessary. If
    an antibiotic has been prescribed, take <strong>ALL</strong> medication to help prevent infection.</li>
<li> <strong>AVOID</strong> alcoholic beverages during the post-operative period, especially if you take
    medication.</li>
<li> <strong>AVOID</strong> smoking during the post-operative period.</li>
<li> To minimize swelling which may occur, apply an <strong>ice pack</strong> on your face next to the treated
    area. Leave it in place for 10 minutes and then remove it for 10 minutes. Repeat this routine.
    Do not use the ice pack (or application of) after 24 hours following the surgery. If swelling is
    severe and/or you feel feverish, please call the office. </li>
<li> Brush and floss the teeth well, but not in the treated area. Rinse with Listerine or prescribed
    rinse 2 times per day. </li>
<li> <strong>AVOID</strong> excessive exercise (jogging, swimming, tennis, etc.) for the next week. </li>
<li> Eat on the side OPPOSITE the sutures. Eating suggestion: fish, eggs, soup, cheese,
    chopped meat, baby food, cooked cereal, cooked vegetables, jell-O, soft fruits, and blended
    foods.</li>
<li> If bleeding occurs, <strong>DO NOT RINSE!</strong> Moisten a gauze pad or fresh tea bag with warm water.
    Place it over the area and hold firmly for 10-20 minutes without interruption. Repeat if
    necessary. </li>
<li> If you have questions or concerns, please call our office at <a href="tel:212-422-9229">(212) 422-9229</a>. </li>
</ol>
                </Accordion.Body>
            </StyledAccHeader>


 
        </Accordion>
    </div>

);

export default OsAccordion;