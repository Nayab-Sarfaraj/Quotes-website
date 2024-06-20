import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import Quotes from './Quotes';

const Home = () => {


  return (<div className='h-auto'>
    <h1></h1>
    <Quotes />
    <div className='text-center pb-5'>
      <Link to={"/quotes"} >

        <Button variant={"secondary"}>More Quotes</Button>
      </Link>
    </div>
  </div>
  )
}

export default Home