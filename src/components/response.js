import React from 'react';
import JsonViewer from 'react-json-view';

import '../styles/response.scss';

const Response = (props) => {
  if (!props.response) {
    return <NoResponseJson />;
  }

  return (
    <section className="response">
      <JsonViewer
        name={null}
        collapsed={true}
        style={JsonStyle}
        theme={'flat'}
        displayDataTypes={true}
        displayObjectSize={true}
        src={props.response}
      />
    </section>
  );
};

const NoResponseJson = () => {
  return (
    <section className="response">
      <JsonViewer
        name={null}
        style={JsonStyle}
        theme={'flat'}
        displayDataTypes={true}
        displayObjectSize={true}
        src={{ '': 'Enter URL and Method to begin!' }}
      />
    </section>
  );
};

const JsonStyle = {
  width: '65vw',
  height: '50vh',
  padding: '20px',
  borderRadius: '3px'
};

export default Response;
