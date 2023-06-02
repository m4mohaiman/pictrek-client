import './App.css';
import { Container , AppBar , Typography , Grow , Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import Logo from './assets/images/logo.png';
import usestyles from './styles';
import { useEffect } from 'react';

function App() {
  const classes = usestyles();
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getPosts);
  },[dispatch])


  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} color='inherit' position='static'>
        <Typography className={classes.heading} variant='h4' align='center'>
          PicTrek
          <img className={classes.image} src={Logo} alt='pictrek logo' height='50'></img>
        </Typography>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justifyContent='space-between' alignItems='stretch' spacing={4}>
            <Grid item xs={12} sm={7}>
              <Posts></Posts>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form></Form>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
