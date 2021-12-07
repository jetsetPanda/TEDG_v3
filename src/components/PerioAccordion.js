import React from 'react';
import {Accordion, Row, Col} from "react-bootstrap";
import styled from "styled-components";


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
                <h3>Post-Op Diet Instructions</h3>
                <ul>
                    <li>Following Laser Therapy, do not drink through a straw, spit, or rinse for 24 hours as this creates a vacuum in your mouth that can disturb the blood clots that form and act as a band-aid to help stop bleeding.</li>
                    
                    <li>You will be prescribed 3 prescriptions: 
                        
                    <ol>
                        <li>Antibiotics are to be taken for 7 days and completed through.</li>
                    <li>A pain reliever is to be taken as directed.</li>
                    <li>A mouth rinse is to be used for only 10 days, twice per day. After 10 days, a warm salt water rinse is to be used 3 times per day.</li>
                    </ol>                       
                    </li>
                    <li>For 2 weeks following surgery, please stick to a soft diet as suggested below.</li>
                    
                    <li>After surgery, you may see a while film develop around the area. Do not wipe it away. Leave the area alone. The film is a part of the healing process. </li>
                    

                    <li>Please remember that even after 10 days, healing is not complete. The first month following treatment, please continue to make smart food choices and follow a diet consisting of softer foods. </li>
                
                   
                </ul>
                <h4>Soft Diet Suggestions</h4>
                <ul>
                <li>Daily Vitamins</li>
                <li>Food put through a food blender</li>
                <li>Cream of wheat, oatmeal, malt o meal</li>
                <li>Mashed avocado, applesauce</li>
                <li>Mashed potatoes, baked potatoes (okay with butter or sour cream)</li>
                <li>Mashed banana or any mashed/blended fruit except berries containing seeds</li>
                <li>Broth or creamed soup</li>
                <li>Mashed steamed vegetables</li>
                <li>Mashed yams, baked sweet potatoes or butternut squash</li>
                <li>Cottage cheese, cream, or soft cheese</li>
                <li>Creamy peanut butter (no solid pieces)</li>
                <li>Eggs any style (okay with melted cheese)</li>
                <li>Omelette (okay to eat with cheese or avocado)</li>
                <li>Jell-O, pudding, ice cream, yogurt</li>
                <li>Milkshakes or smoothies (do not blend with berries containing seeds)</li>
                <li>Ensure, Slim Fast, nutritional drinks</li>
                </ul><br/>
                
                <h4>Restricted Foods</h4>
                Gum, candy, cookies, chips, nuts, anything hard or crunchy, anything with seeds or hard pieces, meat that shreds and can lodge under the gum or between teeth, raw vegetables or salad. <br/><br/>If you have questions or concerns, please call our office at <a href="tel:212-422-9229">(212) 422-9229</a>.

 
                </Accordion.Body>
            </StyledAccHeader>


            <StyledAccHeader eventKey="1">
                <Accordion.Header><strong>Periodontal Surgery</strong></Accordion.Header>
                <Accordion.Body><h4>Post-Op Instructions</h4><br/>
                <ol>
                <li>Do not eat anything or drink hot fluids until the numbness has worn off to avoid injury from
    accidental biting or burning.</li>
<li>No vigorous rinsing, drinking through a straw, or spitting for 3 days so the blood clot will not
    be disturbed.</li>
<li>Today, rest as much as possible with your head elevated. No vigorous exercising for 3 days.</li>
<li>Slight bleeding is normal for several hours following surgery. If persistent bleeding occurs,
    place a wet tea bag on the involved area and apply direct pressure for 15-20 continuous
    minutes. Repeat as necessary.</li>
<li>Do not pull back the lips or cheeks to look at the area as this can disturb the surgical site and
    increase complications.</li>
<li>Do not eat by the surgical area for 1 week. Soft nutritious foods will be necessary for the first
    few days. Avoid acidic and crunchy foods. Drink plenty of fluids.</li>
<li>
    Do not use tobacco or drink alcohol as these will delay healing.  </li>
    <li>
    Swelling can be lessened by placing a cold compress on the face and alternating on and off
    for 20 minutes during the first 72 hours.  </li>
    <li>
        Take all medications the doctor has prescribed for you according to directions.  </li>
<li>
    Starting 24 hours after surgery, gently rinse your mouth with ¼ teaspoon of salt in 8 ounces
      of warm water 3 times a day.  </li>
<li>
    After periodontal treatment, proper oral hygiene must be maintained in the surgical area to
     aid in healing. After 1 week, carefully brush the teeth while avoiding the gums in the area of
     surgery. The gums and lower parts of the teeth should be cleaned with a dampened piece of
     cotton. Gentle flossing can be resumed in 2-3 weeks. Regular brushing can be resumed after
     3 weeks.  </li>
<li>
    After periodontal surgery, sensitivity of the teeth may occur. This is remedied by maintaining
      proper oral hygiene and by the use of specially formulated sensitive toothpaste, such as
      Sensodyne. </li>
<li>
    If a periodontal pack has been placed in your mouth, do not remove it. The pack should
      remain in place for 1 week. If the pack comes off before this time, it is not an emergency, but
      the doctor should be notified.  </li>
<li>
    Return for your appointment to have the periodontal pack and any sutures removed. If the
      sutures loosen or come out within 3 days, please inform the office.  </li>
<li> If you have questions or concerns, please call our office at <a href="tel:212-422-9229">(212) 422-9229</a>. </li>
</ol>
                </Accordion.Body>
            </StyledAccHeader>

            <StyledAccHeader eventKey="2">
                <Accordion.Header><strong>Implant &amp; Bone Graft</strong></Accordion.Header>
                <Accordion.Body><h4>Post-Op Instructions</h4><br/>
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


            <StyledAccHeader eventKey="3">
                <Accordion.Header><strong>Tissue Graft</strong></Accordion.Header>
                <Accordion.Body><h4>Post-Op Instructions</h4><br/>
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

export default PerioAccordion;