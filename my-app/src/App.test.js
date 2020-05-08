import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import {device,userControl} from './App'

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
test('add_device',()=>{
  const beforeState=[]
  const afterState=[{
    id:0,
    deviceName:'test',
    power:true
  }]
  expect(device(beforeState,{
    type:'ADD_DEVICE',
    id:0,
    deviceName:'test',
    power:true
  })).toEqual(afterState)
})
test('delete_device',()=>{
  const beforeState=[{
    id:1,
    deviceName:'test',
    power:true
  }]
  const afterState=[]
  expect(device(beforeState,{
    type:'DELETE_DEVICE',
    id:1,
  })).toEqual(afterState)
})
test('initial_device',()=>{
  const beforeState =[{
    id:0,
    deviceName:'test0',
    power:true
  },{
    id:1,
    deviceName:'test1',
    power:true
  }]
  const afterState=[{
    id:0,
    deviceName:'test0',
    power:true
  },{
    id:1,
    deviceName:'test1',
    power:true,
    info:{
      manufacturer:'innodisk',
      productionDate:'2020/5/8',
      productionCode:'ff04852xs'
    }
  }]
  expect(device(beforeState,{
    type:'INITIAL_DEVICE',
    id:1,
    power:true,
    info:{
      manufacturer:'innodisk',
      productionDate:'2020/5/8',
      productionCode:'ff04852xs'
    }
  })).toEqual(afterState)
})
test('set_device_props',()=>{
  const beforeState=[{
    id:0,
    deviceName:'test',
    power:true,
    info:{
      manufacturer:'innodisk',
      productionDate:'2020/5/8',
      productionCode:'ff04852xs'
    }
  }]
  const afterState=[{
    id:0,
    deviceName:'test',
    power:true,
    info:{
      manufacturer:'hihichange',
      productionDate:'2020/5/7',
      productionCode:'ff04852xs123'
    }
  }]
  expect(userControl(beforeState,{
      type:'SET_DEVICE_PROPS',
      id:0,
      info:{
        manufacturer:'hihichange',
        productionDate:'2020/5/7',
        productionCode:'ff04852xs123'
      }
  })).toEqual(afterState)
})
test('change_device_power',()=>{
  const beforeState=[{
    id:0,
    deviceName:'test',
    power:false,
    info:{
      manufacturer:'innodisk',
      productionDate:'2020/5/8',
      productionCode:'ff04852xs'
    }
  }]
  const afterState=[{
    id:0,
    deviceName:'test',
    power:true,
    info:{
      manufacturer:'innodisk',
      productionDate:'2020/5/8',
      productionCode:'ff04852xs'
    }
  }]
  expect(userControl(beforeState,{
    type:'CHANGE_POWER',
    id:0,
    power:true
  })).toEqual(afterState)
})
test('command',()=>{
  const beforeState=[{
    id:0,
    deviceName:'test',
    power:true,
    info:{
      manufacturer:'innodisk',
      productionDate:'2020/5/8',
      productionCode:'ff04852xs'
    }
  }]
  const afterState=[{
    id:0,
    deviceName:'test',
    power:true,
    command:'test',
    info:{
      manufacturer:'innodisk',
      productionDate:'2020/5/8',
      productionCode:'ff04852xs'
    }
  }]
  expect(userControl(beforeState,{
    type:'COMMAND',
    id:0,
    command:'test'
  })).toEqual(afterState)
})