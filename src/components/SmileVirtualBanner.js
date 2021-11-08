import React from 'react';
import {Button, Card} from "react-bootstrap";
import smileVirtualBanner from "../assets/images/smilevirtual.png";

function SmileVirtualBanner(props) {
    return (
        <Card className="bg-dark text-dark" style={{borderColor: "white"}}>
            <Card.Img src={smileVirtualBanner} alt="Card image" />
            <Card.ImgOverlay className="mx-md-5 mt-md-3">
                <Card.Title>
                    <h3 className="mt-md-5 pt-md-5">
                        Want to improve your smile?
                    </h3></Card.Title>
                <Card.Text>
                    <h5>
                        Get a FREE Smile Virtual Consult today!
                    </h5>
                </Card.Text>
                <Button size="md" className="px-md-5" style={{marginLeft: "5.5rem"}}>Start Here</Button>


            </Card.ImgOverlay>
        </Card>
    );
}

export default SmileVirtualBanner;