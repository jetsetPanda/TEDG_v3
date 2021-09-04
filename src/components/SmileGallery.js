import React, { useState, useEffect } from 'react';
import sanityClient from '../client.js';

import {Link} from "react-router-dom";
import {Container} from "react-bootstrap";

function SmileGallery(props) {
    const [postData, setPost] = useState(null);

    useEffect(() => {
        // grok internal sanity query lang (similar to graphQL)
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
        .then((data) => setPost(data))
        .catch(console.error);
    }, []);

    return (
        <main>
            <Container>
                <h1 className="d-flex justify-content-center ">Smile Gallery</h1>
                <h2 className="d-flex justify-content-center ">View Teethzsz below</h2>
                <div>
                    <article>
                    {postData && postData.map((post,index) => (

                            <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                            <span key={index}>
                            <img
                                src={post.mainImage.asset.url}
                                alt={post.mainImage.alt}
                                className=""
                            />
                            <span className="d-flex justify-content-end">
                                <h3>
                                    {post.title}
                                </h3>
                            </span>
                        </span>
                            </Link>

                    ))}
                        </article>
                </div>
            </Container>
        </main>
    );
}

export default SmileGallery;
