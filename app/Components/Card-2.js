import React, { useEffect } from 'react';
import ReactPlayer from 'react-player';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRecords } from '../Redux/applications';

const Card2 = () => {
  const allApplications = useSelector((state) => state.applications.all);
  const currentIndex = useSelector((state) => state.applications.current);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRecords());
    console.log('fetching');
  }, []);

  return (
    <React.Fragment>
      {allApplications.length > 0 && (
        <div className="tile is-vertical">
          {/* header */}
          <div className="header tile is-child">
            <div className="is-size-4">
              {allApplications[currentIndex]['Project Name']}
            </div>
            <div className="is-size-6">
              {allApplications[currentIndex]['Contact Name']}
            </div>
          </div>
          {/* main body*/}
          <div className="card tile is-parent has-border has-shadow">
            {/* left */}
            <div className="tile is-parent is-vertical is-7">
              <div className="tile video-wrapper">
                {/* <ReactPlayer
                  className="video"
                  url={allApplications[currentIndex]['Video']}
                  controls
                  height="100%"
                  width="100%"
                ></ReactPlayer> */}
                <ReactPlayer
                  url="https://www.youtube.com/embed/nU21rCWkuJw"
                  // className="video"
                  // height="100%"
                  // width="100%"
                ></ReactPlayer>
              </div>
              <div className="tile is-parent is-vertical has-border c2a-wrapper">
                <h3 className="c2a-header">Call to Adventure</h3>
                <p className="c2a-content">
                  {allApplications[currentIndex]['Call to Adventure']}
                </p>
              </div>
            </div>
            {/* right */}
            <div className="tile is-parent">
              <div className="tile is-child has-border insider-info">
                <h3>Reviewer Scores</h3>
                <p>85 - Josh</p>
                <p>
                  This is a great project that is awesome and should be a part
                  of the accelerator because it’s GMI.
                </p>
                <p>75 - John</p>
                <p>
                  This is a great project that is awesome and should be a part
                  of the accelerator because it’s GMI.
                </p>
                <h3>Curated Lists</h3>
                <p>Appears on the curated lists of:</p>
                <p>Malcolm</p>
                <p>Jonathan</p>
                <p>Raf</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Card2;
