import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPosts } from '../../actions/post';
import Spinning from '../layout/Spinning';
import PostItem from '../posts/PostItem';

const LastPosts = ({ getPosts, post: { posts, loading } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return loading ? (
    <Spinning />
  ) : (
    <div className='container'>
      <div className='grid'>
        <div className='space-1'></div>
        <div className='column-12 why-cool-pro'>
          <p>Latest News from Cool Pro Mechanical</p>
          <h3 style={{ fontWeight: 700 }}>
            Find some tips, recommendations and more below
          </h3>

          <div className='box white'>
            <div className='grid masonry columns-3' id='grid'>
              {posts.slice(0, 3).map((post) => (
                <PostItem item={post} key={post._id} post={post} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

LastPosts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPosts })(LastPosts);
