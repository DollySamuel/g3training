import {render, screen} from '@testing-library/react'
import Card from './Card';

describe('Card component', () => {

test('renders cardText', () => {
    render(<Card />);
    const imageElement = screen.getByAltText('profile data');
    expect(imageElement).toBeInTheDocument();
  });
  
  it('render h2 element', () => {
    render(<Card  title ="Minion" text ="I am a Banana"/>);
    const titleElement = screen.getByText(/Minion/i)
    expect(titleElement).toBeInTheDocument()
  })

  it('render paragraph text', () => {

    render(<Card title ="Minion" text ="I am a Banana"/>);
    const paragraphData = screen.getByText(/I am a Banana/i)
    expect(paragraphData).toBeInTheDocument()
  })

 
  
})