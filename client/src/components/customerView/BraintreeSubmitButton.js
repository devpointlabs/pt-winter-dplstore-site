import React from 'react'
import {Button} from 'semantic-ui-react'

const renderSubmitButton = ({onClick, isDisabled, text}) => {
  return(
    <Button
      color="purple"
      primary
      onClick={onClick}
      disabled={isDisabled}
    >
      {text}
    </Button>
  )
}

export default renderSubmitButton;