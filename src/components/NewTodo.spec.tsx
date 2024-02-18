import { render } from '@testing-library/react';

import NewTodo from './NewTodo';

describe('NewTodo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NewTodo />);
    expect(baseElement).toBeTruthy();
  });
});
