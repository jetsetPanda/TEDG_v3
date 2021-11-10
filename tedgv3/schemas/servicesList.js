export default {
    name: "servicesList",
    title: "Services List and Descriptions",
    type: "document",
    fields: [
        {
            name: "serviceName",
            title: "Service Name",
            type: "string",
        },
        {
            name: "serviceLink",
            title: "Service URL Link",
            type: "string",
        },
        {
            name: "description",
            title: "Description (optional)",
            type: "array",
            of: [
                {
                    type: 'block'
                }
            ]
        },
        {
            name: 'serviceImage',
            title: "Image",
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
    ],

}
