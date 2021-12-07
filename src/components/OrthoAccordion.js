import React from 'react';
import {Accordion, Row, Col} from "react-bootstrap";
import styled from "styled-components";


const StyledAccHeader = styled(Accordion.Item)`
  background: #ffffff;
  color: #000000;
`


const OrthoAccordion = (props) => (
    <div className="my-md-3 pb-5">
        <h2 className="my-md-5 text-center mb-4 mt-4">Patient Resources</h2>
        <Accordion>
        <StyledAccHeader eventKey="0">
                <Accordion.Header><strong>The "Official" No-Eats List</strong></Accordion.Header>
                <Accordion.Body>
                    <h4>A List of Food to be Avoided During Your Orthodontic Treatment</h4>
                    <br/>
                    <Row>
                    <Col>
                    <ul>
                    <li><strong>GUM</strong></li>
                    <li>Bubble Yum</li>
                    <li>Bubble Gum</li>
                    <li>Trident</li>
                    <li>Freedent</li>
                    <li>Sugarless Gum</li>
                    <li>Any Gum</li>
                    </ul>
                    </Col>

                    <Col>
                    <ul>
                    <li><strong>TAFFY</strong></li>
                    <li>Laffy Taffy</li>
                    <li>Airheads</li>
                    <li>Starburst</li>
                    <li>JuJuBes</li>
                    <li>Gummy Bears</li>
                    <li> Now and Laters</li>
                    <li>Jellybeans</li>
                    <li>Licorice</li>
                    <li>Rocks</li>
                    <li>Gummy Savers</li>
                    </ul>
                    </Col>

                    <Col>
                    <ul>
                    <li><strong>CARAMELS</strong></li>
                    <li>Kraft Caramels</li>
                    <li>Caramel Apples</li>
                    <li> Tootsie Rolls</li>
                    <li>  Raisins</li>
                    <li>Sugar Daddies</li>
                    <li>Marathon Bars</li>
                    <li>Snickers	</li>
                    <li>Milk Duds</li>
                    </ul>
                    </Col>

                    <Col>
                    <ul>
                    <li><strong>HARD ITEMS</strong></li>
                    <li>Ice Cubes</li>
                    <li> Pens/Pencils</li>
                    <li>Whole Apples</li>
                    <li>Whole Carrots</li>
                    <li>Celery Stalks</li>
                    <li>Popcorn Seeds</li>
                    <li>Hard Pretzels</li>
                    <li>Hard Taco Shells</li>
                    <li> Hard Corn Chips</li>
                    <li>Nuts of all kinds</li>
                    <li>Hard Bagels</li>
                    <li>NO POPCORN</li>
                    </ul>
                    </Col>
                    </Row>
                    
                    
                    
                    
                    In addition to all of the above comes the group called <strong>SWEETS</strong>. Sweets can be eaten but it is very important that you brush or rinse your mouth <strong>immediately</strong> after eating them. The sweets will not cause damage to your braces, but they will cause damage to your teeth. This is how white spots form on your teeth while wearing braces.<br/><br/>
Should you have a brace come loose before an appointment, please call the same day that you find out that it is broken. We are not going to be upset with you, but we do want to make sure that we have enough time to fix it during your regularly scheduled appointment. Some broken brackets can wait to be fixed while others need to be repaired as soon as possible. <br/><br/>
The last thing that we would like you to know is that when you <strong>bend your wires or knock a brace loose</strong>, you run the risk of making your <strong>treatment take longer</strong>. If you chew gum, you probably won’t break anything but it will make it more difficult for the teeth to move past each other which means the <strong>treatment will take longer</strong>. If you cheat, you will only be cheating yourself in the end. Just remember these things from the start and you should finish your treatment on time. <br/><br/>

                </Accordion.Body>
            </StyledAccHeader>

        </Accordion>
    </div>

);

export default OrthoAccordion;