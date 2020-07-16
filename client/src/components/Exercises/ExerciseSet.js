import React from 'react';

import InputNumber from '../Input/InputNumber';

import { TH } from './styled';

const ExerciseSet = ({ set: { repRange, rest }, num, handleSetChange }) => (
  <tr>
    <TH>set {num + 1}</TH>
    <TH padding>
      <InputNumber
        id='from'
        name='from'
        type='number'
        value={repRange.from}
        onChange={(e) => handleSetChange(e, num, 'repRange')}
      />{' '}
      to{' '}
      <InputNumber
        name='to'
        value={repRange.to}
        type='number'
        onChange={(e) => handleSetChange(e, num, 'repRange')}
      />
    </TH>
    <TH>
      <InputNumber
        id='min'
        name='min'
        type='number'
        min='0'
        max='59'
        value={rest.min}
        onChange={(e) => handleSetChange(e, num, 'rest')}
      />{' '}
      min{' '}
      <InputNumber
        id='sec'
        name='sec'
        type='number'
        value={rest.sec}
        min='0'
        max='59'
        onChange={(e) => handleSetChange(e, num, 'rest')}
      />{' '}
      sec
    </TH>
  </tr>
);

export default ExerciseSet;
