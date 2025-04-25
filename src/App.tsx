import Layout from './components/Layout'
import { mantineTheme } from './theme'
import { Box, Divider, Grid, MantineProvider, Text, TextInput } from '@mantine/core';
import { useState } from 'react';
import { DatePicker } from '@mantine/dates';

function App() {

  const [value, setValue] = useState<[Date | null, Date | null]>([null, null]);

  return (
    <MantineProvider theme={mantineTheme}>
      <Layout>



        <Box sx={{ display: 'flex', columnGap: 4, mt: 4 }}>


          <TextInput
            error="blyat"
            label="Custom layout"
            placeholder="Custom layout"

          />

          <TextInput
            description="hi ol"
            label="Custom yout"
            placeholder="Custom "


          />


          <TextInput
            label="Custom yout"
            placeholder="Custom "
          />






        </Box>

        <Divider />

        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'start',

        }}>

          <DatePicker type="range" allowSingleDateInRange value={value} onChange={setValue} />

        </Box>
        <Divider />


        <Grid
          container spacing={2} rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>

          <Grid size={3}  ><Text variant="display2Xl" >Display 2Xl</Text> </Grid>
          <Grid size={3}><Text variant="display2Xl"              >Display 2Xl</Text> </Grid>
          <Grid size={3}><Text variant="display2Xl"               >Display 2Xl</Text> </Grid>
          <Grid size={3}><Text variant="display2Xl"               >Display 2Xl</Text> </Grid>

          <Grid size={3}><Text variant="displayXl"               >Display Xl</Text> </Grid>
          <Grid size={3}><Text variant="displayXl"               >Display Xl</Text> </Grid>
          <Grid size={3}><Text variant="displayXl"               >Display Xl</Text> </Grid>
          <Grid size={3}><Text variant="displayXl"               >Display Xl</Text> </Grid>

          <Grid size={3}><Text variant="displayLg"               >Display Lg</Text> </Grid>
          <Grid size={3}><Text variant="displayLg"               >Display Lg</Text> </Grid>
          <Grid size={3}><Text variant="displayLg"               >Display Lg</Text> </Grid>
          <Grid size={3}><Text variant="displayLg"               >Display Lg</Text> </Grid>

          <Grid size={3}><Text variant="displayMd"               >Display Md</Text> </Grid>
          <Grid size={3}><Text variant="displayMd"               >Display Md</Text> </Grid>
          <Grid size={3}><Text variant="displayMd"               >Display Md</Text> </Grid>
          <Grid size={3}><Text variant="displayMd"               >Display Md</Text> </Grid>

          <Grid size={3}><Text variant="displaySm"               >Display Sm</Text> </Grid>
          <Grid size={3}><Text variant="displaySm"               >Display Sm</Text> </Grid>
          <Grid size={3}><Text variant="displaySm"               >Display Sm</Text> </Grid>
          <Grid size={3}><Text variant="displaySm"               >Display Sm</Text> </Grid>

          <Grid size={3}><Text variant="displayXs"               >Display Xs</Text> </Grid>
          <Grid size={3}><Text variant="displayXs"               >Display Xs</Text> </Grid>
          <Grid size={3}><Text variant="displayXs"               >Display Xs</Text> </Grid>
          <Grid size={3}><Text variant="displayXs"               >Display Xs</Text> </Grid>


          <Grid size={3}><Text variant="textXl"               >Text Xl</Text> </Grid>
          <Grid size={3}><Text variant="textXl"               >Text Xl</Text> </Grid>
          <Grid size={3}><Text variant="textXl"               >Text Xl</Text> </Grid>
          <Grid size={3}><Text variant="textXl"               >Text Xl</Text> </Grid>

          <Grid size={3}><Text variant="textLg"               >Text Lg</Text> </Grid>
          <Grid size={3}><Text variant="textLg"               >Text Lg</Text> </Grid>
          <Grid size={3}><Text variant="textLg"               >Text Lg</Text> </Grid>
          <Grid size={3}><Text variant="textLg"               >Text Lg</Text> </Grid>

          <Grid size={3}><Text variant="textMd"               >Text Md</Text> </Grid>
          <Grid size={3}><Text variant="textMd"               >Text Md</Text> </Grid>
          <Grid size={3}><Text variant="textMd"               >Text Md</Text> </Grid>
          <Grid size={3}><Text variant="textMd"               >Text Md</Text> </Grid>

          <Grid size={3}><Text variant="textSm"               >Text Sm</Text> </Grid>
          <Grid size={3}><Text variant="textSm"               >Text Sm</Text> </Grid>
          <Grid size={3}><Text variant="textSm"               >Text Sm</Text> </Grid>
          <Grid size={3}><Text variant="textSm"               >Text Sm</Text> </Grid>

          <Grid size={3}><Text variant="textXs"               >Text Xs</Text> </Grid>
          <Grid size={3}><Text variant="textXs"               >Text Xs</Text> </Grid>
          <Grid size={3}><Text variant="textXs"               >Text Xs</Text> </Grid>
          <Grid size={3}><Text variant="textXs"               >Text Xs</Text> </Grid>

        </Grid>

      </Layout>
    </MantineProvider>
  )
}

export default App
