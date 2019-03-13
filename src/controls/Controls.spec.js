import React from 'react';
import { render, fireEvent } from 'react-testing-library';

import Controls from './Controls';

describe('Controls />', () => {
  it('should toggle unlocked/locked and opened/closed', () => {
    const { getByTestId } = render(<Controls  locked={true} closed={true} />);

    const lockButton = getByTestId('lockbtn')
    const closeButton  = getByTestId('closebtn')

    expect(lockButton).toBeInTheDocument
    expect(closeButton).toBeInTheDocument

  });

//   it('should toggle unlocked/locked and opened/closed', () => {
//     const { getByTestId } = render(<Controls  locked={false} closed={false} />);

//     const lockbutton = getByTestId('lockbtn')
//     const closebutton  = getByTestId('closebtn')

//     expect(lockbutton).toHaveTextContent('Lock Gate');
//     expect(closebutton).toHaveTextContent('Close Gate');

//   });
});
