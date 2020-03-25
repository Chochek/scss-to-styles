import React, { Component } from 'react'
import Button from './Button'
import Textarea from './Textarea'
import StyledDiv from './StyledDiv'
import { buttonStyles, textareaStyles, wrapperStyles } from '../styles/index.css'
import transform from '../helpers/transform'

const colorMap = {
  '#62caf3': 'aqua',
  '#000': 'black',
  '#000000': 'black',
  '#e54c3b': 'danger',
  '#26b894': 'green',
  '#62caf3': 'info',
  '#233040': 'navy_text',
  '#ecf0f0': 'neutral_1',
  '#f7f7f9': 'neutral_2',
  '#dee0e3': 'neutral_3',
  '#9198a0': 'neutral_4',
  '#f29c1e': 'orange',
  '#3c97d3': 'primary_1',
  '#3178b7': 'primary_2',
  '#1b252f': 'primary_3',
  '#233040': 'primary_4_5',
  '#243140': 'primary_4',
  '#2d3e50': 'primary_5',
  '#4f6a92': 'primary_6',
  '#b77fe4': 'purple',
  '#e54c3b': 'red',
  '#c8f0ff': 'sky_text',
  '#26b894': 'success',
  '#f29c1e': 'warning',
  '#fff': 'white',
  '#ffffff': 'white'
}

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
    let pretty = JSON.stringify(ugly, undefined, 2)

    // Replace double quotes with single qoutes
    pretty = pretty.replace(/"/gm, '\'')

    // Escape single quotes inside single quotes
    pretty = pretty.replace(/''''/gm, '\'\\\'\\\'\'')

    // Remove quotes from prop names
    pretty = pretty.replace(/'(.*)':/gm, '$1:')

    // Remove quotes from number or variable values
    pretty = pretty.replace(/'([0-9]+|\$.*)'/gm, '$1')

    // Massage SCSS color variable occurrences in strings
    // (prepare them for replacement in the next step)
    pretty = pretty.replace(/: '(.*\$[a-zA-Z0-9\-]*.*)'/gm, (match, m1) => {
      return `: \`${m1}\``.replace(/\$([a-zA-Z0-9\-]*)/gm, match => `\${${match}}`)
    })

    // Replace SCSS variables with color variables
    pretty = pretty.replace(/\$([^{][a-zA-Z0-9\-]*)/gm, (match, m1) => {
      return `colors.${m1.replace('-', '_')}`
    })

    // Replace hex colors with color variables
    pretty = pretty.replace(/'(#[0-9a-f]{6}|#[0-9a-f]{3})'/gmi, (match, m1) => {
      const colorVar = colorMap[m1.toLowerCase()]
      return colorVar ? `colors.${colorVar}` : m1
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
