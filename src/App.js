
import './App.css';
import { render } from '@testing-library/react';
import { Component } from 'react/cjs/react.development';
import Customer from './components/Customer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const styles = theme =>({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit*3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
})

const  customers =[
  {
  'id' : 1,
  'image' : 'https://placeimg.com/64/64/1',
  'name': 'Bomi',
  'birthday': '810224',
  'gender' : 'female',
  'job' : 'Student'
},
{
  'id' : 2,
  'image' : 'https://placeimg.com/64/64/2',
  'name': 'Jacob',
  'birthday': '810224',
  'gender' : 'male',
  'job' : 'Student'
},
{
  'id' : 3,
  'image' : 'https://placeimg.com/64/64/3',
  'name': 'Judy',
  'birthday': '810224',
  'gender' : 'female',
  'job' : 'Student'
}
]

class App extends Component {
  render() {
    const {classes}=this.props;
    return (
      <Paper claseeName={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Image</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Birthday</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>Job</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {
        customers.map(c=>{  return ( <Customer  key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender}job={c.job} /> ); })
      }
        </TableBody>
      </Table>
         </Paper>
    );
  }
}

export default withStyles(styles)(App);
