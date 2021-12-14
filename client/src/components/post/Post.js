import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinning from '../layout/Spinning';
import { getPost } from '../../actions/post';
import FullPost from './FullPost';

import CommentForm from './CommentForm';
import CommentItem from './CommentItem';
import ScrollToTop from '../routing/ScrollToTop';

const Post = ({ getPost, isAuthenticated, post: { post, loading }, match }) => {
  useEffect(() => {
    getPost(match.params.id);
  }, [getPost, match.params.id]);
  return loading || post === null ? (
    <Spinning />
  ) : (
    <Fragment>
      <ScrollToTop />
      <FullPost post={post} />
      <section className='lighter-bg section-size-2'>
        <div className='container'>
          <div className='grid center'>
            <div className='column-8 offset-3'>
              <h5>Comments on this article</h5>
              <div className='space-2'></div>
              <div className='column-12'>
                <ul className='comments box white shadow'>
                  {post.comments.length > 0 ? (
                    post.comments.map((comment) => (
                      <CommentItem
                        key={comment._id}
                        comment={comment}
                        postId={post._id}
                      />
                    ))
                  ) : (
                    <Fragment>There is no comments for this post</Fragment>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {isAuthenticated ? (
        <Fragment>
          <CommentForm postId={post._id} />
        </Fragment>
      ) : (
        <section className='lighter-bg section-size-2'>
          <div className='container'>
            <div className='grid center'>
              <div className='column-8 offset-3'>
                You must be logged in to submit comments.{' '}
                <Link to='/login'>Log In</Link> or{' '}
                <Link to='/register'>Register</Link>
              </div>
            </div>
          </div>
        </section>
      )}
    </Fragment>
  );
};

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  post: state.post,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { getPost })(Post);
