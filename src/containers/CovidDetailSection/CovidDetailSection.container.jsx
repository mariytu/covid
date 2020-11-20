import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { usePathParam } from '../../modules/hooks/route'
import { onGetCovidDetailThunk } from './CovidDetailSection.actions'
import Button from '../../components/Buttons/Button'
import Skeleton from '../../components/Placeholders/Skeleton'
import Table from '../../components/Tables/Table'
import TableCell from '../../components/Tables/TableCell'
import TablePlaceholder from '../../components/Placeholders/TablePlaceholder'
import TableRow from '../../components/Tables/TableRow'
import Toast from '../../components/Basics/Toast'
import Typography from '../../components/Basics/Typography'
import { Container, Link, Strong } from './CovidDetailSection.styles'

/**
 * The covid details section container.
 */
const CovidDetailSection = () => {
  const dispatch = useDispatch()
  const slug = usePathParam('slug')
  const { country, error, loading } = useSelector(state => state.covidDetail)

  useEffect(() => {
    if (!loading && country && country.slug === slug) {
      return
    }

    dispatch(onGetCovidDetailThunk({ slug }))
  }, [slug])

  const mustLoading = loading || !(country && country.slug === slug)

  return (
    <Container>
      <Typography variant="h2" fontWeight="bold">
        {mustLoading ? <Skeleton width="400px" /> : `Covid 19 - ${country.name}`}
      </Typography>

      <Typography variant="body2" padding="0 0 16px">
        {mustLoading ? <Skeleton width="200px" /> : 'Summary per country'}
      </Typography>

      {mustLoading && <TablePlaceholder margin="0 0 24px" />}

      {!error && !mustLoading && (
        <Table
          accessibility={{ label: `Covid 19 details - ${country.name}` }}
          head={
            <TableRow>
              <TableCell head>
                <Typography variant="caption" fontWeight="bold">
                  Active
                </Typography>
              </TableCell>
              <TableCell head>
                <Typography variant="caption" fontWeight="bold">
                  Confirmed
                </Typography>
              </TableCell>
              <TableCell head>
                <Typography variant="caption" fontWeight="bold">
                  Deaths
                </Typography>
              </TableCell>
              <TableCell head>
                <Typography variant="caption" fontWeight="bold">
                  Recovered
                </Typography>
              </TableCell>
              <TableCell head>
                <Typography variant="caption" fontWeight="bold">
                  Date
                </Typography>
              </TableCell>
            </TableRow>
          }
          margin="0 0 24px"
        >
          {country.history.map((info, index) => {
            return (
              <TableRow key={index}>
                <TableCell strongBorder>{info.active}</TableCell>
                <TableCell strongBorder>{info.confirmed}</TableCell>
                <TableCell strongBorder>{info.deaths}</TableCell>
                <TableCell strongBorder>{info.recovered}</TableCell>
                <TableCell strongBorder>{info.date}</TableCell>
              </TableRow>
            )
          })}
        </Table>
      )}

      {!mustLoading && error && (
        <Toast severity="error">
          <Strong>Lo sentimos, estamos presentando problemas con nuestro servidor</Strong>
          <br />
          En estos momentos tenemos problemas para disponibilizar la información. Por favor, consulta en unos minutos
          más.
        </Toast>
      )}

      <Link to="/">
        <Button color="default" variant="outlined">
          Return
        </Button>
      </Link>
    </Container>
  )
}

export default CovidDetailSection
