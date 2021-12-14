import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addDiscussion } from '../../actions/ticket';

const DiscussionForm = ({ ticketId, addDiscussion, auth: { user } }) => {
  const [discussion, setDiscussion] = useState('');

  return (
    <section className='lighter-bg section-size-1'>
      <div className='container'>
        <div className='grid center'>
          <div className='column-8 offset-3'>
            <h5>Reply to Ticket</h5>
            <div className='space-2'></div>
            <form
              className='box white shadow text-left'
              onSubmit={(e) => {
                e.preventDefault();
                addDiscussion(ticketId, { discussion });
                setDiscussion('');
              }}
            >
              <label>Reply Here</label>
              <textarea
                required
                name='discussion'
                placeholder='Discuss about this ticket'
                value={discussion}
                onChange={(e) => setDiscussion(e.target.value)}
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

DiscussionForm.propTypes = {
  addDiscussion: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const stateMapToProps = (state) => ({
  auth: state.auth,
});

export default connect(stateMapToProps, { addDiscussion })(DiscussionForm);
