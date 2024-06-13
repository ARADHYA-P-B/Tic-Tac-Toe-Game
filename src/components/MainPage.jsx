    import React, { useEffect, useState } from  'react'
    import {useNavigate} from 'react-router-dom'
   import  markx from '../assets/mark-x.png'
   
    
    function MainPage(props) {
    
         const navigate = useNavigate();
    const Box= {
             width :400,
             height:100,
             backgroundColor:"purple",
             margin:20,
             padding:20,
             display:"flex",
             justifyContent:"center",
             alignItems:"center",
             borderRadius:34,
            
    };
      const InnerBox ={
        width :300,
        height:30,
        backgroundColor:"Blue",
        margin:20,
        padding:20,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:10,
       
      }
      const OuterBox ={
        width :450,
        height:200,
        backgroundColor:"skyBlue",
        margin:20,
        padding:20,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:20,
        
      }
      

      const[Button, setButton]= useState();

      const handleClick= () =>{
            navigate('/TicTacTocGame');
      }
      return ( 
          <div className='title'> Tic Tac Toa  <span> Game </span> 
          <div className='OuterBox' style={OuterBox}> 
          <div  className= 'Box' style={Box}>
            <div className='InnerBox' style={InnerBox}>
              <img src = {markx} alt ="markx"/>
             </div>
             <button className='NewButton' onClick={handleClick}> Start Game </button>

          </div>
          </div>
        </div>
      )
    }
    
    export default MainPage