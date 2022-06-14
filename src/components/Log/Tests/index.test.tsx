import { render, fireEvent, screen } from '@testing-library/react'
import LogPage from ".."

const logData = [
    {
        time: '2022-08-09 04:05:00',
        logs: ['AFAIK: $120,01', 'AKA: $102.11', 'CA: $138.90']

    },
    {
        time: '2022-08-09 04:05:00',
        logs: ['AFAIK: $120,01', 'AKA: $102.11', 'CA: $138.90']

    },
    {
        time: '2022-08-09 04:05:00',
        logs: ['AFAIK: $120,01', 'AKA: $102.11', 'CA: $138.90']
    }
]
describe('Log View', () => {
    it('Should render the Log view without any issue', async () => {

        const mockFn = jest.fn();

        render(<LogPage logsData={logData} isPaused={false} hanldePauseLogs={mockFn} />)

        await expect(screen.getAllByText('Log')[0]).toBeInTheDocument()
    });

    it('Should call the handler function when clicked on the pause button', async () => {

        const mockFn = jest.fn();

        render(<LogPage logsData={logData} isPaused={false} hanldePauseLogs={mockFn} />)

        const button = screen.getByText('Pause Log')

        await expect(button).toBeInTheDocument()

        fireEvent.click(button)

        await expect(mockFn).toBeCalled()
    });

    it('Should render the log view with resume button when paused', async () => {

        const mockFn = jest.fn();

        render(<LogPage logsData={logData} isPaused={true} hanldePauseLogs={mockFn} />)

        const button = screen.getByText('Resume Log')

        await expect(button).toBeInTheDocument()
    });
});