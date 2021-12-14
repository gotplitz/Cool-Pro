import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTicket } from '../../actions/ticket';
import DatePicker from 'react-datepicker';
import { subMonths, addMonths } from 'date-fns';

import 'react-datepicker/dist/react-datepicker.css';

const TicketForm = ({ addTicket }) => {
    const [formData, setFormData] = useState({
        tickettitle: '',
        purchasedate: new Date(),
        equipmentbrand: '',
        ticketdetails: '',
    });

    const {
        tickettitle,
        purchasedate,
        equipmentbrand,
        ticketdetails,
    } = formData;

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const dateoChange = (e) => {
        setFormData({ ...formData, purchasedate: e });
    };

    return (
        <section>
            <div className='grid'>
                <div className='column-12 profile-main-area'>
                    <form
                        className='box white shadow text-left'
                        onSubmit={(e) => {
                            e.preventDefault();
                            addTicket(formData);
                            setFormData({
                                tickettitle: '',
                                purchasedate: '',
                                equipmentbrand: '',
                                ticketdetails: '',
                            });
                        }}
                    >
                        <label>Ticket Subject</label>
                        <input
                            name='tickettitle'
                            type='text'
                            placeholder='e.g. Issues with new AC'
                            value={tickettitle}
                            onChange={(e) => onChange(e)}
                        />
                        <label>Purchase or Service Date (Estimated date)</label>
                        <DatePicker
                            selected={purchasedate}
                            onChange={(e) => dateoChange(e)}
                            dateFormat='MMMM d, yyyy'
                            placeholder='e.g. Month 01, 2020'
                            minDate={subMonths(new Date(), 12)}
                            maxDate={addMonths(new Date(), 0)}
                            showMonthYearDropdown
                        />
                        <label>Equipment Brand</label>
                        <input
                            name='equipmentbrand'
                            type='text'
                            placeholder='e.g. Rheem, Comformaker'
                            value={equipmentbrand}
                            onChange={(e) => onChange(e)}
                        />
                        <label>Explain your request</label>
                        <textarea
                            name='ticketdetails'
                            type='text'
                            placeholder='Please, give us details of why you need support'
                            value={ticketdetails}
                            onChange={(e) => onChange(e)}
                            cols='30'
                            rows='7'
                        ></textarea>

                        <button className='button' type='submit'>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

TicketForm.propTypes = {
    addTicket: PropTypes.func.isRequired,
};

export default connect(null, { addTicket })(TicketForm);
