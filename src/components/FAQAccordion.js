import React from 'react';
import {Accordion, Row, Col} from "react-bootstrap";
import styled from "styled-components";
import PDFLink from "./UXElements/PDFLink";
import zoompre from '../files/ZOOM-Pre-Op.pdf';
import zoompost from '../files/ZOOM-Post-Op.pdf';


const StyledAccHeader = styled(Accordion.Item)`
  background: #ffffff;
  color: #000000;
`


const FAQAccordion = (props) => (
    <div className="my-md-3 pb-5">
        <h2 className="my-md-5 text-center mb-4 mt-4">Patient Resources</h2>
        <Accordion>
            <StyledAccHeader eventKey="0">
                <Accordion.Header><strong>ZOOM! Teeth Whitening</strong></Accordion.Header>
                <Accordion.Body>
               {/* <h3>Pre-Op Information</h3> */}
                <h6 className="py-3">
                        <PDFLink pdfFile={zoompre} cta="Pre-Operative Instructions PDF"/> 
                    </h6>
                    <h6 className="py-3">
                        <PDFLink pdfFile={zoompost} cta="Post-Operative Instructions PDF"/> 
                    </h6>
             {/*   ZOOM! In-Office Teeth Whitening is a procedure designed to lighten the color of teeth using a combination of a hydrogen peroxide gel and a specially designed light to produce the maximum whitening results in the shortest time possible. Tooth shades will be assessed before and after. ZOOM! results will vary from person to person and can regress due to a variety of circumstances. Almost all natural teeth can benefit from ZOOM! whitening, and a significant amount of whitening can be achieved in most cases. ZOOM! whitening is not intended to lighten artificial teeth, caps, crowns, veneers, porcelain, composite, or other restorative materials. People with darkly stained yellow or yellow-brown teeth frequently achieve better results than those with gray or bluish-gray teeth. Teeth with multiple colorations, bands, splotches, or spots due to tetracycline use or fluorosis often do not whiten as well and may need multiple treatments or may not lighten at all. ZOOM! is not recommended for pregnant or lactating women. 
                <br/><br/><strong>
                It is recommended that one week prior to whitening, patients should use a desensitizing toothpaste such as sensodyne and take Ibuprofen the day oftheir appointment to help reduce sensitivity. </strong>
                 <br/><br/>
                During the first 24-hour period after whitening, patients may still experience some sensitivity or tooth pain. This is normal and is usually mild, but it may be more noticeable in people prone to tooth sensitivity. Continue to take Ibuprofen for any post operative discomfort. Any areas of gum recession will be covered with a protective barrier prior to ZOOM! treatment. Your lips, cheeks, and gums will also be protected but may experience         some areas of inflammation due to inadvertent gel exposure. This is temporary and will subside in a few days. After whitening, it is natural for teeth           to regress somewhat in their shading. This regression is very gradual but can be accelerated by frequent exposure to various staining agents. Teeth        naturally stain with time, so patients also have the option of in-home use trays to extend the benefits of the whitening process or redoing ZOOM! in         the future.  
                <br/><br/>
                For the first 48 hours after treatment, care should be given to avoid consuming dark foods and drinks. 
                <br/><br/><br/><br/>
                
                <h3>Post-Op Information</h3>
                <h6 className="py-3">
                        <PDFLink pdfFile={zoompost} cta="Download PDF"/> 
                    </h6>
                Congratulations on completing the ZOOM! Whitening process! Now that your teeth are significantly whiter, there are a few guidelines            to help maintain the look of your new smile. The teeth have a protective layer called the protein pellicule. This layer contains the surface dental             stains and is removed during ZOOM! treatments. It takes 12-24 hours for the barrier to fully develop again. First, use the custom trays at home with        the provided supplemental sealer/whitener as indicated during the appointment. During this period, we also ask that you avoid certain staining foods             and products. 
                <br/><br/>
                Below is a list of what you <strong>CAN</strong> and <strong>CANNOT</strong> eat or drink after the procedure. You do not want to eat any food with color (anything that would stain a white shirt) for 24 hours after the treatment.
                <br/><br/>
                <Row>
                    <Col><strong>SAFE TO EAT OR DRINK:</strong><br/>					
                Drinks: milk, water, clear soda	<br/>			
                Fruits: bananas, apple (no peel)<br/>				
                White bread or flour tortillas<br/>			 		
                Plain yogurts, white cheese, sour cream<br/>			
                Cottage cheese, white rice, baked potato<br/>			
                Plain pasta and white sauce<br/>					
                Turkey or skinless breast<br/>					
                <br/></Col>

                <Col><strong>AVOID:</strong><br/>
                Red wine, dark colas, coffee <br/>
                Grapes or any fruit with <br/>
                Mustard or <br/>
                Red <br/>
                Soy sauce or steak <br/>
                No smoking and no <br/>
                Red meat (steak or hamburger)<br/>
                <br/></Col>
                </Row>
                Additional ways to maintain your sparkling ZOOM! Smile:
                <br/><br/>
                <ul>
                    <li>Avoid staining-related habits.</li>
               <li> Use an automated toothbrush.</li>
                <li>Seek regular professional dental hygiene care to maintain oral health, to keep staining to a minimum and to determine the need for whitening touch-ups.</li>
               <li> Continue to practice good oral hygiene including thorough tooth brushing, flossing to remove debris from between the teeth and tongue cleaning. Your dental professional will assist you in selecting the products to maintain not only a bright, white smile, but a healthy one as well. </li></ul>
 
                You may experience some tooth sensitivity during this period. To prevent this, take 600 mg of Ibuprofen (3 tabs of regular Advil or Motrin) every 4             hours for 24 hours. We also recommend that you brush your teeth with sensitive toothpaste such as Sensodyne for the next few weeks to help reduce the           sensitivity. Your teeth will feel back to normal soon. 
                <br/><br/>
                If you have questions or concerns, please call our office at <a href="tel:212-422-9229">(212) 422-9229</a>. 
             */}
                </Accordion.Body>
            </StyledAccHeader>

     {/*   <StyledAccHeader eventKey="1">
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
                <Accordion.Header>Post-Op Information</Accordion.Header>
                <Accordion.Body>

                    
                </Accordion.Body>
            </StyledAccHeader>

           <StyledAccHeader eventKey="2">
                <Accordion.Header>How long do the results of cosmetic dentistry last?</Accordion.Header>
                <Accordion.Body>
                    Like other investments, if you have cosmetic dentistry work done such as teeth whitening, the length of time you can expect it to last will vary. If you smoke, drink wine or coffee regularly, or consume other acid-containing foods, your bright smile may begin to discolor and yellow more quickly than you may expect. In general, a teeth whitening procedure can last up to a few years. Even though the results can fade, routine touch-ups are recommended to maintain your bright smile.
                </Accordion.Body>
            </StyledAccHeader>

            <StyledAccHeader eventKey="3">
                <Accordion.Header>What should I do if I require pre-medication?</Accordion.Header>
                <Accordion.Body>
                    Please be sure to request a prescription prior to your appointment, or if you are unsure, contact us and we can help you.
                </Accordion.Body>
            </StyledAccHeader>


            <StyledAccHeader eventKey="4">
                <Accordion.Header>How long do appointments usually last?</Accordion.Header>
                <Accordion.Body>
                    Your dental office visit can vary by your individual case. Please call our office to find out how long your appointment is expected to be.
                </Accordion.Body>
            </StyledAccHeader>


            <StyledAccHeader eventKey="5">
                <Accordion.Header>I have more questions...</Accordion.Header>
                <Accordion.Body>
                    Please feel free to call us at the office or if you prefer, we are always available online  via our chat agent located on the bottom right corner of our website.
                </Accordion.Body>
            </StyledAccHeader>*/}

        </Accordion>
    </div>

);

export default FAQAccordion;