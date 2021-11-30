import React from 'react';
import {Accordion} from "react-bootstrap";
import styled from "styled-components";


const StyledAccHeader = styled(Accordion.Item)`
  background: #1c72a1;
  color: white;
`


const FaqAccordion = (props) => (
    <div className="my-md-3">
        <h2 className="my-md-5 text-center pt-md-3">Frequently Asked Questions</h2>
        <Accordion>
            <StyledAccHeader eventKey="0">
                <Accordion.Header>Do you accept dental emergency cases?</Accordion.Header>
                <Accordion.Body>
                    For urgent dental appointments, we are equipped for same-day dental emergency appointments. If you are experiencing persistent, new, or worsening discomfort, please give us a call or contact us via our 24-hour chat agent on this website, and we'll get you in right away.
                </Accordion.Body>
            </StyledAccHeader>

            <StyledAccHeader eventKey="1">
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
            </StyledAccHeader>

        </Accordion>
    </div>

);

export default FaqAccordion;