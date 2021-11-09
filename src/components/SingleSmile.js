import React, { useState, useEffect } from 'react';
import sanityClient from '../client.js';
import {Container} from "react-bootstrap";


function SingleSmile(props) {
    const [singlePostData, setSinglePost] = useState(null);

    console.log("THE PROPS HERE ARE: ", props);
    console.log("slug to match is: ", props.match.params.slug);

    const currentSlug = props.match.params.slug;

    useEffect(() => {
        sanityClient.fetch(`*[_type == "post"] {
            title,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                },
                alt
            }
        }`)
        .then((data) => {
            console.log("DATA: ", data);
            setSinglePost(data);
        })
        .catch(console.error);
    }, []);

    return (
        <>
            {singlePostData && singlePostData.map((thing,index) => {
                console.log("THING IS: ", thing);

                return(
                    <span key={index}>
                <Container>
                    <h1>hey {thing.title}</h1>
                    {/*<img*/}
                    {/*    src={thing.mainImage.asset.url}*/}
                    {/*    className=""*/}
                    {/*/>*/}
                </Container>
                    </span>
                )
            })}

            <p>

            </p>
        </>
    );
}

export default SingleSmile;
