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
        theme={JsonTheme}
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
        theme={JsonTheme}
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

const JsonTheme = {
  base00: 'white',
  base01: '#1d2733',
  base02: '#1d2733',
  base03: '#1d2733',
  base04: '#1d2733',
  base05: '#444',
  base06: '#444',
  base07: '#444',
  base08: '#444',
  base09: 'rgba(70, 70, 230, 1)',
  base0A: 'rgba(70, 70, 230, 1)',
  base0B: 'rgba(70, 70, 230, 1)',
  base0C: 'rgba(70, 70, 230, 1)',
  base0D: 'rgba(70, 70, 230, 1)',
  base0E: 'rgba(70, 70, 230, 1)',
  base0F: 'rgba(70, 70, 230, 1)'
};

export default Response;
