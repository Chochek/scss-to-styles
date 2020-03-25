import React, { Component } from 'react'
import Button from './Button'
import Textarea from './Textarea'
import StyledDiv from './StyledDiv'
import { buttonStyles, textareaStyles, wrapperStyles } from '../styles/index.css'
import transform from '../helpers/transform'

export class Transformer extends Component {
  constructor(props) {
    super(props)
  }

  state = {
    scss: '',
    styles: ''
  }

  handleChanges = event => {
    this.setState({ scss: event.target.value })
  }

  transformStyles = () => {
    const ugly = transform(this.state.scss)
    const pretty = JSON.stringify(ugly, undefined, 2).replace(/"/gm, '\'').replace(/'(.*)':/gm, '$1:').replace(/'([0-9]+|\$.*)'/gm, '$1')
    this.setState({ styles: pretty })
  }

  render = () => (
    <StyledDiv css={wrapperStyles}>
      <Textarea css={textareaStyles} changeCallback={this.handleChanges}></Textarea>
      <Button css={buttonStyles} onClick={this.transformStyles}>Convert</Button>
      <Textarea css={textareaStyles} readOnly={true} value={this.state.styles}></Textarea>
    </StyledDiv>
  )
}

export default Transformer
