import React from 'react';

// const Main = React.createClass({
//   render () {
//     return (
//       <div className='main-container'>
//         <ReactCSSTransitionGroup
//           transitionName="appear"
//           transitionEnterTimeout={500}
//           transitionLeaveTimeout={500}>
//             {React.cloneElement(this.props.children, {key: this.props.location.pathname})}
//         </ReactCSSTransitionGroup>
//       </div>
//     )
//   }
// });

function Main({children}) {
  return (
    <div>
      {children}
    </div>
  );
}

export default Main
