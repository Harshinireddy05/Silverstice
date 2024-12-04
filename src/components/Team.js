import React from 'react';

function Team() {
  return (
    <section className="team">
      <h2>Our Team</h2>
      <div className="team-grid">
        <div className="team-member">
          <h3>John Doe</h3>
          <p>Chief Executive Officer</p>
        </div>
        <div className="team-member">
          <h3>Jane Smith</h3>
          <p>Chief Technology Officer</p>
        </div>
        <div className="team-member">
          <h3>Mike Johnson</h3>
          <p>Lead Data Scientist</p>
        </div>
      </div>
    </section>
  );
}

export default Team;
