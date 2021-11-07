export default {
    name: "patientInfoContent",
    title: "Page Content -- PATIENT INFO",
    type: "document",
    fields: [
        {
            name: "pageName",
            title: "Page Name",
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
            title: "Jumbotron Headliner",
            type: "string",
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
        {
            name: "newPatientCopy",
            title: "New Patient Forms Copy",
            type: "array",
            of: [
                {
                    type: 'block'
                }
            ]
        },
        {
            name: "firstVisitCopy",
            title: "'What To Expect At Your First Visit' Copy",
            type: "array",
            of: [
                {
                    type: 'block'
                }
            ]
        },
    ],

}
