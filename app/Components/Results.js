import React from 'react';
import Logo from './Logo';
import { useSelector } from 'react-redux';

const Results = () => {
  const sortedTop10 = useSelector((state) => state.votes.top10).sort(
    (a, b) => b.votes - a.votes
  );

  return (
    <div className="max-height max-width blue-gradient flex column center">
      <Logo />
      <div className="flex sa full-width">
        <div
          className="light rounded-corners"
          style={{ width: '40vw', height: '60vh' }}
        >
          Your Favorites
          <table className="ff-sans-c">
            <thead>
              <tr>
                <th>Rank</th>
                <th>DAO</th>
                <th>Seed Count</th>
              </tr>
            </thead>
            <tbody>
              {sortedTop10.map((el, i) => {
                return (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{el.name}</td>
                    <td>{el.votes}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div
          className="light rounded-corners"
          style={{ width: '40vw', height: '60vh' }}
        >
          Leaderboard
        </div>
      </div>
    </div>
  );
};

export default Results;
