import React from 'react';
import './TeamSection.css';

const TeamSection: React.FC = () => {
  let linkedinURL = 'https://www.linkedin.com/in/lourdes-camila-godoy-lotta-0330621bb/';
  let githubURL = 'https://github.com/LoulyGodoyLotta';

  let secondLinkedInURL = 'https://www.linkedin.com/in/valentina-belen-sanchez/';
  let secondGithubURL = 'https://github.com/ValentinaBS';

  let thirdLinkedInURL= 'https://www.linkedin.com/in/analaurazanardi/';
  let thirdGithubURL = 'https://github.com/ZanardiAnA';

  let fourthLinkedInURL = 'https://www.linkedin.com/in/zoe-n-carida/';
  let fourthGithubURL = 'https://github.com/ZoeC21';

  let fivethLinkedInURL = 'https://www.linkedin.com/in/belendelgadilloarias/';
  let fiveGithubURL = 'https://github.com/BelenDelgadilloArias';

  return (
    <section className="team text-center py-5">
      <div className="container">
        <div className="header my-5">
          <h1>Meet our Team</h1>
          <p className="text-muted">Meet and Greet our Team Members</p>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-3">
            <div className="img-block mb-5">
              <img
                src="https://cdn270.picsart.com/84a44277-af38-4c83-bd09-54a009447a25/439737124047201.jpg?to=crop&type=webp&r=1456x1456&q=85"
                className="img-fluid img-thumbnail "
                alt="image1"
              />
              <div className="content mt-2">
              <a href={secondLinkedInURL} target="_blank" rel="noopener noreferrer" className="team-member-link">
                <h4>Valentina Belen Sanchez</h4>
                </a>
                <p className="text-muted">Scrum master</p>
                <a href={secondGithubURL} target="_blank" rel="noopener noreferrer" className="team-member-link">
                <p className="text-muted">Full Stack Deverloper Jr</p>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 ">
            <div className="img-block mb-5">
              <img
                src="https://cdn270.picsart.com/09550fbe-c70a-4d8b-afcf-11e5b11e1284/439737168050201.jpg?to=crop&type=webp&r=1456x1456&q=85"
                className="img-fluid img-thumbnail"
                alt="image2"
              />
              <div className="content mt-2">
              <a href={thirdLinkedInURL} target="_blank" rel="noopener noreferrer" className="team-member-link">
                <h4>Ana Laura Zanardi</h4>
                </a>
                <a href={thirdGithubURL} target="_blank" rel="noopener noreferrer" className="team-member-link">
                <p className="text-muted">Full Stack Deverloper Jr </p>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="img-block mb-5">
              <img
                src="https://cdn270.picsart.com/a0301f39-f222-4a80-a3b2-17cb0e5490e1/439737247021201.jpg?to=crop&type=webp&r=1456x1456&q=85"
                className="img-fluid img-thumbnail"
                alt="image3"
              />
              <div className="content mt-2">
              <a href={fourthLinkedInURL} target="_blank" rel="noopener noreferrer" className="team-member-link">
                <h4>Zoe N Carida</h4>
                </a>
                <a href={fourthGithubURL} target="_blank" rel="noopener noreferrer" className="team-member-link">
                <p className="text-muted">Full Stack Deverloper Jr</p>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="img-block mb-5">
              <img
                src="https://cdn270.picsart.com/c38ceb39-2a92-47a6-a51b-d4010172266e/439737227046201.jpg?to=crop&type=webp&r=1456x1456&q=85"
                className="img-fluid img-thumbnail"
                alt="image4"
              />
              <div className="content mt-2">
              <a href={fivethLinkedInURL} target="_blank" rel="noopener noreferrer" className="team-member-link">
                <h4>Belen Delgadillo Arias</h4>
                </a>
                <a href={fiveGithubURL} target="_blank" rel="noopener noreferrer" className="team-member-link">
                <p className="text-muted">Full Stack Deverloper Jr</p>
                </a>
              </div>
            </div>
          </div>
        </div>
     </div>
     <div className="col-md-6 col-lg-3">
            <div className="img-block mb-5">
              <img
                src="https://cdn270.picsart.com/a8d8537c-2917-49ef-a57b-ff0107c652a3/439737212039201.jpg?to=crop&type=webp&r=1456x1456&q=85"
                className="img-fluid img-thumbnail"
                alt="image5"
              />
              <div className="content mt-2">
              <a href={linkedinURL} target="_blank" rel="noopener noreferrer" className="team-member-link">
                <h4>Lourdes Camila Godoy Lotta</h4>
                </a>
                <a href={githubURL} target="_blank" rel="noopener noreferrer" className="team-member-link">
                <p className="text-muted">Full Stack Deverloper Jr</p>
                </a>
              </div>
            </div>
          </div>
    </section>
  );
};

export default TeamSection;

