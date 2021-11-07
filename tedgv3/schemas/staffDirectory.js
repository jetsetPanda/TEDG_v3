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
            name: "teamMemberJobTitle",
            title: "Job Title / Specialty (note: leave empty if admin)",
            type: "string",
        },
        {
            name: 'slug',
            title: 'Optional Slug (URL if Doctor/more detail)',
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
