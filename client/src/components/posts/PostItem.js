import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { addLike, removeLike, deletePost } from '../../actions/post';

const PostItem = ({
  addLike,
  removeLike,
  deletePost,
  isAuthenticated,
  auth,
  post: {
    _id,
    featuredimg,
    title,
    postintro,
    name,
    photo,
    likes,
    comments,
    date,
  },
}) => {
  return (
    <div className='grid-item column'>
      <Link
        className='thumb blog space-2 animated'
        to={`/blog-and-tips/${_id}`}
      >
        <div className='post-avatar'>
          <img src={`/uploads/${photo}`} alt={name} />
        </div>
        <img alt={title} src={`/uploads/${featuredimg}`} />
        <div className='caption'>
          <div className='title'>{title}</div>
          <p>{postintro}</p>
          <div className='sub'>
            On <Moment format='MM/DD/YYYY'>{date}</Moment> — by {name}
          </div>
        </div>
      </Link>
      <div className='sub likes-shares'>
        {isAuthenticated ? (
          <Fragment>
            <button
              onClick={(e) => addLike(_id, window.location.reload(false))}
              className='likes-count'
            >
              <i className='fas fa-thumbs-up'></i>{' '}
              {likes.length === 0 ? (
                <span>Be the first to like!</span>
              ) : (
                <span>{likes.length}</span>
              )}
            </button>
            <button
              onClick={(e) => removeLike(_id, window.location.reload(false))}
              className='likes-count'
            >
              <i className='far fa-thumbs-down'></i>
            </button>
            <div className='comments-count'>
              <i className='fas fa-pen-alt'></i> <span>{comments.length}</span>
            </div>
          </Fragment>
        ) : (
          <Fragment>
            <button onClick={(e) => addLike(_id)} className='likes-count'>
              <i className='fas fa-thumbs-up'></i>{' '}
              {likes.length === 0 ? (
                <span>Be the first to like!</span>
              ) : (
                <span>{likes.length}</span>
              )}
            </button>
            <div className='comments-count'>
              <i className='fas fa-pen-alt'></i> <span>{comments.length}</span>
            </div>
          </Fragment>
        )}

        {auth.user && auth.user.usertype === 'worker' && (
          <button
            onClick={(e) => deletePost(_id)}
            type='button'
            className='delete-post'
          >
            <i className='fas fa-trash'></i>
          </button>
        )}
      </div>
    </div>
  );
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { addLike, removeLike, deletePost })(
  PostItem
);
