import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink} from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import Alert from '@mui/material/Alert';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { startCreatingUserWithEmailPassword } from '../../store/auth/thunks';

const formData = {
    email: '',
    password: '',
    displayName: ''
  }
  
const formValidations = {
  email: [ (value) => value.includes('@'), 'Email must have an @.' ],
  password: [ (value) => value.length >= 8  , 'Password must be longer than 8 letters.' ],
  displayName: [ (value) => value.length >= 1  , 'The name is required.' ],
}

export const RegisterPage = () => {

  const dispatch = useDispatch();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const { status, errorMessage } = useSelector( state => state.auth );
  const isCheckingAuthentication = useMemo(() => status === 'checking', [status]);

  const {
    displayName, email, password, onInputChange, formState,
    displayNameValid, emailValid, passwordValid, isFormValid
    } =  useForm(formData, formValidations);

  const onSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    if ( !isFormValid ) return;
    console.log(formState);
    dispatch(startCreatingUserWithEmailPassword(formState));
  }

  return (
    <AuthLayout title="Register">
      <form 
        onSubmit={ onSubmit }
        className='animate__animated animate__fadeIn animate__faster'
      >
        <Grid container >
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField 
              label="Name" 
              type="text" 
              placeholder="John doe"
              name="displayName"
              value={ displayName }
              onChange= { onInputChange }
              error = { !!displayNameValid && formSubmitted }
              helperText= { displayNameValid }
              fullWidth

            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField 
              label="Email" 
              type="email" 
              placeholder="mail@mail.com"
              name="email"
              value={ email }
              onChange= { onInputChange }
              error = { !!emailValid && formSubmitted }
              helperText= { emailValid }
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField 
              label="Password" 
              type="password" 
              placeholder="Password"
              name="password"
              value={ password }
              onChange= { onInputChange }
              error = { !!passwordValid && formSubmitted }
              helperText= { passwordValid }
              fullWidth
            />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} display={ !!errorMessage ? '' : 'none'}>
              <Alert severity='error'> { errorMessage } </Alert>
            </Grid>
            <Grid item xs={12}>
              <Button 
                disabled={ isCheckingAuthentication }
                type='submit'
                variant='contained' 
                fullWidth
              >
                Sign up
              </Button>
            </Grid>
          </Grid>

          <Grid 
            container
            direction="row"
            justifyContent="end"
          >
            <Typography sx={{ mr: 1 }}>
              Do you already have an account?
            </Typography>
            <Link 
              component={RouterLink}
              color='inherit' 
              to="/auth/login"
            >
              login
            </Link>
          </Grid>

        </Grid>
      </form>
    </AuthLayout>

  )
}
