import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { addLike, removeLike, deletePost } from '../../actions/post';
import { Link } from 'react-router-dom';

const FullPost = ({
  addLike,
  removeLike,
  deletePost,
  auth,
  post: {
    _id,
    featuredimg,
    title,
    postintro,
    content,
    name,
    user,
    photo,
    likes,
    comments,
    date,
  },
}) => {
  return (
    <Fragment>
      <section className='section-size-4 lighter-bg background-zoom'>
        <img
          className='opacity-4 background'
          alt={title}
          src={`/uploads/${featuredimg}`}
        />
        <div className='container text-center'>
          <div className='grid center'>
            <div className='column-12'>
              <h1 className='animated-text'>{title}</h1>
            </div>
          </div>
        </div>
      </section>
      <section className='section-size-1'>
        <div className='container'>
          <div className='grid center full-post'>
            <div className='column-3'>
              <div className='caption-full-post'>
                <div className='post-avatar-full'>
                  <img src={`/uploads/${photo}`} alt={name} />
                </div>
                <div className='sub' style={{ paddingBottom: 20 }}>
                  On <Moment format='MM/DD/YYYY'>{date}</Moment> <br />
                  by {name}
                </div>
                <Link
                  className='red-button'
                  style={{ marginLeft: 0 }}
                  to='/blog-and-tips'
                >
                  Back to Blog
                </Link>
              </div>

              <div className='sub likes-shares'>
                {auth.user ? (
                  <Fragment>
                    <button
                      onClick={(e) =>
                        addLike(_id, window.location.reload(false))
                      }
                      className='likes-count'
                    >
                      <i className='fas fa-thumbs-up'></i>{' '}
                      {likes.length === 0 ? (
                        <span>No likes</span>
                      ) : (
                        <span>{likes.length}</span>
                      )}
                    </button>
                    <button
                      onClick={(e) =>
                        removeLike(_id, window.location.reload(false))
                      }
                      className='likes-count'
                    >
                      <i className='far fa-thumbs-down'></i>
                    </button>
                    <div className='comments-count'>
                      <i className='fas fa-pen-alt'></i>{' '}
                      <span>{comments.length}</span>
                    </div>
                  </Fragment>
                ) : (
                  <Fragment>
                    <button
                      onClick={(e) => addLike(_id)}
                      className='likes-count'
                    >
                      <i className='fas fa-thumbs-up'></i>{' '}
                      {likes.length === 0 ? (
                        <span>Be the first to like!</span>
                      ) : (
                        <span>{likes.length}</span>
                      )}
                    </button>
                    <div className='comments-count'>
                      <i className='fas fa-pen-alt'></i>{' '}
                      <span>{comments.length}</span>
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
            <div className='column-8'>
              <blockquote className='animated'>
                <span>{postintro}</span>
              </blockquote>
              <div className='full-post-content'>
                <div dangerouslySetInnerHTML={{ __html: content }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

FullPost.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { addLike, removeLike, deletePost })(
  FullPost
);
