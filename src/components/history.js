import React, { useContext, useEffect } from 'react';
import { Context } from '../context';
import '../styles/history.scss';

const History = (props) => {
  const context = useContext(Context);

  const populateHistory = () => {
    if (localStorage.hasOwnProperty('history')) {
      let history = localStorage.getItem('history');

      try {
        history = JSON.parse(history);
        this.setState({ history });
      } catch {
        this.setState({ history: [] });
      }
    }
  };

  useEffect(() => {
    populateHistory();
  });

  return (
    <section className="history">
      <h3>History</h3>
      <ul className="history-log">
        {context.log.map((req, idx) => {
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

// class History extends React.Component {
//   componentDidMount() {
//     this.populateHistory();
//   }

//   populateHistory = () => {
//     if (localStorage.hasOwnProperty('history')) {
//       let history = localStorage.getItem('history');

//       try {
//         history = JSON.parse(history);
//         this.setState({ history });
//       } catch {
//         this.setState({ history: [] });
//       }
//     }
//   };

//   render() {
//     return (
//       <section className="history">
//         <h3>History</h3>
//         <ul className="history-log">
//           {Context.log.map((req, idx) => {
//             return (
//               <li
//                 className={req[1] === 200 ? 'success' : 'error'}
//                 onClick={Context.populateFormHistory}
//                 key={idx}
//               >
//                 <span className="log-method">{req[0]}</span>
//                 <span className="log-status">{req[1]}</span>
//                 <span className="log-url">{req[2]}</span>
//               </li>
//             );
//           })}
//         </ul>
//       </section>
//     );
//   }
// }

export default History;
