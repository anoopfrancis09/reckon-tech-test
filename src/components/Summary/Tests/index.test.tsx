import React from 'react'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import SummaryPage from '..';

const summaryData = [
    {
        code: 'AFAIK',
        currentPrice: 123,
        lowestPrice: 134,
        highestPrice: 145,
        startingPrice: 123
    },
    {
        code: 'CS',
        currentPrice: 123,
        lowestPrice: 134,
        highestPrice: 145,
        startingPrice: 123
    },
    {
        code: 'AKA',
        currentPrice: 123,
        lowestPrice: 134,
        highestPrice: 145,
        startingPrice: 123
    }
]
describe('ToggleComponent', () => {
    it('Should be true', async () => {

        const mockFn = jest.fn();


        render(<SummaryPage summaryData={summaryData} />)

        await expect(screen.getAllByText('Summary')[0]).toBeInTheDocument()
    });
});