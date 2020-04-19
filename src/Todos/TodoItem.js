import React from 'react'

const TodoItem = (props) => {

    const{todosList , changeStatus,removeItem}=props;

    return (
        <div>
             <ul>
                {todosList.map((todosArrayValue,index)=>{

           return (
               <li 
               key ={index}
               style ={{color :todosArrayValue.isCompleted ? 'blue': 'red',
               textDecoration : todosArrayValue.isCompleted? 'none' :'line-through'
               }}>{todosArrayValue.text}
               
               {todosArrayValue.isCompleted ? '':'done'}
               <button onClick={()=>changeStatus(index)}>Toggle</button> 
               <button onClick={()=>removeItem(index)}>Remove</button> 

                </li>
           )
                      })}
             </ul>
        </div>
    )
}
//props types gets the error 

export default TodoItem
