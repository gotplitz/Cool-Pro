import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPosts } from '../../actions/post';
import Spinning from '../layout/Spinning';

import PostItem from './PostItem';
import ScrollToTop from '../routing/ScrollToTop';

const Posts = ({ getPosts, post: { posts, loading } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return loading ? (
    <Spinning />
  ) : (
    <div className="content">
      <ScrollToTop />
      <section className="section-size-2">
        <div className="container">
          <div className="grid">
            <div className="column-12 centered">
              <h1 className="animated-text">Blog & Tips</h1>
              <h4>
                Recommendations, guides, and tips from the Cool Pro Mechanical
                experts
              </h4>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="grid masonry columns-3" id="grid">
            <div className="grid-sizer"></div>
            {posts.map(post => (
              <PostItem item={post} key={post._id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  post: state.post
});

export default connect(mapStateToProps, { getPosts })(Posts);
