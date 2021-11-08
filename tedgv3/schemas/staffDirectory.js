export default {
    name: "staffDirectory",
    title: "Staff Directory",
    type: "document",
    initialValue: {
        isGeneralDentist: false,
        isSpecialist: false,
        isHygienist: false,
        isDentalAssistant: false,
        isAdminStaff: false
    },
    fields: [
        // https://www.sanity.io/plugins/order-documents
        {
            name: "order",
            title: "Order",
            type: "number",
            hidden: true,
        },
        {
            name: "teamMemberName",
            title: "Team Member Name",
            type: "string",
        },
        {
            name: 'jobType',
            title: 'Job Designation',
            type: 'string',
            options: {
                list: [
                    { title: 'General Dentist', value: 'general' },
                    { title: 'Specialist', value: 'specialist' },
                    { title: 'Hygienist', value: 'hygienist' },
                    { title: 'Dental Assistant', value: 'assistant' },
                    { title: 'Admin Staff', value: 'admin' },
                    { title: 'Admin Special', value: 'adminSpecial'}
                ],
            },
        },
        {
            name: "teamMemberJobTitle",
            title: "Job Title / Specialty (note: leave empty if admin)",
            type: "string",
        },
        {
            name: 'teamMemberImage',
            title: "Team Member Image",
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
            name: 'slug',
            title: 'Slug (URL - MAKE SURE TO ADD if a Doctor)',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        },
        {
            name: "teamMemberBio",
            title: "Team Member Bio",
            type: "array",
            of: [
                {
                    type: 'block'
                }
            ]
        },

        {
            name: "isGeneralDentist",
            title: "General Dentist? (click if yes!)",
            type: "boolean",
        },
        {
            name: "isSpecialist",
            title: "Specialist? (click if yes!)",
            type: "boolean",
        },
        {
            name: "isHygienist",
            title: "Hygienist? (click if yes!)",
            type: "boolean",
        },
        {
            name: "isDentalAssistant",
            title: "Dental Assistant? (click if yes!)",
            type: "boolean",
        },
        {
            name: "isAdminStaff",
            title: "Admin Staff (click if yes!)",
            type: "boolean",
        },

    ],

}
