import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPost, updateComment } from '../../actions/post';

// Other parts
import ScrollToTop from '../routing/ScrollToTop';

const CommentEdition = ({
  getPost,
  post: { post, loading },
  location: { currentcom },
  postId,
  commentId,
  updateComment,
  match
}) => {
  const [formData, setFormdata] = useState({
    cstatus: false,
    comment: '',
    user: '',
    name: '',
    photo: ''
  });

  useEffect(() => {
    getPost(match.params.id);

    const newcstatus = currentcom && currentcom.cstatus;
    const newcomment = currentcom && currentcom.comment;
    const newuser = currentcom && currentcom.user;
    const newphoto = currentcom && currentcom.photo;
    const newname = currentcom && currentcom.name;

    setFormdata({
      cstatus: newcstatus,
      comment: newcomment,
      user: newuser,
      photo: newphoto,
      name: newname
    });
  }, [getPost, currentcom, match.params.id]);

  const { cstatus, comment, user, photo, name } = formData;

  const onChange = e =>
    setFormdata({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    postId = match.params.id;
    commentId = match.params.commentid;
    updateComment(postId, commentId, formData);
  };

  return (
    <section className="section-size-2 lighter-bg">
      <ScrollToTop />
      <div className="container">
        <div className="grid">
          <div className="column-4 ">
            <Link
              to="/user-comments"
              className="white-button"
              style={{ marginBottom: 30, display: 'block' }}
            >
              Back to Comments
            </Link>
            <h4>Comments management</h4>
            <h1 className="animated-text">Review & Edit</h1>
          </div>
          <div className="column-8 profile-main-area">
            <Fragment>
              <form
                onSubmit={e => onSubmit(e)}
                className="box white shadow text-left"
              >
                <label>Comment Status *</label>
                <div className="form-input-select">
                  <select
                    id="cstatus"
                    name="cstatus"
                    value={cstatus}
                    onChange={e => onChange(e)}
                  >
                    <option value="true">Published</option>>
                    <option value="false">Draft</option>
                  </select>
                  <i className="fas fa-chevron-down"></i>
                </div>

                <label>Comment</label>
                <textarea
                  name="comment"
                  placeholder="Comment goes here"
                  value={comment}
                  onChange={e => onChange(e)}
                ></textarea>

                <label>Author of comment</label>
                <input name="name" type="text" value={name} readOnly />

                <label>User</label>
                <input name="user" type="text" value={user} readOnly />

                <label>Photo file</label>
                <input name="photo" type="text" value={photo} readOnly />

                <button className="button" type="submit">
                  Submit
                </button>
              </form>
            </Fragment>
          </div>
        </div>
      </div>
    </section>
  );
};

CommentEdition.propTypes = {
  getPost: PropTypes.func.isRequired,
  updateComment: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  post: state.post
});

export default connect(mapStateToProps, { getPost, updateComment })(
  CommentEdition
);
