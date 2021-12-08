import React from 'react';
import {Accordion, Row, Col} from "react-bootstrap";
import styled from "styled-components";
import PDFLink from "./UXElements/PDFLink";
import implantbg from '../files/Post_Op_Implant_Bone_Graft.pdf';
import tissuegraft from '../files/Post_Op_Tissue_Graft.pdf';


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


            <StyledAccHeader eventKey="1">
                <Accordion.Header><strong>Tissue Graft</strong></Accordion.Header>
                <Accordion.Body><h4>Post-Op Instructions</h4>
                <h6 className="py-3">
                        <PDFLink pdfFile={tissuegraft} cta="Download PDF"/> 
                    </h6>
                <ol>
                <li> Do not eat anything or drink hot fluids until the numbness has worn off to avoid injury from accidental biting or burning.  </li>
                <li> No vigorous rinsing, drinking through a straw, or spitting for 3 days so the blood clot will not be disturbed. </li>
                <li> Today, rest as much as possible with your head elevated. No vigorous exercising for 3 days.  </li>
                <li> Slight bleeding is normal for several hours following surgery. If persistent bleeding occurs,place a wet tea bag on the involved area and apply direct pressure for 15-20 continuous
    minutes. Repeat as necessary.  </li>
                <li> Do not pull back the lips or cheeks to look at the area as this can disturb the surgical site and
    increase complications.  </li>
                <li> Do not eat by the surgical area for 1 week. Soft nutritious foods will be necessary for the first
    few days. Avoid acidic, spicy, hot (in temperature), and crunchy foods. Drink plenty of fluids.  </li>
<li> Do not use tobacco or drink alcohol as these will delay healing.  </li>
<li> Swelling can be lessened by placing a cold compress on the face and alternating on and off
    for 20 minutes during the first 72 hours.  </li>
<li> Take all medications the doctor has prescribed for you according to directions.  </li>
<li> Starting 24 hours after surgery, gently rinse your mouth with ¼ teaspoon of salt in 8 ounces
      of warm water 3 times a day.  </li>
<li> After periodontal treatment, proper oral hygiene must be maintained in the surgical area to
     aid in healing. After 1 week, carefully brush the teeth while avoiding the gums in the area of
     surgery. The gums and lower parts of the teeth should be cleaned with a dampened piece of
     cotton. Gentle flossing can be resumed in 2-3 weeks. Regular brushing can be resumed after
     3 weeks.  </li>
<li> After periodontal surgery, sensitivity of the teeth may occur. This is remedied by maintaining
      proper oral hygiene and by the use of specially formulated sensitive toothpaste, such as
      Sensodyne. </li>
<li> If a periodontal pack has been placed in your mouth, do not remove it. The pack should
      remain in place for 1 week. If the pack comes off before this time, it is not an emergency, but
      the doctor should be notified.  </li>
<li> Return for your appointment to have the periodontal pack and any sutures removed. If the
      sutures loosen or come out within 3 days, please inform the office.  </li>
<li> If you have questions or concerns, please call our office at <a href="tel:212-422-9229">(212) 422-9229</a>. </li>
</ol>
                </Accordion.Body>
            </StyledAccHeader>

        </Accordion>
    </div>

);

export default OsAccordion;