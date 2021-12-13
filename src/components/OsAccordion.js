import React from 'react';
import {Accordion, Row, Col} from "react-bootstrap";
import styled from "styled-components";
import PDFLink from "./UXElements/PDFLink";
import implantas from '../files/Shanin-Post-Op-Implant-Bone-Graft.pdf';
import ext from '../files/Shanin-Post-Op-Ext.pdf';



const StyledAccHeader = styled(Accordion.Item)`
  background: #ffffff;
  color: #000000;
`


const OsAccordion = (props) => (
    <div className="my-md-3 pb-5">
        <h2 className="my-md-5 text-center mb-4 mt-4">Patient Resources</h2>
        <Accordion>


      {/*      <StyledAccHeader eventKey="0">
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
*/}


            <StyledAccHeader eventKey="0">
                <Accordion.Header><strong>EXTRACTIONS</strong></Accordion.Header>
                <Accordion.Body>{/*<h4>Post-Operative Extraction Home-Care Instructions</h4>*/}
                <h6 className="py-3">
                        <PDFLink pdfFile={ext} cta="Post-Operative Instructions PDF"/> 
                </h6>
           {/*     Do not disturb the wound. Avoid rinsing, or spitting on the first 2 days after surgery. Avoid touching the area. Do not pull your lip or cheek out to view the area as that may put excessive tension on the surgical site and impair healing. If a dressing was placed, it may dislodge soon after surgery. Unless directed otherwise, simply discard the piece, there is no need to have the area redressed. There may be a slight elevation of temperature for the first 24 to 48 hours after surgery. If fever is present, it is extremely important to drink plenty of fluids. For fevers that exceed 101 degrees, please call the doctor especially if this fever is associated with limited opening. It is also appropriate to make sure that prescribed antibiotics are being taken correctly. 
                 <br/><br/>
                <strong>Bleeding </strong><br/>
                Bleeding is best controlled by biting on gauze packs immediately following the surgical procedure. These packs are best changed every 45 minutes until bleeding subsides. If bleeding still persists after two to three hours, this bleeding is best treated by keeping your head elevated and sitting upright. The use of one or two moistened tea bags placed over the surgical site. While this may sound archaic, biting firmly on a couple of tea bags for 45 minutes, perhaps repeated once, usually stops any residual post-operative bleeding. The most frequent cause of bleeding post-operatively is caused by patients who are spitting or rinsing their mouths. PLEASE DO NOT RINSE OR SPIT FOR THE FIRST 24 HOURS FOLLOWING SURGERY. 
                 <br/><br/>
                <strong>Swelling </strong><br/>
                Swelling is a normal occurrence after surgery. To minimize swelling, apply an ice bag, or a plastic bag filled with ice on the cheek in the area of surgery. The ice should be placed 10 minutes on and 10 minutes off for the first 24-48 hours. Discoloration of the facial skin adjacent to the surgical site can occur because of age, medications (aspirin, motrin, anticoagulants), and skin complexion. While cosmetically undesirable, this skin discoloration is harmless and will resolve over the next several days on its own without any medical intervention. Decreased opening and range of motion of the lower jaw, is especially common after removal of posterior (back) teeth. This is a normal response by the muscles that control the lower jaw. Complete return to normal range of motion may take several weeks in some patients. 
                 <br/><br/>
                <strong>Diet </strong><br/>
                Drink plenty of fluids. Avoid hot liquids or food for the first 24-48 hours. Soft food and liquids should be eaten on the day of surgery. Eating soft nutritious food is encouraged as soon as bleeding has stopped. Foods that contain seeds, nuts, or kernels such as popcorn and peanuts or are hard or crunchy should be avoided for several days. Return to a normal diet is generally achieved after one week of healing, or as directed by Dr. Shanin. Drinking plenty of fluids with meals and in between meals is essential in the post-operative period. Please avoid using a straw. 
                 <br/><br/>
                <strong>Smoking </strong><br/>
                It is advised that you refrain from all use of tobacco products. Not only does smoking adversely affect oral hygiene, but it also promotes a painful condition known as a "dry socket". 
                <br/><br/>
                <strong>Pain </strong><br/>
                You should take 3 tablets of ibuprofen (Advil or Motrin) every 6 hours for the first 3 days whether you have pain or not. Ibuprofen helps to reduce swelling as well as its known benefit for reducing pain. After 3 days take ibuprofen as needed. Ibuprofen should always be taken with something in your stomach. 
                 <br/><br/>
                In anticipation of more pain than usual, Dr. Shanin may have prescribed for you a more potent painkiller. Unlike Advil, you do not need to take this painkiller unless you have pain. Please take the tablets prescribed for pain as directed. The prescribed pain medicine may make you groggy and will slow down your reflexes. Do not drive an automobile or work around heavy machinery. Avoid alcoholic beverages. Pain or discomfort following surgery should subside more and more every day. If pain worsens after the fourth post-operative day, it may require attention and you should call the office. 
                 <br/><br/>
                <strong>Antibiotics </strong><br/>
                If prescribed, be sure to take the prescribed antibiotics as directed to help prevent infection. Please note that some antibiotics may interfere with the effectiveness of oral contraceptives. Please check with your pharmacist and tell Dr. Shanin if this is an issue. 
                <br/><br/>
                <strong>Oral Hygiene </strong><br/>
                For the first 24 hours, it is advised not to rinse as this may disturb the newly formed blood clot. However after 24 hours, rinsing with saltwater is encouraged. The addition of some mouthwash to this solution to freshen one's breath is also desirable. Rinsing is to start the day after surgery (unless directed otherwise) and continue for one week or until the sutures are removed. Rinsing is to be done for 3 full minutes vigorously after each mealtime and at bedtime. 
                 <br/><br/>
                <strong>Activity </strong><br/>
                Keep physical activities to a minimum immediately following surgery. If you are considering exercise, throbbing or bleeding may occur. If this occurs, you should discontinue exercising. Keep in mind that you are probably not taking normal nourishment. This may weaken you and further limit your ability to exercise. 
                <br/><br/> 
                <strong>Bone Chips </strong><br/>
                Following the removal of teeth, in the process of healing small bone splinters may form. These bone splinters commonly may fall out by themselves, occasionally they may need to be removed by the doctor. These splinters usually do not form for several days or weeks after the extraction. They are very common in patients with diabetes and heart disease, but can occur in any patient. 
                 <br/><br/>
                <strong>Bone Graft/ Membrane </strong><br/>
                If a bone graft was placed, some of the excess bone fragments may come loose. This is not a cause of concern.  Please tell Dr. Fatehi about this occurrence at the post op. If a membrane was placed, it is even more important to avoid the surgical site.  It is recommended that you avoid excessive lip motion In the area. 
*/}
                </Accordion.Body>
            </StyledAccHeader>

            <StyledAccHeader eventKey="1">
                <Accordion.Header><strong>IMPLANT & BONE GRAFT</strong></Accordion.Header>
                <Accordion.Body>
                <h6 className="py-3">
                        <PDFLink pdfFile={implantas} cta="Post-Operative Instructions PDF"/> 
                </h6>
             {/*   Do not disturb the wound. Avoid rinsing, or spitting on the first 2 days after surgery.  Avoid touching the area and do not pull your lip or cheek out to view the area as that may put excessive tension on the surgical site and impair healing. If a dressing was placed it may dislodge soon after surgery. Unless directed otherwise, simply discard the piece, there is no need to have the area redressed. 
                 <br/><br/>
                <strong>Bleeding </strong><br/>
                Some bleeding or redness in the saliva is normal for 24 hours. Excessive bleeding (your mouth fills up rapidly with blood) can be controlled by biting on a gauze pad placed directly on the bleeding wound for 30 minutes. If that doesn’t help, biting on a moist warm tea bag (regular tea, not herbal) in the area of bleeding should stop the bleeding. If bleeding appears excessive, or continues after the third post-operative day, please call for further instructions. 
                 <br/><br/>
                <strong>Swelling </strong><br/>
                Swelling is a normal occurrence after surgery. To minimize swelling, apply an ice bag, or a plastic bag filled with ice on the cheek in the area of surgery. The ice should be placed 10 minutes on and 10 minutes off for the first 24-48 hours. 
                 <br/><br/>
                <strong>Diet </strong><br/>
                Drink plenty of fluids. Avoid hot liquids or food for the first 24-48 hours. Soft food and liquids should be eaten on the day of surgery. Return to a normal diet is generally achieved after one weeks of healing, or as directed by Dr. Shanin. 
                 <br/><br/>

                <strong>Pain </strong><br/>
                You should take 3 tablets of ibuprofen (Advil or Motrin) every 6 hours for the first 3 days whether you have pain or not. Ibuprofen helps to reduce swelling as well as its known benefit for reducing pain. After 3 days take ibuprofen as needed. Ibuprofen should always be taken with something in your stomach. For  patients who are allergic to Aspirin, or cannot take Ibuprofen, one or two tablets of regular or Extra Strength Tylenol may be taken every four hours instead. 
                 <br/><br/>
                 For severe pain take the tablets prescribed for pain as directed. The prescribed pain medicine may make you groggy and will slow down your reflexes. Do not drive an automobile or work around heavy machinery. Avoid alcoholic beverages. Pain or discomfort following surgery should subside more and more every day. If pain worsens after the third post-operative day, it may require attention and you should call the office. 
                 <br/><br/>
                <strong>Antibiotics </strong><br/>
                If prescribed, be sure to take the prescribed antibiotics as directed to help prevent infection. Please note that some antibiotics may interfere with the effectiveness of oral contraceptives. Please check with your pharmacist and tell Dr. Kallus if this is an issue. 
                <br/><br/>
                <strong>Oral Hygiene </strong><br/>
                Good oral hygiene is essential to good healing. The day after surgery, the oral rinse prescribed to you should be used twice daily, after breakfast and before bed. A q-tip may be used to clean the healing abutments if they are present. Dip the q-tip in a cap of the mouthrinse and gently clean the healing abutment twice a day prior to rinsing. Be sure to rinse for at least 30 seconds then spit. Warm salt water rinses (teaspoon of salt in a cup of warm water) should be used at least 4-5 times a day, as well, especially after meals. Gently brushing your teeth at least one tooth away from the implant sites is no problem. A soft bristled brush is best. The area of the implants or healing abutments should only be brushed when instructed by your doctor 
                 <br/><br/>
                <strong>Activity </strong><br/>
                Keep physical activities to a minimum immediately following surgery. If you are considering exercise, throbbing or bleeding may occur. If this occurs, you should discontinue exercising. Keep in mind that you are probably not taking normal nourishment. This may weaken you and further limit your ability to exercise. 
                <br/><br/> 
                <strong>Wearing Your Prosthesis </strong><br/>
                Partial dentures, flippers, or full dentures should be used only as discussed by your doctor in the pre-operative consultation.
             */}

                </Accordion.Body>
            </StyledAccHeader>


        </Accordion>
    </div>

);

export default OsAccordion;