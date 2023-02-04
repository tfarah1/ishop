import React from 'react';

function UsersGrid({ users }) {
  return (
    <div className="user-grid-container">
      <div className="user-cards__list">
        {users.map(({ Title, Image, Price, Units,index }) => (
          <div key={index} className="user-card card">
            <h3 className="Title">
              {Title}
            </h3>
            <h1 className="company-name">
              <span>{Image}</span>
            </h1>
            <h1 className="company-name">
              <span>{Price}</span>
            </h1>
            <h1 className="company-name">
              <span>{Units}</span>
            </h1>
            <span className="user-posts-link">
              <button>View Posts</button>
            </span>
          </div>
        ))}
        {!users.length && <h3>No users....</h3>}
      </div>
    </div>
  );
}
export default UsersGrid;


// Title	Image	Price	Units