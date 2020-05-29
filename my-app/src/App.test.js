import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import {device} from './redux/reducers/device'

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
test('add device', () => {
  const before = []
  const after = [{
    id:0,
    name:'test',
    power:true
  }]
  expect(device(before,{
    type:'ADD_DEVICE',
    id:0,
    name:'test',
    power:true
  })).toEqual(after)
});

test('set device name', () => {
  const before = [{
    id:0,
    name:'test',
    power:true
  },{
    id:1,
    name:'test1',
    power:true
  }]
  const after = [{
    id:0,
    name:'test',
    power:true
  },{
    id:1,
    name:'aaa',
    power:true
  }]
  
  expect(device(before,{
    type:'SET_NAME',
    id:1,
    name:'aaa'
  })).toEqual(after)
});

test('set info',()=>{
  const before =[{
    id:0,
    name:'test',
    power:true
  }]
  const after =[{
    id:0,
    name:'test',
    power:true,
    info:[
      {"綽號":'王曉明'},
      {"custom":"hao123"}
    ]
  }]
  expect(device(before,{
    type:'SET_INFO',
    id:0,
    info:[
      {"綽號":'王曉明'},
      {"custom":"hao123"}
    ]
  })).toEqual(after)
})
test('fetch data',()=>{
  const before =[{
    id:0,
    name:'test',
    power:true
  }]
  const after =[{
    id:0,
    name:'test',
    power:true,
    data:{
      temp:30,
      load:60,
      vol:12.33
    }
  }]
  expect(device(before,{
    type:'FETCH_DATA',
    id:0,
    data:{
      temp:30,
      load:60,
      vol:12.33
    }
  })).toEqual(after)
})