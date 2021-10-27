export default {
    name: "ourTechnologyContent",
    title: "Page Content -- OUR TECHNOLOGY",
    type: "document",
    fields: [
        {
            name: "pageName",
            title: "Page Name (note: bish dis will also show in breadcrumb)",
            type: "string",
        },
        {
            name: 'bannerImage',
            title: 'Banner Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: "headliner",
            title: "Jumbo Headliner",
            type: "string",
        },
        {
            name: "subHeadlinePortableText",
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
