import React, { useContext } from 'react';
import { RestyContext } from '../context';
import '../styles/history.scss';

const History = (props) => {
  const context = useContext(RestyContext);

  return (
    <section className="history">
      <h3>History</h3>
      <ul className="history-log">
        {context.history.map((req, idx) => {
          return (
            <li
              className={req[1] === 200 ? 'success' : 'error'}
              onClick={context.populateFormHistory}
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
};

export default History;
