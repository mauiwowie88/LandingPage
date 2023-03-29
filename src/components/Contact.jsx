import '../styles/App.css';
import Navbar from './Navbar';
import Bg from './Bg';
import squa from '../images/squa.png';

function Contact() {

  return (
    <div className="">
      <Navbar />
      <div className="mt-30 justify-center">
          <img src={squa} />
        </div>
    </div>
  )
}

export default Contact