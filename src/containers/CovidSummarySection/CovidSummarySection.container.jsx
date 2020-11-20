import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { onGetCovidSummaryThunk } from './CovidSummarySection.actions'
import Avatar from '../../components/Basics/Avatar'
import Button from '../../components/Buttons/Button'
import Card from '../../components/Cards/Card'
import CardContent from '../../components/Cards/CardContent'
import CardHeader from '../../components/Cards/CardHeader'
import CardsContainer from '../../components/Cards/CardsContainer'
import Table from '../../components/Tables/Table'
import TableCell from '../../components/Tables/TableCell'
import TableRow from '../../components/Tables/TableRow'
import Toast from '../../components/Basics/Toast'
import Typography from '../../components/Basics/Typography'
import { Container, Link, Strong } from './CovidSummarySection.styles'

/**
 * The covid summary section container.
 */
const CovidSummarySection = () => {
  const dispatch = useDispatch()
  const { countries, error, loading } = useSelector(state => state.covidSummary)

  useEffect(() => {
    if (!loading) {
      return
    }

    dispatch(onGetCovidSummaryThunk())
  }, [])

  return (
    <Container>
      <Typography variant="h2" fontWeight="bold">
        Covid 19
      </Typography>
      <Typography variant="body2" padding="0 0 16px">
        Summary per country
      </Typography>

      {!error && (
        <CardsContainer loading={loading} width="300px">
          {countries.map((country, index) => {
            return (
              <Card key={index} width="300px">
                <CardHeader avatar={<Avatar>{country.code}</Avatar>} title={country.name} />
                <CardContent>
                  <Table>
                    <TableRow>
                      <TableCell head width="150px" padding="0 8px 8px 0">
                        <Typography variant="body2" fontWeight="bold">
                          Total Confirmed
                        </Typography>
                      </TableCell>
                      <TableCell padding="0 0 8px 8px">
                        <Typography variant="body2">{country.totalConfirmed}</Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell head padding="8px 8px 8px 0">
                        <Typography variant="body2" fontWeight="bold">
                          Total Deaths
                        </Typography>
                      </TableCell>
                      <TableCell padding="8px 0 8px 8px">
                        <Typography variant="body2">{country.totalDeaths}</Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell head border={false} padding="8px 8px 16px 0">
                        <Typography variant="body2" fontWeight="bold">
                          Total Recovered
                        </Typography>
                      </TableCell>
                      <TableCell border={false} padding="8px 0 16px 8px">
                        <Typography variant="body2">{country.totalRecovered}</Typography>
                      </TableCell>
                    </TableRow>
                  </Table>
                  <Link to={`/details/${country.slug}`}>
                    <Button color="primary" size="small" variant="outlined" width="100%">
                      See Details
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            )
          })}
        </CardsContainer>
      )}

      {!loading && error && (
        <Toast severity="error">
          <Strong>Lo sentimos, estamos presentando problemas con nuestro servidor</Strong>
          <br />
          En estos momentos tenemos problemas para disponibilizar la información. Por favor, consulta en unos minutos
          más.
        </Toast>
      )}
    </Container>
  )
}

export default CovidSummarySection
