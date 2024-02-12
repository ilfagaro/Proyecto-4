import React from 'react';
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import Header from './Header';
import { BrowserRouter } from 'react-router-dom';

const mockedUseNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate,
}));


describe("<Header/>",()=>{

    test("it should navigate to index", ()=>{
        const { getByText } = render(
            <BrowserRouter>
              <Header/>
            </BrowserRouter>
          );

          const button = getByText(/Logout/i);
          fireEvent.click(button);
          
          
        expect(mockedUseNavigate).toHaveBeenCalledWith("/")

    });


})