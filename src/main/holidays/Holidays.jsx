import React, { Component } from 'react';
import  "./Holidays.css";

class Holidays extends Component {
    constructor(){
        super();
        this.state={
            data:[],
            id:1,
            
        }
    }
    componentDidMount(){
        fetch('https://retoolapi.dev/3aP0rG/holidays')
        .then(res=>res.json())
        .then(result=>this.setState({data:result}))
     }
     
   
    render() {
        return (
            <div className="papa">   
                <div className="nums">

                    {[...Array(4)].map((item,index)=>(
                        <h2 onClick={()=>this.setState({id:index+1})} 
                        className={index+1===this.state.id ? 'active' : undefined } 
                        key={index}>0{index+1}</h2>))}
                
                </div>
                <div className="pics">
                     <div>
               {this.state.data.map(item=>(
                   item.id===this.state.id ? (
                   <div key={item.id} className='component_pics'>
                       <img src={item.img} alt="" className='component_img' />
                        <div className='dis'>
                       <p className='itemname'>{item.name}</p>
                       <p className='itemname-2'>We’ve actually already asked hundreds 
                        of women what they want, and made a database
                         with the results. All you have to do is take our 
                         short survey that only takes seconds, and our proprietary 
                         algorithm will match you with a few perfect gift options.</p>
                       <button className="btn">Vieuw Item</button>
                   </div>
              </div>     
                   ) : null
               ))}</div>                       
                         <p  class="count-of-slider">
                    <span>0{this.state.id }</span> <span className='span-2'>/ 04</span> 
                <hr /></p>         
                
                        </div>   </div>
        );
    }  
    


}

export default Holidays;