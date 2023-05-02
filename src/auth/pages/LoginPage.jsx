import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink} from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Google } from '@mui/icons-material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { checkingAuthentication, startGoogleSignIn } from '../../store/auth/thunks';

export const LoginPage = () => {

  const { status } = useSelector(state => state.auth);

  const dispatch = useDispatch();

  const {email, password, onInputChange} =  useForm({
    email: 'mail@mail.com',
    password: '123456',
  });

  const isAuthenticating = useMemo( () => status === 'checking', [status] )

  const onSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password })

    dispatch(checkingAuthentication());

  }

  const onGoogleSignIn = () => {
    console.log('onGoogleSignIn');
    dispatch(startGoogleSignIn());
  }

  return (
    <AuthLayout title="Login">
      <form action="" onSubmit={ onSubmit }>
        <Grid container >
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField 
              label="Email" 
              type="email" 
              placeholder="mail@mail.com"
              name='email'
              value ={ email }
              onChange = { onInputChange }
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField 
              label="Password" 
              type="password" 
              placeholder="Password"
              name='password'
              value ={ password }
              onChange = { onInputChange }
              fullWidth
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button 
                disabled={ isAuthenticating }
                variant='contained' 
                type='submit' 
                fullWidth
              >
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button 
                disabled={ isAuthenticating }
                variant='contained' 
                onClick={ onGoogleSignIn }  
                fullWidth
              >
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid 
            container
            direction="row"
            justifyContent="end"
          >
            <Link 
              component={RouterLink}
              color='inherit' 
              to="/auth/register"
            >
              Crear una cuenta
            </Link>
          </Grid>

        </Grid>
      </form>
    </AuthLayout>

  )
}
