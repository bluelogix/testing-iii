import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import Dashboard from  './Dashboard';


describe('<Dashboard />', () => {

      it('should display controls and display components', () => {
        const { getByText } = render(<Dashboard />);
  
        const unlocked = getByText(/unlocked/i);
        const open = getByText(/open/i);
        const lockGate = getByText(/lock gate/i);
        const closeGate = getByText(/close gate/i);

        expect(getByText(/unlocked/i)).toBeInTheDocument;
        expect(getByText(/open/i)).toBeInTheDocument;
        expect(getByText(/lock gate/i)).toBeInTheDocument;
        expect(getByText(/close gate/i)).toBeInTheDocument;
       
      });
  
});