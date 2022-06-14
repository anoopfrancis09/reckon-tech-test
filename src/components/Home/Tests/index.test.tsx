import { render, fireEvent, screen } from '@testing-library/react'
import Home from '..';

describe('Log View', () => {
    it('Should render the home view without any issue', async () => {
        render(<Home />)

        await expect(screen.getAllByText('Log')[0]).toBeInTheDocument()
    });
});