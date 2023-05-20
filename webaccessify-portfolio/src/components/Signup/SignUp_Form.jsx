import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Box, TextField, Button, FormControlLabel, Checkbox } from '@mui/material'
const formControlLabelStyle = {
  "& .MuiFormControlLabel-label": {
    fontSize: "clamp(1rem,1.2vw,1.2rem)",
    // width: 300,
  }
}
const SignUp_Form = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [url, setURL] = useState("");
  const [password, setPassword] = useState("");
  const [validation, setValidation] = useState({
    name: "",
    email: "",
    companyName: "",
    url: "",
    password: "",
  });
  function handleSubmit(e) {
    e.preventDefault();
    const user = {
      name: name,
      email: email,
      companyName: companyName,
      password: password,
      website: url
    };
    
    fetch('https://manage.cyclic.app/user/api/v1/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(response => {
        if (response.status === 201) {          
          window.location.href = 'https://dashboard.webaccessify.com/';
        }
        if (response.status === 400) {          
          alert("User already exist!");
        }
      })
      .then(data => console.log(data))
      .catch(error => console.error(error));
  }

  return (
    <section className="Container" style={{
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      height: '100vh',
      backgroundImage: 'url(../images/bg.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      padding: '2rem'
    }}>
      <Box
        component={'form'}
        position={'relative'}
        display='flex'
        maxWidth={500}
        flexDirection={'column'}
        float={'left'}
        margin={3}
        padding={3}
        justifyContent={'center'}
        alignItems='center'
        textAlign='center'
        borderRadius={5}
        backgroundColor='#fff'
        boxShadow={'5px 5px 10px #ccc'}
        sx={{
          ":hover": {
            boxShadow: '10px 10px 20px #ccc'
          }
        }}
      >

        <h1 style={{
          color: '#122a5e',
          fontSize: '2.3rem',
        }}>Register for WebAccessify</h1>
        <p style={{
          margin: '0rem 0rem 1rem 17rem',
          fontSize: '1.5rem',
        }}>
          Already have an account?
          <Link to="https://dashboard.webaccessify.com/login">
            Sign in
          </Link>
        </p>
        <TextField
          margin="normal"
          required
          id="name"
          fullWidth
          variant='outlined'
          label="Full Name"
          name="name"
          autoComplete="name"
          autoFocus
          value={name} onChange={(e) => setName(e.target.value)}
          inputProps={{ style: { fontSize: '1.7rem' } }} // font size of input text
          InputLabelProps={{ style: { fontSize: '1.4rem' } }}
        />

        <TextField
          margin="normal"
          required
          fullWidth
          variant='outlined'
          id="email"
          label="Email"
          name="email"
          autoComplete="email"
          type="email"
          value={email} onChange={(e) => setEmail(e.target.value)}
          inputProps={{ style: { fontSize: '1.7rem' } }} // font size of input text
          InputLabelProps={{ style: { fontSize: '1.4rem' } }}
          {...validation.email && <p>{validation.email}</p>}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          variant='outlined'
          id="companyName"
          label="CompanyName"
          name="companyName"
          autoComplete="companyName"
          value={companyName} onChange={(e) => setCompanyName(e.target.value)}
          inputProps={{ style: { fontSize: '1.7rem' } }} // font size of input text
          InputLabelProps={{ style: { fontSize: '1.4rem' } }}
        />
        <TextField
          margin="normal"
          variant='outlined'
          required
          id="Website URL"
          label="Website URL"
          name="Website URL"
          autoComplete="Website URL"
          fullWidth
          value={url} onChange={(e) => setURL(e.target.value)}
          inputProps={{ style: { fontSize: '1.7rem' } }} // font size of input text
          InputLabelProps={{ style: { fontSize: '1.4rem' } }}
        />
        <TextField
          margin="normal"
          required
          type='password'
          variant='outlined'
          id="Password"
          label="Password"
          name="Password"
          autoComplete="Password"
          fullWidth
          value={password} onChange={(e) => setPassword(e.target.value)}
          inputProps={{ style: { fontSize: '1.7rem' } }} // font size of input text
          InputLabelProps={{ style: { fontSize: '1.4rem' } }}
          {...validation.name && <p>{validation.password}</p>}
        />
        <FormControlLabel
          control={<Checkbox value="allowExtraEmails" color="primary" />}
          label="I agree to the WebAccessify Terms of Use, Cookie Policy and Privacy Statement"
          sx={{...formControlLabelStyle}}
          style={{
            marginTop: '1rem',
          }} />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          style={{
            margin: '1.2rem',
            width: 'clamp(13rem, 13vw, 13rem)',
            height: 'clamp(4rem, 4vw, 4rem)',
            backgroundColor: '#122a5e',
            color: '#fff',
            fontSize: '1.5rem'
          }}
          onClick={handleSubmit}
          
        >
          Sign Up
        </Button>
      </Box>
    </section>

  )
}

export default SignUp_Form
