import React from 'react';
import ReactDom from 'react-dom'
import './index.css'
class HelloVishal extends React.Component{
  render(){
    return (
      <div >
        <section className="my-color">
          {2+2}
        </section>
      </div>
    )
  }
}
ReactDom.render(<HelloVishal/>,document.getElementById('root'))