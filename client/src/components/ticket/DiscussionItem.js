import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const DiscussionItem = ({
  ticketId,
  discussion: { _id, discussion, name, photo, user, date },
}) => {
  return (
    <li className='comment'>
      <div className='author'>
        <figure className='author-avatar'>
          <img alt={name} src={`/uploads/${photo}`} />
        </figure>

        <div className='comment-info'>
          <div className='author-name'>{name}</div>
          <div className='comment-date'>
            <Moment format='MM/DD/YYYY'>{date}</Moment>
          </div>
        </div>
      </div>
      <div className='comment-body'>
        <p>{discussion}</p>
      </div>
    </li>
  );
};

DiscussionItem.propTypes = {
  ticketId: PropTypes.string.isRequired,
  discussion: PropTypes.object.isRequired,
};

export default DiscussionItem;
