export default {
    name: "aboutContent",
    title: "Page Content -- ABOUT US",
    type: "document",
    fields: [
        {
            name: "pageName",
            title: "Page Name (note: bish dis will also show in breadcrumb)",
            type: "string",
        },
        {
            name: 'aboutImage',
            title: 'Banner Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: "headliner",
            title: "Jumbotron Headliner",
            type: "text",
        },
        {
            name: "subHeadline",
            title: "Old Long Copy",
            type: "text",
        },
        {
            name: "subHeadlinePortableText",
            title: "Long Copy (structured data, replace this old long copy)",
            type: "array",
            of: [
                {
                    type: 'block'
                }
            ]
        },

    ],

}
