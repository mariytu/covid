import React from 'react'
import styled from 'styled-components'
import { Table } from '@material-ui/core'

export const Root = styled(({ children, margin, ...props }) => <Table {...props}>{children}</Table>)`
  margin: ${props => props.margin};
`
