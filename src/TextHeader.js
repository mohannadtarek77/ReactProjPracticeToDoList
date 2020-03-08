import React, {useState} from 'react'

const TextHeader = (props) => {
    const {text , useText} = useState('')


    // const test =(x =1) => {
    //     console.log('x', x)
    // }
// console.log('test(6', test())

//     console.log('props', props);


    const {
    monsef = 'helloz'  , 
    str="mai",
    count=0
} = props;



    console.log('props', props);
    console.log('str', str )
    console.log('count',
     count > 5 ? 'large number' : 'small number'
     )
     console.log('tesssstt', count> 5 && 'hello')

    return (
        <div>
            {/* <h3> {monsef} </h3>
            <h3> {str} </h3> */}

            {/* {count <5 && (
                   <h1>
                   small Number
               </h1>
            )} */}

            {count == 5 ?
             <h2>' exact '</h2> :
             <>
              <h2>'not 5  '</h2>
              <p>please try again</p>
              </>
              }

                

            
        </div>
    )
}

export default TextHeader
