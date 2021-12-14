import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import ReactQuill from 'react-quill';
import { addPost } from '../../actions/post';
import { Button } from 'react-bootstrap';
import axios from 'axios';

// Components
import Message from '../layout/Message';
import Progress from '../layout/Progress';

import 'react-quill/dist/quill.snow.css';
import ScrollToTop from '../routing/ScrollToTop';

const PostForm = ({ addPost, auth: { user } }) => {
  const [redirect, setRedirect] = useState(false);
  const [file, setFile] = useState('');
  const [featured, setFeatured] = useState('Your File');
  const [uploadedFile, setUploadedFile] = useState({});
  const [message, setMessage] = useState('');
  const [uploadPer, setUploadPer] = useState(0);
  const [formData, setFormData] = useState({
    featuredimg: 'rocket-launch.jpg',
    title: '',
    postintro: '',
    content: '',
  });

  const { featuredimg, title, postintro, content } = formData;

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, content: e });
  };

  const inChange = (e) => {
    setFile(e.target.files[0]);
    setFeatured(e.target.files[0].name.replace(/ /g, '-'));
    setFormData({
      ...formData,
      featuredimg: e.target.files[0].name.replace(/ /g, '-'),
    });
  };

  const onPress = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('featured', file);

    try {
      const res = await axios.post('/alluploads', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: (progressEvent) => {
          setUploadPer(
            parseInt(
              Math.round((progressEvent.loaded * 100) / progressEvent.total)
            )
          );
          // Clear percentage
          setTimeout(() => setUploadPer(0), 20000);
        },
      });

      const { featured, filePath } = res.data;

      setUploadedFile({ featured, filePath });
      setMessage('File Uploaded');
    } catch (err) {
      if (err.response.status === 500) {
        setMessage('There was a problem with the server');
      } else {
        setMessage(err.response.data.msg);
      }
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addPost({
      featuredimg,
      title,
      postintro,
      content,
    });

    setFormData({
      featuredimg: 'rocket-launch.jpg',
      title: '',
      postintro: '',
      content: '',
    });
    setRedirect(true);
  };

  // Redirect if registered in
  if (redirect) {
    return <Redirect to='/blog-and-tips' />;
  }

  /*
   * Quill modules to attach to editor
   * See https://quilljs.com/docs/modules/ for complete options
   */
  PostForm.modules = {
    toolbar: [
      ['bold', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link', 'image', 'video'],
      ['clean'],
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
  };
  /*
   * Quill editor formats
   * See https://quilljs.com/docs/formats/
   */
  PostForm.formats = [
    'bold',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'video',
  ];

  PostForm.propTypes = {
    placeholder: PropTypes.string,
  };

  return (
    <Fragment>
      <ScrollToTop />
      {user && user.usertype === 'worker' ? (
        <Fragment>
          <section className='section-size-2 lighter-bg'>
            <div className='container'>
              <div className='grid'>
                <div className='column-12'>
                  <h4>Thanks for updating our website</h4>
                  <h1 className='animated-text'>Add Content</h1>
                  <p>
                    Add a blog, a tip or any other information that will help
                    our customers to be informed and engaged with our website.
                  </p>
                  <Link to='/dashboard'>Go Back</Link>
                  <div className='space-3'></div>
                  <form
                    className='box white shadow text-left'
                    onSubmit={(e) => onSubmit(e)}
                  >
                    <label>Title</label>
                    <input
                      name='title'
                      type='text'
                      placeholder='Post title'
                      value={title}
                      onChange={(e) => onChange(e)}
                    />
                    <label>Post Intro</label>
                    <input
                      name='postintro'
                      type='text'
                      placeholder='This will be the preview of the post'
                      value={postintro}
                      onChange={(e) => onChange(e)}
                    />
                    <label>Content</label>
                    <ReactQuill
                      theme='snow'
                      modules={PostForm.modules}
                      formats={PostForm.formats}
                      value={content}
                      placeholder='Write the body of the post here *'
                      onChange={(e) => handleChange(e)}
                      style={{ minHeight: 800 }}
                    />

                    <label>Featured Image</label>
                    <div className='grid'>
                      <div className='column-8'>
                        <input
                          id='myph'
                          className='avatar-input'
                          type='text'
                          name='featuredimg'
                          value={featured}
                          onChange={(e) => onChange(e)}
                        />
                      </div>
                      <div className='column-4'>
                        <input
                          type='file'
                          id='fileId'
                          name='file'
                          style={{ display: 'none' }}
                          onChange={inChange}
                        />
                        <label
                          className='upload-button'
                          htmlFor='fileId'
                          id='filelabel'
                          value={uploadedFile.filePath}
                        >
                          <i className='fas fa-upload'></i> <span>Browse</span>
                        </label>
                      </div>
                      <div className='column-12'>
                        {message ? <Message msg={message} /> : null}
                        <Button onClick={onPress} variant='primary' size='sm'>
                          Upload Image
                        </Button>

                        {uploadedFile ? (
                          <div className='grid placeholder'>
                            <div className='column-12'>
                              <div className='uploaded-image'>
                                <img
                                  src={uploadedFile.filePath}
                                  alt={uploadedFile.featured}
                                />
                              </div>
                            </div>
                          </div>
                        ) : null}
                      </div>
                      <div className='column-12'>
                        <Progress percentage={uploadPer} />
                      </div>
                    </div>
                    <button className='button' type='submit'>
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </Fragment>
      ) : (
        <Redirect to='/blog-and-tips' />
      )}
    </Fragment>
  );
};

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { addPost })(PostForm);
