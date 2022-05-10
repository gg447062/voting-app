import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateVotes, addComment } from '../Redux/votes';

const VoteCard = ({ el, i }) => {
  const dispatch = useDispatch();
  const [votes, setVotes] = useState(0);
  const [comment, setComment] = useState('');
  const initialRender = useRef(true);

  const handleAdd = () => {
    setVotes(votes + 1);
  };

  const handleRemove = () => {
    setVotes(votes - 1);
  };

  const handleChange = (e) => {
    const _votes = isNaN(parseInt(e.target.value))
      ? 0
      : parseInt(e.target.value);
    setVotes(_votes);
  };

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      const timer = setTimeout(() => {
        dispatch(updateVotes(el.id, votes));
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [votes]);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      const timer = setTimeout(() => {
        dispatch(addComment(el.id, comment));
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [comment]);

  return (
    <div className="vote--card-wrapper">
      <div
        className="flex center has-border vote--icon"
        style={{
          backgroundImage: el.src,
        }}
      ></div>
      <div className="flex column center full-width rounded-corners vote--card">
        <h2 className="fs-500">{el.name} </h2>
        {/* <div>
        tags here
      </div> */}
        <div className="flex column center full-width">
          <div className="flex sa">
            <div
              className="vote--button flex center has-border"
              onClick={handleRemove}
            >
              -
            </div>
            <input
              type={'text'}
              id={el.id}
              className="vote--input"
              value={votes}
              placeholder={0}
              onChange={handleChange}
              // onChange={debouncedHandleChange}
            ></input>
            {/* <div>{el.votes}</div> */}
            <div
              className="vote--button flex center has-border"
              onClick={handleAdd}
            >
              +
            </div>
          </div>
          <p>SEED ALLOCATED</p>
        </div>
        <textarea
          className="full-width rounded-corners comments"
          id="comments"
          placeholder="add a comment"
          onChange={(e) => {
            setComment(e.target.value);
          }}
        ></textarea>
      </div>
    </div>
  );
};

export default VoteCard;
