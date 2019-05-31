import React from 'react';
import $ from 'jquery';

import './adultbutton.css';

class Inputcounter extends React.Component{
 constructor() {
   super();
   $(document).ready(function() {
     $('.minus').click(function () {
       var $input = $(this).parent().find('input');
       var count = parseInt($input.val()) - 1;
       count = count < 0 ? 0 : count;
       $input.val(count);
       $input.change();
       return false;
     });
     $('.plus').click(function () {
       var $input = $(this).parent().find('input');
       $input.val(parseInt($input.val()) + 1);
       $input.change();
       return false;
     });
   });
 }



 render(){
     return(
       <div className="number">
         <div className="title">
         Adults
         </div>
         <span className="minus">-</span>
         <input className="num1-input" type="text" value="1"/>
         <span className="plus">+</span>
       </div>
     );
 }
}

export default Inputcounter;
