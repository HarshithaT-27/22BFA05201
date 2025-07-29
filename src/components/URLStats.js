import React from 'react';

const URLStats = ({ stats }) => {
  return (
    <>
      {stats.map((stat, i) => (
        <div key={i}>
          <p>Short URL: {stat.short}</p>
          <p>Created: {stat.created}</p>
          <p>Expires: {stat.expires}</p>
          <p>Total Clicks: {stat.clicks}</p>
          <ul>
            {stat.clickDetails.map((c, j) => (
              <li key={j}>{c.time} | {c.source} | {c.location}</li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default URLStats;
