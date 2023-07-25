import React from "react";
import { render, fireEvent } from '@testing-library/react';
// import '@testing-library/jest-dom';

import BlogInput from './BlogInput'
import Post from "./Post";


describe('BlogInput', () => {
  it('should render', () => {

    const content = `
This is the text. Podemos ir despues. Pero nunca mas allá de nuestras capacidades.
Hasta la vista, baby.
`
    const post = new Post(content);

    const { getByText } = render(<BlogInput post={post}/>);
    expect(getByText('despues. ')).toBeInTheDocument();
  });
})



