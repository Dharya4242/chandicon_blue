// export const ANNOUNCEMENTS = [
//     // '🚨 Attention: Deadline Extension! 🚨 The deadline for Regular "Full" Paper Submission, Special Session Proposals, and Tutorial/Workshop Proposals has been extended to April 15, 2024. [Extended Deadline]',
//     // 'Thanks for the overwhelming response for paper submissions in INDISCON 2024. The submission was closed on 15th April 2024. The decisions on submitted papers through given CMT portal will be given in the Month of June 2024.',
//     <a href="/List of Oral and Posters.pdf" target="_blank">Click here to see list of accepted papers</a>,
// ];

export const ANNOUNCEMENTS = [
    // '🚨 Attention: Deadline Extension! 🚨 The deadline for Regular "Full" Paper Submission, Special Session Proposals, and Tutorial/Workshop Proposals has been extended to April 15, 2024. [Extended Deadline]',
    // 'Thanks for the overwhelming response for paper submissions in INDISCON 2024. The submission was closed on 15th April 2024. The decisions on submitted papers through given CMT portal will be given in the Month of June 2024.',
    // '<a href="/List of Oral and Posters.pdf" target="_blank">Click here to see list of accepted papers</a>',
    // 'Check bottom of this page for List of accepted papers'
    // 'The link to submit camera-ready paper is active now. Carefully read instructions for Camera Ready Paper before final submission. The registration link will be provided soon.'
    // 'The registration link is active now!!'
    // 'Conference Venue: Hotel Shivalikview, Sector-17, Chandigarh. Check bottom of this page for the tentative Schedule of the Conference and guidelines for Oral and Poster presentations.'
];

// React component to render the announcements
const AnnouncementsComponent = () => {
    return (
        <div>
            {ANNOUNCEMENTS.map((announcement, index) => (
            <div
                key={index}
                dangerouslySetInnerHTML={{ __html: announcement }}
                style={{ marginBottom: '20px' }} // Add margin here to create space between announcements
            />
            ))}
        </div>
    );
};

export default AnnouncementsComponent;
