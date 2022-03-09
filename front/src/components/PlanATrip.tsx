import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

import Banner from './Banner'

const PlanATrip = () => {
  return (
    <>
      <Banner />
      <Container
        maxWidth="xl"
        component="main"
        sx={{ paddingBottom: '2em', paddingTop: '1em' }}
      >
        <Typography variant="h3">Plan a trip with a friend</Typography>
        <Typography sx={{ marginTop: '1em' }}>
          You can use this to see a trip which you both need to bag
        </Typography>
      </Container>
    </>
  )
}

export default PlanATrip
