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
            type: "text",
        },
        {
            name: "subHeadline",
            title: "Long Copy",
            type: "text",
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
