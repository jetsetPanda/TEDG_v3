import React from 'react';
import {UnstyledLink} from "./UiModules";
import {Button} from "react-bootstrap";

const PDFLink = (props) => (
        <UnstyledLink href={props.pdfFile} download>
                <Button variant="outline-primary">{props.cta}</Button>
        </UnstyledLink>
);

export default PDFLink;