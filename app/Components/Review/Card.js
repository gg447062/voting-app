import React, { useEffect } from 'react';
import ReactPlayer from 'react-player';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRecords, setCurrent } from '../../Redux/applications';

const Card = () => {
  const allApplications = useSelector((state) => state.applications.all);
  const currentIndex = useSelector((state) => state.applications.current);
  const address = useSelector((state) => state.account.address);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const next = () => {
    const nextIndex = (currentIndex + 1) % allApplications.length;
    dispatch(setCurrent(nextIndex));
  };

  const previous = () => {
    const previousIndex =
      currentIndex - 1 < 0
        ? allApplications.length + currentIndex - 1
        : (currentIndex - 1) % allApplications.length;
    dispatch(setCurrent(previousIndex));
  };

  useEffect(() => {
    dispatch(fetchRecords());
    // if (address) {
    //   dispatch(fetchRecords());
    // } else {
    //   navigate('/');
    // }
  }, []);

  return (
    <div className="card--container flex container has-border green">
      <img
        className="arrow"
        src="assets/images/arrow_left.png"
        alt="left arrow"
        onClick={previous}
      ></img>
      {allApplications.length > 0 && (
        <div className="flex card--info">
          {/* top */}
          <div className="card--title flex">
            <div className="card--logo dark">
              {allApplications[currentIndex]['Project Name'][0]}
            </div>
            <h1 className="fs-700 ff-serif">
              {allApplications[currentIndex]['Project Name']}
            </h1>
          </div>
          {/* bottom */}
          <div className="card--bottom flex">
            {/* left */}
            <iframe
              src="https://www.youtube.com/embed/nU21rCWkuJw"
              frameBorder="0"
              className="video"
              style={{ borderRadius: '1.5em' }}
            />
            {/* right */}
            <div className="card--right flex">
              <h2 className="fs-400">
                {allApplications[currentIndex]['Contact Name']}
              </h2>
              <div className="c2a">
                <div className="fs-400 ff-sans-c">
                  {allApplications[currentIndex]['Call to Adventure']}
                </div>
              </div>
              <div className="flex">
                <a href="https://discord.com/" target={'_blank'}>
                  <img
                    className="card--icon"
                    src="assets/images/discord_icon.png"
                    alt="discord logo"
                  />
                </a>
                <a href="https://twitter.com/home" target={'_blank'}>
                  <img
                    className="card--icon"
                    src="assets/images/twitter_icon.png"
                    alt="twitter logo"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
      <img
        className="arrow"
        src="assets/images/arrow.png"
        alt="right arrow"
        onClick={next}
      ></img>
    </div>
  );
};

export default Card;
