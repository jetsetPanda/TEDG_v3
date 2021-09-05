export default {
    name: "aboutContent",
    title: "About Page Content",
    type: "document",
    fields: [
        {
            name: "pageName",
            title: "Page Name",
            type: "string",
        },
        {
            name: "headliner",
            title: "Jumbotron Headliner",
            type: "blockContent",
        },
        {
            name: "subHeadline",
            title: "Long Copy",
            type: "blockContent",
        },
        {
            name: 'aboutImage',
            title: 'About Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
    ],

}
