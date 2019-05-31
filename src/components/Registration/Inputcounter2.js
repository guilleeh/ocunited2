import React from 'react';
import $ from 'jquery';

import './adultbutton.css';

class Inputcounter2 extends React.Component{
 constructor() {
   super();
   $(document).ready(function() {
     $('.Minus').click(function () {
       var $input = $(this).parent().find('Input');
       var count = parseInt($input.val()) - 1;
       count = count < 0 ? 0 : count;
       $input.val(count);
       $input.change();
       return false;
     });
     $('.Plus').click(function () {
       var $input = $(this).parent().find('Input');
       $input.val(parseInt($input.val()) + 1);
       $input.change();
       return false;
     });
   });
 }





 render(){
     return(
       <div className="number2">
         <div className="title">
         Children
         </div>
         <span className="minus">-</span>
         <input className="num2-input" type="text" value="1"/>
         <span className="plus">+</span>
       </div>
     );
 }
}

export default Inputcounter2;
