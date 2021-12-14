import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addResponse } from '../../actions/quote';

const ResponseForm = ({ quoteId, addResponse, auth: { user } }) => {
  const [response, setResponse] = useState('');

  return (
    <section className='lighter-bg section-size-1'>
      <div className='container'>
        <div className='grid center'>
          <div className='column-8 offset-3'>
            <h5>Reply or add more details</h5>
            <div className='space-2'></div>
            <form
              className='box white shadow text-left'
              onSubmit={(e) => {
                e.preventDefault();
                addResponse(quoteId, { response });
                setResponse('');
              }}
            >
              <label>Your reply</label>
              <textarea
                required
                name='response'
                placeholder='Write your message here'
                value={response}
                onChange={(e) => setResponse(e.target.value)}
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
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

ResponseForm.propTypes = {
  addResponse: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const stateMapToProps = (state) => ({
  auth: state.auth,
});

export default connect(stateMapToProps, { addResponse })(ResponseForm);
