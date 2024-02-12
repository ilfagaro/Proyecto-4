import React from 'react';
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import Footer from './Footer'



describe("<Footer/>",()=>{

    test("it should expects it to contain 4 images", ()=>{
        const { container } = render(<Footer/>);
        
        const imgElement = container.querySelector('img');
      
        expect(imgElement.src).toBe('http://localhost/src/images/gryffindor.png');
       

    });

})

describe("<Footer/>",()=>{

    test("it should expects it to contain", ()=>{
        const { container } = render(<Footer/>);
        
        const imgElement = container.querySelector('#ravenclaw');
      
        expect(imgElement.src).toBe('http://localhost/src/images/ravenclaw.png');
       

    });
})