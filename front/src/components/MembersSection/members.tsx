import React from 'react';

function TeamSection() {
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
                src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/team/t4.jpg"
                className="img-fluid  img-thumbnail rounded-circle"
                alt="image1"
              />
              <div className="content mt-2">
                <h4>Zain Knob</h4>
                <p className="text-muted">Mechanical Engineer</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="img-block mb-5">
              <img
                src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/team/t2.jpg"
                className="img-fluid  img-thumbnail rounded-circle"
                alt="image1"
              />
              <div className="content mt-2">
                <h4>Syndia Lee</h4>
                <p className="text-muted">Software Engineer</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="img-block mb-5">
              <img
                src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/team/t1.jpg"
                className="img-fluid  img-thumbnail rounded-circle"
                alt="image1"
              />
              <div className="content mt-2">
                <h4>Noel Flantier</h4>
                <p className="text-muted">Joomla Specialist</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="img-block mb-5">
              <img
                src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/team/t3.jpg"
                className="img-fluid  img-thumbnail rounded-circle"
                alt="image1"
              />
              <div className="content mt-2">
                <h4>Bobby Doe</h4>
                <p className="text-muted">Street Artist</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
