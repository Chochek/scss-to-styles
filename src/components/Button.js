import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledButton = styled.button`
  ${props => typeof props.css.toJS === 'function' ? props.css.toJS() : props.css}
`

const Button = props => (
  <StyledButton
    type={props.type}
    className={props.className}
    css={props.css}
    disabled={props.disabled || props.loading}
    aria-disabled={props.disabled || props.loading}
    onClick={props.onClick}
    onMouseEnter={props.onMouseEnter}
    onMouseLeave={props.onMouseLeave}
    onMouseDown={props.onMouseDown}
    onMouseOut={props.onMouseOut}
    onMouseOver={props.onMouseOver}
    onMouseUp={props.onMouseUp}
    onTouchCancel={props.onTouchCancel}
    onTouchEnd={props.onTouchEnd}
    onTouchMove={props.onTouchMove}
    onTouchStart={props.onTouchStart}
  >
    <em>{props.children}</em>
  </StyledButton>
)

Button.defaultProps = {
  type: 'button'
}

Button.propTypes = {}

export default Button
