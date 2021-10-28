export default {
    name: "technologyList",
    title: "Technologies List",
    type: "document",
    fields: [
        {
            name: "techName",
            title: "Technology Name",
            type: "string",
        },
        {
            name: "description",
            title: "Description",
            type: "array",
            of: [
                {
                    type: 'block'
                }
            ]
        },
        {
            name: 'techImage',
            title: "Image",
            type: 'image',
            options: {
                hotspot: true,
            },
        },
    ],

}
