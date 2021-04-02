
import './App.css';
import { render } from '@testing-library/react';
import { Component } from 'react/cjs/react.development';
import Customer from './components/Customer';

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
    return (
      <div>
      {
        customers.map(c=>{
          return (
            <Customer
            key={c.id}
            id={c.id}
            image={c.image}
            name={c.name}
            birthday={c.birthday}
            gender={c.gender}
            job={c.job}
            />
          );
        })
      }
    </div>
   
  );
  }
}

export default App;
