import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { device } from './redux/reducers/device'

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
test('change power', () => {
  const before = [{
    id: 0,
    power: true
  }]
  const after = [{
    id: 0,
    power: false
  }]
  expect(device(before, {
    type: 'CHANGE_POWER',
    id:0
  })).toEqual(after);
})
test('add device',()=>{
  const before = []
  const after = [{
    id: 0,
    power: true
  }]
  expect(device(before, {
    type: 'ADD_DEVICE',
    id:0,
    power:true
  })).toEqual(after);
})