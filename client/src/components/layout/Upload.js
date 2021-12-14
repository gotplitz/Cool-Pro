import React, { Fragment, useState } from 'react';
import { Button } from 'react-bootstrap';

const Upload = () => {
  const [file, setFile] = useState('');
  const [filename, setFilename] = useState('Choose Photo');

  const onChange = e => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const onSubmit = e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
  };

  return (
    <Fragment>
      <form>
        <div className="grid">
          <div className="column-8">
            <input
              type="file"
              name="avatar"
              id="photoFile"
              onChange={onChange}
            />
          </div>

          <div
            className="column-4"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              height: 76,
              alignContent: 'center',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Button variant="primary" size="sm" onClick={onSubmit}>
              Upload
            </Button>
          </div>
          <div className="column-12">
            <label value="avatar" htmlFor="photoFile">
              {filename}
            </label>
          </div>
        </div>
      </form>
    </Fragment>
  );
};

export default Upload;
