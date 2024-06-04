import { Dropdown, Button } from 'keep-react'
import { NavLink } from 'react-router-dom'


const DropButton = ({nombre,dataMenu}) => {
  return (
    <Dropdown action={<Button className='px-6 py-2 bg-slate-600 hover:bg-slate-700 text-white  font-normal rounded-lg'>{nombre}</Button>} actionClassName="border-none">
      <Dropdown.List className='bg-gradient-to-b from-slate-800 to-slate-700 border-2 rounded-lg p-2'>
        {dataMenu.map((data) => (
          <Dropdown.Item key={data.id} className='hover:bg-slate-600 rounded-lg cursor-pointer'>
            <NavLink to={data.route}>
                <div className='p-2'>
                    <p className="text-white font-normal">{data.nombre}</p>
                </div>
                
            </NavLink>
            

          </Dropdown.Item>
        ))}
      </Dropdown.List>
    </Dropdown>
  )
}

export default DropButton