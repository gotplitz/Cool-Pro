import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { deleteComment } from '../../actions/post';

const CommentItem = ({
  postId,
  comment: { _id, cstatus, comment, name, photo, user, date },
  auth,
  deleteComment,
}) => {
  return (
    <Fragment>
      {cstatus === true ? (
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
            {auth.user && user === auth.user._id ? (
              <Fragment>
                <div className='delete-comment'>
                  <button
                    onClick={(e) => deleteComment(postId, _id)}
                    type='button'
                    className='delete-post'
                  >
                    <i className='fas fa-trash'></i> <span>Delete Comment</span>
                  </button>
                </div>
              </Fragment>
            ) : null}
          </div>
          <div className='comment-body'>
            <p>{comment}</p>
          </div>
        </li>
      ) : null}
    </Fragment>
  );
};

CommentItem.propTypes = {
  postId: PropTypes.string.isRequired,
  comment: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteComment: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { deleteComment })(CommentItem);
