import React from 'react'
import PropTypes from 'prop-types'

function TextArea(props) {
    console.log('props', props)
    return (
        <div>
             <textarea
        onChange={event => props.fn(event.target.value)}
      />
        </div>
    )
}

TextArea.propTypes = {
    fn : PropTypes.func

}

export default TextArea

