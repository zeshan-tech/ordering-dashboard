
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '../../../components/Button';
import { Stack } from '@mui/material';
import { SignInButton } from '@clerk/clerk-react';

export default function Header() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h5" sx={ { flexGrow: 1 } }>
                    Your company name
                </Typography>

                <Stack gap={ 1 } flexDirection={ 'row' }>
                    <SignInButton>

                <Button>Login</Button>
                    </SignInButton>
                <Button variant='contained'>Register</Button>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}
