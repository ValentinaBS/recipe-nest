import React from 'react';
import TeamMember from './TeamMember';

const TeamSection: React.FC = () => {

  const teamMembers = [
    {
      imgUrl: 'https://cdn270.picsart.com/a8d8537c-2917-49ef-a57b-ff0107c652a3/439737212039201.jpg?to=crop&type=webp&r=1456x1456&q=85',
      linkedinURL: 'https://www.linkedin.com/in/lourdes-camila-godoy-lotta-0330621bb/',
      githubURL: 'https://github.com/LoulyGodoyLotta',
      name: 'Lourdes Camila Godoy Lotta',
      role: 'Full Stack Developer Jr'
    },
    {
      imgUrl: 'https://cdn270.picsart.com/09550fbe-c70a-4d8b-afcf-11e5b11e1284/439737168050201.jpg?to=crop&type=webp&r=1456x1456&q=85',
      linkedinURL: 'https://www.linkedin.com/in/analaurazanardi/',
      githubURL: 'https://github.com/ZanardiAnA',
      name: 'Ana Laura Zanardi',
      role: 'Full Stack Developer Jr'
    },
    {
      imgUrl: 'https://cdn270.picsart.com/a0301f39-f222-4a80-a3b2-17cb0e5490e1/439737247021201.jpg?to=crop&type=webp&r=1456x1456&q=85',
      linkedinURL: 'https://www.linkedin.com/in/zoe-n-carida/',
      githubURL: 'https://github.com/ZoeC21',
      name: 'Zoe N Carida',
      role: 'Full Stack Developer Jr'
    },
    {
      imgUrl: 'https://cdn270.picsart.com/c38ceb39-2a92-47a6-a51b-d4010172266e/439737227046201.jpg?to=crop&type=webp&r=1456x1456&q=85',
      linkedinURL: 'https://www.linkedin.com/in/belendelgadilloarias/',
      githubURL: 'https://github.com/BelenDelgadilloArias',
      name: 'Belen Delgadillo Arias',
      role: 'Full Stack Developer Jr'
    },
    {
      imgUrl: 'https://cdn270.picsart.com/84a44277-af38-4c83-bd09-54a009447a25/439737124047201.jpg?to=crop&type=webp&r=1456x1456&q=85',
      linkedinURL: 'https://www.linkedin.com/in/valentina-belen-sanchez/',
      githubURL: 'https://github.com/ValentinaBS',
      name: 'Valentina Belen Sanchez',
      role: 'Scrum master / Full Stack Developer Jr'
    }
  ];

  return (
    <section className="text-center pb-5 pt-3">
      <div className="container">
        <div className="header my-5">
          <h1>Meet our Team</h1>
          <p className="text-muted">Meet and Greet our Team Members</p>
        </div>
        <div className="d-flex flex-wrap justify-content-center align-items-center gap-5">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

