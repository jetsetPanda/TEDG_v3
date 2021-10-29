export default {
    name: "servicesPediatric",
    title: "Services -- PEDIATRIC",
    type: "document",
    fields: [
        {
            name: "serviceName",
            title: "Name of Service",
            type: "string",
        },
        {
            name: "serviceDescription",
            title: "Service Description",
            type: "array",
            of: [
                {
                    type: 'block'
                }
            ]
        },
        {
            name: 'serviceImage',
            title: "Service Image",
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
