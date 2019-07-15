import React, { useContext } from 'react';
import JsonViewer from 'react-json-view';
import { RestyContext } from '../context';

import '../styles/response.scss';

const Response = (props) => {
  const context = useContext(RestyContext);
  console.log(context);

  if (!context.response) {
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
        src={context.response}
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
  height: '100%',
  minHeight: '300px',
  padding: '20px',
  borderRadius: '3px'
};

export default Response;
