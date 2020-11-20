import styled from 'styled-components'
import { Link as BaseLink } from 'react-router-dom'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  margin: 20px 0;
  width: 100%;
`

export const Link = styled(BaseLink)`
  text-decoration: none;
  user-select: none;
`

export const Strong = styled.span`
  font-weight: bold;
`
