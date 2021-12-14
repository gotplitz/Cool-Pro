import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addComment } from '../../actions/post';

const CommentForm = ({ postId, addComment, auth: { user } }) => {
  const [comment, setComment] = useState('');
  const [cstatus, setCstatus] = useState(false);

  return (
    <section className='lighter-bg section-size-2'>
      <div className='container'>
        <div className='grid center'>
          <div className='column-8 offset-3'>
            <h5>Tell us what you think</h5>
            <div className='space-2'></div>
            <form
              className='box white shadow text-left'
              onSubmit={(e) => {
                e.preventDefault();
                addComment(postId, { comment, cstatus });
                setComment('');
                setCstatus(false);
              }}
            >
              <label>Your comment</label>
              <textarea
                required
                name='comment'
                placeholder='Your message, please!'
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              ></textarea>
              <p>
                <img
                  src={`/uploads/${user && user.photo}`}
                  alt={user && user.name}
                  style={{ width: 50, height: 'auto', marginRight: 25 }}
                />
                By {user && user.name}
              </p>
              <button
                className='button bordered'
                id='send'
                type='submit'
                value='Submit'
              >
                Place comment
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const stateMapToProps = (state) => ({
  auth: state.auth,
});

export default connect(stateMapToProps, { addComment })(CommentForm);
