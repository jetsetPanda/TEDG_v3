import React from 'react';
import {Accordion} from "react-bootstrap";
import styled from "styled-components";


const StyledAccHeader = styled(Accordion.Item)`
  background: #ffffff;
  color: #000000;
`


const FAQAccordion = (props) => (
    <div className="my-md-3 pb-5">
        <h2 className="my-md-5 text-center mb-4 mt-4">Patient Resources</h2>
        <Accordion>
            <StyledAccHeader eventKey="0">
                <Accordion.Header><strong>ZOOM! In-Office Teeth Whitening</strong></Accordion.Header>
                <Accordion.Body>
                <h4>Pre-Op Information</h4>
                <br/>ZOOM! In-Office Teeth Whitening is a procedure designed to lighten the color of teeth using a combination of a hydrogen peroxide gel and a specially designed light to produce the maximum whitening results in the shortest time possible. Tooth shades will be assessed before and after. ZOOM! results will vary from person to person and can regress due to a variety of circumstances. Almost all natural teeth can benefit from ZOOM! whitening, and a significant amount of whitening can be achieved in most cases. ZOOM! whitening is not intended to lighten artificial teeth, caps, crowns, veneers, porcelain, composite, or other restorative materials. People with darkly stained yellow or yellow-brown teeth frequently achieve better results than those with gray or bluish-gray teeth. Teeth with multiple colorations, bands, splotches, or spots due to tetracycline use or fluorosis often do not whiten as well and may need multiple treatments or may not lighten at all. ZOOM! is not recommended for pregnant or lactating women. 
 <br/><br/><strong>
 It is recommended that one week prior to whitening, patients should use a desensitizing toothpaste such as sensodyne and take Ibuprofen the day of their appointment to help reduce sensitivity. </strong>
  <br/><br/>
 During the first 24-hour period after whitening, patients may still experience some sensitivity or tooth pain. This is normal and is usually mild, but it may be more noticeable in people prone to tooth sensitivity. Continue to take Ibuprofen for any post operative discomfort. Any areas of gum recession will be covered with a protective barrier prior to ZOOM! treatment. Your lips, cheeks, and gums will also be protected but may experience some areas of inflammation due to inadvertent gel exposure. This is temporary and will subside in a few days. After whitening, it is natural for teeth to regress somewhat in their shading. This regression is very gradual but can be accelerated by frequent exposure to various staining agents. Teeth naturally stain with time, so patients also have the option of in-home use trays to extend the benefits of the whitening process or redoing ZOOM! in the future.  
  <br/><br/>
 For the first 48 hours after treatment, care should be given to avoid consuming dark foods and drinks. 
 
                </Accordion.Body>
            </StyledAccHeader>

     {/*}       <StyledAccHeader eventKey="1">
                <Accordion.Header>Why should I go to the dentist regularly?</Accordion.Header>
                <Accordion.Body>
                    Many people do not see a dentist on a regular basis, and only go when they have a problem. While these patients may feel they are saving money, it often ends up costing much more in dollars and time when dental issues do inevitably occur. This is because many dental problems do not have symptoms until they reach the advanced stages of the disease process. Preventive treatments such as routine oral exams, cleanings and treatments are considered the best way to prevent tooth decay, pain, and expenses in the future.
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