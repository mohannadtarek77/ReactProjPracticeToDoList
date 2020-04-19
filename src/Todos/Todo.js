import React ,{useState}from 'react'
import TodoForm from "./TodoForm"
import TodoItem from "./TodoItem"

const Todo = () => {

// const [todos,setTodos]=useState(['todo1' ,'todo1','todo3']) 3shan maynf3sh a2ool eno completed bee array of strings 3shan a2dar a3ml delete le 7aga mn list  fa ha3ml array of objects be state le kol object false aw true bt3rafny hwa completed wala la2 
const  [todos,setTodos]=useState
([{text :'todo1', isCompleted : false} 
,{ text :'todo1',isCompleted : true},
{text:'todo3',isCompleted : false}]) 


  const handleSubmit=(evlsent,inputRef) =>{
    // paramters are scope variables
    event.preventDefault()
    console.log('inputText',inputRef.current.value)
    // setTodos([...todos,inputText])
 }

const removeItem=(index) => {
  // event.preventDefault()
  // const newTodos=todos // pass by refrence (bad)
 console.log('index',index)
 const newTodos=[...todos] // pass by value (good)
newTodos.splice(index,1)
setTodos(newTodos)
}


const changeStatus=(index)=>{
const newTodos=[...todos]
todos[index].isCompleted=!todos[index].isCompleted
setTodos(newTodos)
}

    return (
        <div>

          <TodoItem  todosList={todos} changeStatus={changeStatus} removeItem={removeItem}/>
          <TodoForm handleSubmit={handleSubmit}/> 

          {/* // <TodoItem inputText{inputText}/>  */}
          {/* //{ hena el inputText scopic variable msh bayn 3'er fel scope bta3 handleSubmit fn  fa el 7al eny a3ml state feeha array sabt fo2 (Todos array fady aw malyan msh far2a  we ha3ml append setTodos([...todos,inputText] lel inputText gamb el array bta3y )} */}

        </div>
    )
}

export default Todo