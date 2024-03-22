import { OrganizationList } from '@clerk/clerk-react'
import { Stack, Typography } from '@mui/material'

export default function SelectOrganizationScreen() {

    return (

        <Stack alignItems={ 'center' } height={ '100vh' } justifyContent={ 'center' }>
            <Typography variant='h5'>Welcome</Typography>
            <Typography >
                This part of the application requires the user to select an
                organization in order to proceed. If you are not part of an
                organization, you can accept an invitation or create your own
                organization
            </Typography>
            <OrganizationList hidePersonal={ true } />
        </Stack>
    )
}
