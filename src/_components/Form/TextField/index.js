

import styled from '@emotion/styled'
import{Label , ErrorMessage, Wrapper} from "../../../_css/GlobalElements"
import {useFormContext} from "../../../_hooks/useFormContext"
import useValidate from '../../../_hooks/useValidate'

const Input =styled.input`
  min-width: 288px;
  box-sizing: border-box;
  outline: none;
  font-size: 1rem;
  border-color: ${({invalid})=>invalid && "hsla(355, 77%, 52%, 1)"}
`


const TextFeild = ({label = "Insert Title", required, defaultValue, type })=> {
  const {setError} = useFormContext()
  // custom validation hook
  const [invalid, onValidate] =  useValidate()

  const outOfFocus =(e)=>{
    // valididates field after ur out of focus of input
    setError(e, !invalid)
    onValidate(e)
  }
  
  return( 
    <Wrapper data-testid={label} >
      <Label>{label}*</Label>
      <Input
        data-testid="input"
        defaultValue={defaultValue[label]}
        name={label}
        onBlur={(e)=>required  && outOfFocus(e)}
        invalid={invalid}
        type={type}
        id="input"
      />
      {invalid && <ErrorMessage>This Feild is requerd</ErrorMessage>}
    </Wrapper>
  )
}

export default TextFeild;
