import React from 'react';

import History from './history';
import Request from './request';
import Response from './response';
import RestyProvider from '../context';

const Resty = () => {
  return (
    <main>
      <RestyProvider>
        <History />
        <Request />
        <Response />
      </RestyProvider>
    </main>
  );
};

// class Resty extends React.Component {
//   render() {
//     return (
//       <main>
//         <History
//         // populateForm={this.populateFromHistory}
//         // log={this.state.history}
//         />
//         <Request
//         // {...this.state}
//         // onInputChange={this.handleFormChange}
//         // onMethodChange={this.changeMethod}
//         // onResponse={this.handleResponse}
//         />
//         <Response
//         // response={this.state.response}
//         />
//       </main>
//     );
//   }
// }

export default Resty;
