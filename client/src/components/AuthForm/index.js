import React from 'react';
import { NavLink } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { useForm } from 'react-hook-form';
import { Notify } from '../../commons';

import { useStyles } from './styles';

export const AuthForm = ({
  action = null,
  title,
  linkTo,
  linkText,
  companyName = false,
}) => {
  const classes = useStyles();

  const { register, errors, handleSubmit } = useForm();

  const onSubmit = data => {
    console.log(data);
    // props.history.push('/');
  };

  return (
    <Container component="main" maxWidth="xs" className={classes.root}>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {title}
        </Typography>
        <form
          className={classes.form}
          noValidate
          onSubmit={handleSubmit(onSubmit)}
        >
          <Grid container spacing={2}>
            {companyName && (
              <Grid item xs={12}>
                <TextField
                  inputRef={register({
                    // eslint-disable-next-line
                    required: true,
                  })}
                  variant="outlined"
                  fullWidth
                  id="name"
                  name="name"
                  type="text"
                  label="Company name"
                  error={!!errors.name}
                />
                {errors.name && (
                  <Notify type="error" message="Company name is required" />
                )}
              </Grid>
            )}
            <Grid item xs={12}>
              <TextField
                inputRef={register({
                  // eslint-disable-next-line
                  pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i,
                  required: true,
                })}
                variant="outlined"
                fullWidth
                id="email"
                name="email"
                type="email"
                label="Email Address"
                error={!!errors.email}
              />
              {errors.email && (
                <Notify type="error" message="Enter valid email" />
              )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                inputRef={register({
                  required: true,
                  minLength: 5,
                })}
                variant="outlined"
                fullWidth
                name="password"
                type="password"
                id="password"
                label="Password"
                error={!!errors.password}
              />
              {errors.password && (
                <Notify type="error" message="Enter password, min length 5" />
              )}
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {title}
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link
                component={NavLink}
                href="#"
                to={`/${linkTo}`}
                className={classes.link}
              >
                {linkText}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};
