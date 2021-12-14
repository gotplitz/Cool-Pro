import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addQuote } from '../../actions/quote';
import DatePicker from 'react-datepicker';
import { setHours, setMinutes, subMonths, addMonths } from 'date-fns';

import 'react-datepicker/dist/react-datepicker.css';

const QuoteForm = ({ addQuote }) => {
  const [formData, setFormData] = useState({
    projectname: '',
    rangeone: setHours(setMinutes(new Date(), 0), 9),
    rangetwo: setHours(setMinutes(new Date(), 0), 9),
    details: ''
  });

  const { projectname, rangeone, rangetwo, details } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const dateoChange = e => {
    setFormData({ ...formData, rangeone: e });
  };

  const datetChange = e => {
    setFormData({ ...formData, rangetwo: e });
  };

  return (
    <section>
      <div className="grid">
        <div className="column-12 profile-main-area">
          <form
            className="box white shadow text-left"
            onSubmit={e => {
              e.preventDefault();
              addQuote(formData);
              setFormData({
                projectname: '',
                rangeone: '',
                rangetwo: '',
                details: ''
              });
            }}
          >
            <label>Project Name</label>
            <input
              name="projectname"
              type="text"
              placeholder="Name your project"
              value={projectname}
              onChange={e => onChange(e)}
            />
            <p>
              Please provide two possible date when can visit you, we will
              confirm the date available in our calendar.
            </p>
            <label>Option 1</label>
            <DatePicker
              selected={rangeone}
              showTimeSelect
              minTime={setHours(setMinutes(new Date(), 0), 9)}
              maxTime={setHours(setMinutes(new Date(), 30), 15)}
              onChange={e => dateoChange(e)}
              dateFormat="MMMM d, yyyy h:mm aa"
              placeholder="e.g. Month 01, 2020"
              minDate={subMonths(new Date(), 0)}
              maxDate={addMonths(new Date(), 3)}
              showMonthYearDropdown
            />
            <label>Option 2</label>
            <DatePicker
              selected={rangetwo}
              showTimeSelect
              minTime={setHours(setMinutes(new Date(), 0), 9)}
              maxTime={setHours(setMinutes(new Date(), 30), 15)}
              onChange={e => datetChange(e)}
              dateFormat="MMMM d, yyyy h:mm aa"
              placeholder="e.g. Month 01, 2020"
              minDate={subMonths(new Date(), 0)}
              maxDate={addMonths(new Date(), 3)}
              showMonthYearDropdown
            />
            <label>City</label>
            <textarea
              name="details"
              type="text"
              placeholder="Please, explain here what do you need or what your need is about."
              value={details}
              onChange={e => onChange(e)}
              cols="30"
              rows="7"
            ></textarea>

            <button className="button" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

QuoteForm.propTypes = {
  addQuote: PropTypes.func.isRequired
};

export default connect(null, { addQuote })(QuoteForm);
