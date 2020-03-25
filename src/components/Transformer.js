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
    let pretty = JSON.stringify(ugly, undefined, 2).replace(/"/gm, '\'').replace(/'(.*)':/gm, '$1:').replace(/'([0-9]+|\$.*)'/gm, '$1')

    pretty = pretty.replace(/: '(.*\$[a-zA-Z0-9\-]*.*)'/gm, (match, m1) => {
      return `: \`${m1}\``.replace(/\$([a-zA-Z0-9\-]*)/gm, match => `\${${match}}`)
    })

    pretty = pretty.replace(/\$([^{][a-zA-Z0-9\-]*)/gm, (match, m1) => {
      return `colors.${m1.replace('-', '_')}`
    })

    this.setState({ styles: pretty })
  }

  render = () => (
    <StyledDiv css={wrapperStyles}>
      <Textarea css={textareaStyles} changeCallback={this.handleChanges}></Textarea>
      <Button css={buttonStyles} onClick={this.transformStyles}>Transform</Button>
      <Textarea css={textareaStyles} readOnly={true} value={this.state.styles}></Textarea>
    </StyledDiv>
  )
}

export default Transformer
