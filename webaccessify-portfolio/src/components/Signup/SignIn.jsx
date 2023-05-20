import * as React from 'react';
import { redirect, useNavigate } from 'react-router-dom'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

const formControlLabelStyle = {
    "& .MuiFormControlLabel-label": {
        fontSize: "clamp(1rem,1.2vw,1.2rem)",
        // width: 300,
    }
}

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

export default function SignIn() {
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // navigate("/");
        var login = {
            email: data.get('email'),
            password: data.get('password')
        }

        fetch('https://manage.cyclic.app/user/api/v1/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(login)
        })
            .then(async response => {
                if (response.ok) {
                    const {token} = await response.json();

                    // set the token in the local storage
                    localStorage.setItem('token', token);
                }
                if (response.status === 401) {
                    alert("Invalid credentials!");
                }
                if (response.status === 404) {
                    alert("User does not exist!");
                }
                if (response.status === 500) {
                    alert("Something went wrong!");
                }
            })
            .then(data => console.log(data))
            .catch(error => console.error(error));
    };

    return (
        <ThemeProvider theme={theme}>
            <div style={{
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                height: '100vh',
                backgroundImage: 'url(../images/bg.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                padding: '2rem',

            }}>
                <Container
                    style={{
                        backgroundColor: 'white',
                        padding: '3rem',
                        alignContent: 'center',
                        boxShadow: '5px 5px 10px #ccc',
                        borderRadius: '2rem',
                        margin: 'clamp(3rem,4vw,6rem)',
                        float: 'left',
                        height: 'clamp(40rem,50vw,60rem)',

                    }}
                    component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography style={{
                            color: '#122a5e',
                            fontSize: 'clamp(2rem,3vw,3.4rem)',
                            float: 'right',
                            marginBottom: '1rem',
                        }}
                            component="h1" variant="h5">
                            Welcome Back
                        </Typography>
                        <Typography style={{
                            color: 'grey',
                            float: 'right',
                        }} component="h3" variant="h5">
                            Enter your credentials to access your account!
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                            <TextField
                                inputProps={{ style: { fontSize: '1.7rem' } }} // font size of input text
                                InputLabelProps={{ style: { fontSize: '1.7rem' } }}
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                inputProps={{ style: { fontSize: '1.7rem' } }} // font size of input text
                                InputLabelProps={{ style: { fontSize: '1.7rem' } }}
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            <Grid item xs>
                                <Link
                                    style={{
                                        fontSize: '1.3rem',
                                        float: 'right',
                                        color: '#122a5e',
                                    }}
                                    href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            {/* <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                                sx={{ ...formControlLabelStyle }}
                            /> */}
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 4, mb: 2 }}
                                style={{
                                    alignSelf: 'center',
                                    justifySelf: 'center',
                                    justifyContent: 'center',
                                    textAlign: 'center',
                                    marginLeft: '13rem',
                                    width: 'clamp(13rem, 13vw, 13rem)',
                                    height: 'clamp(4rem, 4vw, 4rem)',
                                    backgroundColor: '#122a5e',
                                    color: '#fff',
                                    fontSize: '1.5rem'
                                }}
                            >
                                Sign In
                            </Button>
                            <Grid item>
                                <Link
                                    style={{
                                        fontSize: '1.3rem',
                                        float: 'right',
                                        color: '#122a5e',
                                    }}
                                    href="/sign-up" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Box>
                    </Box>
                </Container>
            </div>
        </ThemeProvider >
    );
}