import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPosts } from '../../actions/post';
import Spinning from '../layout/Spinning';

import CommentItem from './CommentItem';
import ScrollToTop from '../routing/ScrollToTop';

const Comments = ({ getPosts, post: { posts, loading } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return loading ? (
    <Spinning />
  ) : (
    <div className='content'>
      <ScrollToTop />
      <Fragment>
        <section className='section-size-2 lighter-bg'>
          <ScrollToTop />
          <div className='container'>
            <div className='grid'>
              <div className='column-4 '>
                <Link
                  to='/dashboard'
                  className='white-button'
                  style={{ marginBottom: 30, display: 'block' }}
                >
                  Back to Dashboard
                </Link>

                <Fragment>
                  <h4>List of comments by article</h4>
                  <h1 className='animated-text'>Recent Comments</h1>
                </Fragment>
              </div>
              <div className='column-8 profile-main-area'>
                {posts.map((post) => (
                  <CommentItem item={post} key={post._id} post={post} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    </div>
  );
};

Comments.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPosts })(Comments);
