import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import Dashboard from  './Dashboard';


describe('<Dashboard />', () => {

      it('should display controls and display components', () => {
        const { getByText } = render(<Dashboard />);
  

        expect(getByText(/unlocked/i)).toBeInTheDocument;
        expect(getByText(/open/i)).toBeInTheDocument;
        expect(getByText(/lock gate/i)).toBeInTheDocument;
        expect(getByText(/close gate/i)).toBeInTheDocument;
       
      });
  
});