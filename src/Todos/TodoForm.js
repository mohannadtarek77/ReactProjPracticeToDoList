import React,{useState} from 'react'

const TodoForm = (props) => {

//  const [inputText, setInputText] = useState('')

console.log('props', props)
const {handleSubmit}=props;
const inputRef= useRef(null)

    return (
        <div>
            <form  
            onSubmit={(event)=> handleSubmit(event,inputRef)}
            >
             <input 
             ref={inputRef}
            //  onChange={(event)=>setInputText(event.target.value)}
             />
            </form>
        </div>
    )
}
export default TodoForm