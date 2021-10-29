export default {
    name: "ourTeamContent",
    title: "Page Content -- MEET THE TEAM",
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
