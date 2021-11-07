export default {
    name: "servicesContent",
    title: "Page Content -- SERVICES",
    type: "document",
    fields: [
        {
            name: "pageName",
            title: "Page Name",
            type: "string",
        },
        {
            name: 'servicesImage',
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
            type: "text",
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
