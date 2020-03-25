import styled from 'styled-components'

export const StyledDiv = styled.div`
  ${props => typeof props.css.toJS === 'function' ? props.css.toJS() : props.css}
`

StyledDiv.defaultProps = {
  css: {}
}

export default StyledDiv
