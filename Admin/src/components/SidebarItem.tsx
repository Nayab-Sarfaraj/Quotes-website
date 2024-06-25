import { Link } from 'react-router-dom';

const SidebarItem = ({ title, href, icon:Icon }) => {

  return (
    <>
      <Link to={href}>

        <div className='p-4 pb-2 flex items-center justify-between bg-slate-300'>
          <Icon />
          {title}
        </div>
      </Link>


    </>
  )
}

export default SidebarItem