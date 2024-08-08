import { useDispatch } from 'react-redux'
import { add_user } from './redux/userSlice'
import Add from './features/Add'
import View from './features/View'

function App() {
  // const dispatch = useDispatch()
  // let handleClick=()=>{
  //   dispatch(add_user())
  // }

  return (
   <>
    {/* <button type='button' onClick={handleClick}> click me to dispatch action</button>
    <h1 className='text-center text-orange-500 underline '>Tailwind demo</h1> */}

      <div className='flex'>
        <div className='flex-auto w-64'>
          <Add/>
        </div>
        <div className='flex-auto w-64'>
          <View/>
        </div>

      </div>

    
   </>
  )
}

export default App
