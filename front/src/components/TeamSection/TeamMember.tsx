interface TeamMemberProps {
    imgUrl: string;
    linkedinURL: string;
    githubURL: string;
    name: string;
    role: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ imgUrl, linkedinURL, githubURL, name, role }) => (
    <div style={{ flex: '0 0 25%', maxWidth: '300px', height: '280px' }}>
        <img src={imgUrl} className="img-fluid" alt={`image-${name}`} style={{ maxWidth: '10rem' }} />
        <div className="content mt-2">
            <a href={linkedinURL} target="_blank" rel="noopener noreferrer" className="team-member-link">
                <h4>{name}</h4>
            </a>
            <a href={githubURL} target="_blank" rel="noopener noreferrer" className="team-member-link">
                <p className="text-muted">{role}</p>
            </a>
        </div>
    </div>
);

export default TeamMember;