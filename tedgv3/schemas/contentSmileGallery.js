export default {
    name: "smileGalleryContent",
    title: "Page Content -- SMILE GALLERY",
    type: "document",
    fields: [
        {
            name: "pageName",
            title: "Page Name",
            type: "string",
        },
        {
            name: 'bannerImage',
            title: 'Banner Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative text',
                },
            ],
        },
        {
            name: "headliner",
            title: "Jumbotron Headliner",
            type: "string",
        },
        {
            name: "subHeadline",
            title: "Long Copy",
            type: "array",
            of: [
                {
                    type: 'block'
                }
            ]
        },
    ],

}
