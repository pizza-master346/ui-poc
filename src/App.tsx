import { Box, Button, ButtonGroup, Divider, Grid, ThemeProvider, Typography } from '@mui/material'
import Layout from './components/Layout'
import { XTextField } from './components/Textfield'
import { lightTheme } from './theme'
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import { PickersActionBar } from '@mui/x-date-pickers';
import { XDatePicker } from './components/XDatePicker';


function App() {


  return (

    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeProvider theme={lightTheme}>

        <Layout>




          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',

          }}>

            <XDatePicker />


          </Box>



          <Divider />

          <Box sx={{ display: 'flex', columnGap: 4, mt: 4 }}>

            <XTextField
              onChange={(e) => console.log(e.target.value)}
              label="Error man"
              error
              helperText="this filed is something"
            />
            <XTextField
              onChange={(e) => console.log(e.target.value)}
              label="Name"
              helperText="Please enter Name"
            />

            <XTextField
              onChange={(e) => console.log(e.target.value)}
              label="Haa"

            />
          </Box>

          <Divider />

          <Grid container spacing={2} rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>

            <Grid size={3}  ><Typography variant="display2Xl" fontWeight={"semibold"}>Display 2Xl</Typography> </Grid>
            <Grid size={3}><Typography variant="display2Xl" fontWeight={t => t.typography.fontWeightRegular}>Display 2Xl</Typography> </Grid>
            <Grid size={3}><Typography variant="display2Xl" fontWeight={t => t.typography.fontWeightSemibold}>Display 2Xl</Typography> </Grid>
            <Grid size={3}><Typography variant="display2Xl" fontWeight={t => t.typography.fontWeightBold}>Display 2Xl</Typography> </Grid>

            <Grid size={3}><Typography variant="displayXl" fontWeight={t => t.typography.fontWeightRegular}>Display Xl</Typography> </Grid>
            <Grid size={3}><Typography variant="displayXl" fontWeight={t => t.typography.fontWeightMedium}>Display Xl</Typography> </Grid>
            <Grid size={3}><Typography variant="displayXl" fontWeight={t => t.typography.fontWeightSemibold}>Display Xl</Typography> </Grid>
            <Grid size={3}><Typography variant="displayXl" fontWeight={t => t.typography.fontWeightBold}>Display Xl</Typography> </Grid>

            <Grid size={3}><Typography variant="displayLg" fontWeight={t => t.typography.fontWeightRegular}>Display Lg</Typography> </Grid>
            <Grid size={3}><Typography variant="displayLg" fontWeight={t => t.typography.fontWeightMedium}>Display Lg</Typography> </Grid>
            <Grid size={3}><Typography variant="displayLg" fontWeight={t => t.typography.fontWeightSemibold}>Display Lg</Typography> </Grid>
            <Grid size={3}><Typography variant="displayLg" fontWeight={t => t.typography.fontWeightBold}>Display Lg</Typography> </Grid>

            <Grid size={3}><Typography variant="displayMd" fontWeight={t => t.typography.fontWeightRegular}>Display Md</Typography> </Grid>
            <Grid size={3}><Typography variant="displayMd" fontWeight={t => t.typography.fontWeightMedium}>Display Md</Typography> </Grid>
            <Grid size={3}><Typography variant="displayMd" fontWeight={t => t.typography.fontWeightSemibold}>Display Md</Typography> </Grid>
            <Grid size={3}><Typography variant="displayMd" fontWeight={t => t.typography.fontWeightBold}>Display Md</Typography> </Grid>

            <Grid size={3}><Typography variant="displaySm" fontWeight={t => t.typography.fontWeightRegular}>Display Sm</Typography> </Grid>
            <Grid size={3}><Typography variant="displaySm" fontWeight={t => t.typography.fontWeightMedium}>Display Sm</Typography> </Grid>
            <Grid size={3}><Typography variant="displaySm" fontWeight={t => t.typography.fontWeightSemibold}>Display Sm</Typography> </Grid>
            <Grid size={3}><Typography variant="displaySm" fontWeight={t => t.typography.fontWeightBold}>Display Sm</Typography> </Grid>

            <Grid size={3}><Typography variant="displayXs" fontWeight={t => t.typography.fontWeightRegular}>Display Xs</Typography> </Grid>
            <Grid size={3}><Typography variant="displayXs" fontWeight={t => t.typography.fontWeightMedium}>Display Xs</Typography> </Grid>
            <Grid size={3}><Typography variant="displayXs" fontWeight={t => t.typography.fontWeightSemibold}>Display Xs</Typography> </Grid>
            <Grid size={3}><Typography variant="displayXs" fontWeight={t => t.typography.fontWeightBold}>Display Xs</Typography> </Grid>


            <Grid size={3}><Typography variant="textXl" fontWeight={t => t.typography.fontWeightRegular}>Text Xl</Typography> </Grid>
            <Grid size={3}><Typography variant="textXl" fontWeight={t => t.typography.fontWeightMedium}>Text Xl</Typography> </Grid>
            <Grid size={3}><Typography variant="textXl" fontWeight={t => t.typography.fontWeightSemibold}>Text Xl</Typography> </Grid>
            <Grid size={3}><Typography variant="textXl" fontWeight={t => t.typography.fontWeightBold}>Text Xl</Typography> </Grid>

            <Grid size={3}><Typography variant="textLg" fontWeight={t => t.typography.fontWeightRegular}>Text Lg</Typography> </Grid>
            <Grid size={3}><Typography variant="textLg" fontWeight={t => t.typography.fontWeightMedium}>Text Lg</Typography> </Grid>
            <Grid size={3}><Typography variant="textLg" fontWeight={t => t.typography.fontWeightSemibold}>Text Lg</Typography> </Grid>
            <Grid size={3}><Typography variant="textLg" fontWeight={t => t.typography.fontWeightBold}>Text Lg</Typography> </Grid>

            <Grid size={3}><Typography variant="textMd" fontWeight={t => t.typography.fontWeightRegular}>Text Md</Typography> </Grid>
            <Grid size={3}><Typography variant="textMd" fontWeight={t => t.typography.fontWeightMedium}>Text Md</Typography> </Grid>
            <Grid size={3}><Typography variant="textMd" fontWeight={t => t.typography.fontWeightSemibold}>Text Md</Typography> </Grid>
            <Grid size={3}><Typography variant="textMd" fontWeight={t => t.typography.fontWeightBold}>Text Md</Typography> </Grid>

            <Grid size={3}><Typography variant="textSm" fontWeight={t => t.typography.fontWeightRegular}>Text Sm</Typography> </Grid>
            <Grid size={3}><Typography variant="textSm" fontWeight={t => t.typography.fontWeightMedium}>Text Sm</Typography> </Grid>
            <Grid size={3}><Typography variant="textSm" fontWeight={t => t.typography.fontWeightSemibold}>Text Sm</Typography> </Grid>
            <Grid size={3}><Typography variant="textSm" fontWeight={t => t.typography.fontWeightBold}>Text Sm</Typography> </Grid>

            <Grid size={3}><Typography variant="textXs" fontWeight={t => t.typography.fontWeightRegular}>Text Xs</Typography> </Grid>
            <Grid size={3}><Typography variant="textXs" fontWeight={t => t.typography.fontWeightMedium}>Text Xs</Typography> </Grid>
            <Grid size={3}><Typography variant="textXs" fontWeight={t => t.typography.fontWeightSemibold}>Text Xs</Typography> </Grid>
            <Grid size={3}><Typography variant="textXs" fontWeight={t => t.typography.fontWeightBold}>Text Xs</Typography> </Grid>

          </Grid>


        </Layout>
      </ThemeProvider>
    </LocalizationProvider>
  )
}

export default App
