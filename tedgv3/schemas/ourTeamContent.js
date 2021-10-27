export default {
    name: "ourTeamContent",
    title: "Our Team Page Content",
    type: "document",
    fields: [
        {
            name: "teamMemberName",
            title: "Team Member Name",
            type: "string",
        },
        {
            name: "teamMemberCaption",
            title: "Team Member Caption",
            type: "text",
        },
        {
            name: "teamMemberBio",
            title: "Team Member Bio",
            type: "text",
        },
        {
            name: 'teamMemberImage',
            title: "Team Member Image",
            type: 'image',
            options: {
                hotspot: true,
            },
        },
    ],

}
