import React from 'react';

import '../styles/history.scss';

class History extends React.Component {
  render() {
    const historyLog = this.props.log.reverse();
    return (
      <section className="history">
        <h3>History</h3>
        <ul className="history-log">
          {historyLog.map((req, idx) => {
            return (
              <li onClick={this.props.populateForm} key={idx}>
                <span className="log-method">{req[0]}</span>
                <span className="log-status">{req[1]}</span>
                <span className="log-url">{req[2]}</span>
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}

export default History;
