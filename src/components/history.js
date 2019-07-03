import React from 'react';

import '../styles/history.scss';

class History extends React.Component {
  render() {
    return (
      <section className="history">
        <h3>History</h3>
        <ul className="history-log">
          {this.props.log.map((req, idx) => {
            return (
              <li
                className={req[1] === 200 ? 'success' : 'error'}
                onClick={this.props.populateForm}
                key={idx}
              >
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
