import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';

const CommentItem = ({ auth, post: { _id, title, comments, date } }) => {
  return (
    <Fragment>
      {auth.user.usertype === 'worker' && comments.length > 0 ? (
        <div
          className="quotee-post comment-list"
          style={{
            borderBottom: '2px solid #e6e6e6',
            paddingBottom: 25,
            marginBottom: 25
          }}
        >
          <Fragment>
            <div className="title">List of comments for</div>
            <h4>{title}</h4>
            {comments.map((comment, id) => (
              <div key={id} className="caption comments-data">
                <div className="first-col">
                  <h6>{comment.comment}</h6>

                  <Fragment>
                    <div className="sub">By {comment.name}</div>

                    <p>
                      Date <Moment format="MM/DD/YYYY">{comment.date}</Moment>
                    </p>
                  </Fragment>
                </div>
                <div className="second-col">
                  {comment.cstatus ? (
                    <Fragment>
                      <small>
                        Comment Status:
                        <br />
                        <span style={{ color: '#28a745' }}>
                          <i className="fas fa-check"></i> published
                        </span>
                      </small>
                    </Fragment>
                  ) : (
                    <Fragment>
                      <small>
                        Comment Status:
                        <br />
                        <span style={{ color: '#fe9100' }}>
                          <i className="fas fa-pause-circle"></i> draft
                        </span>
                      </small>
                    </Fragment>
                  )}
                  <br />
                  <Link
                    className="red-button"
                    to={{
                      pathname: `/review-commment/${_id}/${comment._id}`,
                      currentcom: comment
                    }}
                  >
                    Review and Edit
                  </Link>
                </div>
              </div>
            ))}
          </Fragment>
        </div>
      ) : null}
    </Fragment>
  );
};

CommentItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, {})(CommentItem);
