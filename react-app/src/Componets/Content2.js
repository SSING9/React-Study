import React, {Component} from 'react';

class Content2 extends Component{
   render(){
      return(
         <article>
            {this.props.data}
         </article>
      );
   }
}

export default Content2