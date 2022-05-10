import React, { useEffect } from 'react';
import ReactPlayer from 'react-player';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrent } from '../../Redux/applications';
import { addToTop10 } from '../../Redux/votes';
import { getUrl, getImageURL } from '../../utils';

const Card = () => {
  const all = useSelector((state) => state.applications.all);
  const currentIndex = useSelector((state) => state.applications.current);
  const top10 = useSelector((state) => state.votes.top10);

  const dispatch = useDispatch();

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
          comments: '',
        })
      );
    }
  };

  const handleKeyDown = (e) => {
    if (e.key == 'ArrowRight') {
      next();
    } else if (e.key == 'ArrowLeft') {
      previous();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [all, currentIndex]);

  return (
    <div className="card--container flex">
      {all.length > 0 && (
        <div className="flex card--info">
          {/* top */}
          <div className="card--title flex">
            <div
              className={`circle flex center bg-cover has-border`}
              style={{
                backgroundImage: `url(${getImageURL(
                  all[currentIndex]['Project Name']
                )})`,
              }}
            ></div>
            <div className="">
              <div className="fs-600 ff-sans">
                {all[currentIndex]['Project Name']}
              </div>
              <div className="fs-400 ff-sans-c ul">
                {all[currentIndex]['Contact Name']}
              </div>
            </div>
          </div>
          {/* middle */}
          <div className="flex sb full-width">
            {/* left */}
            <div className="flex column">
              <iframe
                src={getUrl(
                  all[currentIndex]['Video'],
                  all[currentIndex]['Project Name']
                )}
                frameBorder="0"
                className="video"
                // style={{ borderRadius: '1.5em' }}
              />
              <div className="flex column">
                <h3>Relevant Links</h3>
                <a
                  href="https://discord.com/"
                  target={'_blank'}
                  className="ff-sans-c underline"
                >
                  {/* <img
                    className="card--icon"
                    src="assets/images/discord_icon.png"
                    alt="discord logo"
                  /> */}
                  Discord
                </a>
                <a
                  href="https://twitter.com/home"
                  target={'_blank'}
                  className="ff-sans-c underline"
                >
                  {/* <img
                    className="card--icon"
                    src="assets/images/twitter_icon.png"
                    alt="twitter logo"
                  /> */}
                  Twitter
                </a>
              </div>
            </div>
            {/* right */}
            <div className="card--right flex column sa">
              <div className="c2a">
                <div className="fs-400 ff-sans-c">
                  {all[currentIndex]['Call to Adventure']}
                </div>
              </div>
              <div className="full-width flex center">
                <button
                  className="fs-500 ff-sans-c"
                  onClick={handleClick}
                  disabled={top10.length === 10}
                >
                  Add to Favorites
                </button>
              </div>
              <div className="full-width flex center">
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
        </div>
      )}
    </div>
  );
};

export default Card;
