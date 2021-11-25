export default {
    name: "smileGalleryItems",
    title: "Smile Gallery Cards",
    type: "document",
    fields: [
        {
            name: "order",
            title: "Order",
            type: "number",
            hidden: true,
        },
        {
            name: "procedure",
            title: "Procedure Done (e.g. 3-Unit Bridge, Gum Lift)",
            type: "string",
        },
        {
            name: "doctorName",
            title: "Doctor Name",
            type: "string",
        },
        {
            name: "galleryDesc",
            title: "Description (NOTE: make sure to set 'Normal' text type below)",
            type: "array",
            of: [
                {
                    type: 'block'
                }
            ]
        },
        {
            name: 'galleryImage',
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
