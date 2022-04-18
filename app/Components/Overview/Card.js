import React, { useEffect } from 'react';
import ReactPlayer from 'react-player';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRecords, setCurrent } from '../../Redux/applications';
import { addToTop10 } from '../../Redux/votes';
import { getUrl, getImageURL } from '../../utils';

const Card = () => {
  const all = useSelector((state) => state.applications.all);
  const currentIndex = useSelector((state) => state.applications.current);
  const top10 = useSelector((state) => state.votes.top10);
  const top10Total = top10.reduce((prev, curr) => {
    if (curr.name !== 'empty') {
      prev++;
    }
    return prev;
  }, 0);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const next = () => {
    const nextIndex = (currentIndex + 1) % all.length;
    dispatch(setCurrent(nextIndex));
  };

  const previous = () => {
    const previousIndex =
      currentIndex - 1 < 0
        ? all.length + currentIndex - 1
        : (currentIndex - 1) % all.length;
    dispatch(setCurrent(previousIndex));
  };

  const checkInTop10 = () => {
    let i = 0;
    while (top10[i]) {
      if (top10[i].id === currentIndex) return true;
      i++;
    }
    return false;
  };

  const handleClick = () => {
    const inTop10 = checkInTop10();
    if (!inTop10) {
      dispatch(
        addToTop10(currentIndex, {
          id: currentIndex,
          src: `url(${getImageURL(all[currentIndex]['Project Name'])})`,
          name: all[currentIndex]['Project Name'],
          votes: 0,
        })
      );
    }
  };

  // useEffect(() => {
  //   dispatch(fetchRecords());
  //   // if (address) {
  //   //   dispatch(fetchRecords());
  //   // } else {
  //   //   navigate('/');
  //   // }
  // }, []);

  return (
    <div className="card--container flex container ">
      {all.length > 0 && (
        <div className="flex card--info">
          {/* top */}
          <div className="card--title flex ">
            <div
              className={`circle flex center bg-cover has-border`}
              style={{
                backgroundImage: `url(${getImageURL(
                  all[currentIndex]['Project Name']
                )})`,
              }}
            ></div>
            <h1 className="fs-800 ff-serif">
              {all[currentIndex]['Project Name']}
            </h1>
            <h3 className="fs-400">{all[currentIndex]['Contact Name']}</h3>
            {/* <h1 className="fs-800">SEED CLUB ACCELERATOR 5</h1> */}
          </div>
          {/* middle */}
          <div className="card--middle flex">
            {/* left */}
            <iframe
              src={getUrl(
                all[currentIndex]['Video'],
                all[currentIndex]['Project Name']
              )}
              frameBorder="0"
              className="video"
              style={{ borderRadius: '1.5em' }}
            />
            {/* right */}
            <div className="card--right flex">
              {/* <h2 className="fs-700 ff-serif">
                {all[currentIndex]['Project Name']}
              </h2> */}
              <div className="c2a">
                <div className="fs-400 ff-sans-c">
                  {all[currentIndex]['Call to Adventure']}
                </div>
              </div>
              <button
                className="has-border"
                onClick={handleClick}
                disabled={top10Total === 10}
              >
                ADD TO FAVORITES
              </button>
            </div>
          </div>
          {/* bottom */}
          <div className="card--bottom flex sb">
            <div className="flex column">
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
            <div className="flex">
              <img
                className="arrow"
                src="assets/images/arrow_left.png"
                alt="left arrow"
                onClick={previous}
              ></img>
              <img
                className="arrow"
                src="assets/images/arrow.png"
                alt="right arrow"
                onClick={next}
              ></img>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
