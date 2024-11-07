import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setIsModalVisible } from '../store/modalSlice';


const Modal = () => {
  const dispatch = useDispatch();
  const { data: product } = useSelector(state => state.modal);



  const modalOverlayHandler = (e) => {
      dispatch(setIsModalVisible(false));
  }

  
  return (
        <div className="flex-col flex items-center overflow-y-auto scroll-smooth fixed z-50 inset-0 container mx-auto my-20 border-2 rounded-sm border-t-green-500  border-b-purple-600 border-l-orange-600 w-full sm:w-[60%] bg-gray-100 dark:bg-black gap-8 p-10 text-black dark:text-white font-normal uppercase text-sm backdrop-blur-md bg-grey/40" >
          <h1 className="text-2xl font-bold" >Projects</h1>
          <div className="absolute right-16 top-10">
            <button
            data-test="cart close"
              className="px-2 py-1 bg-gray-800 text-white  font-bold uppercase rounded-full hover:bg-gray-400 focus:outline-none focus:bg-gray-700"
              // onClick={toggle}
              // onClick = {modalOverlayHandler}
              // onClick={() => setshowModal(false)}
              onClick={() => dispatch(setIsModalVisible(false))}
              // onClick={modalOverlayHandler(true)}
            >
              x
            </button>
          </div>
          <div className="flex flex-col gap-4">
          <h1 className="md:text-lg font-bold text-4xl text-red-700">{product.name}</h1>
          <div className='flex py-4 px-8'>
          <img src={product.profileUrl} alt="" className=''/>
          </div>
          <h4 className='font-bold text-[16px]'>Technologies:</h4>
          <div className='font-semibold text-[16px]'>{product.Technology.join(',  ')}</div>
          <p>{product.description}</p>

          <button className='px-10 bg-slate-400 py-2 border rounded-md hover:bg-orange-200 text-black'>View Live</button>
          
         
          
            
            
            {/* {projects.map((item) => (
              <div className="flex justify-between flex-col md:flex-row items-center" key={item.id}>
                <div className="flex gap-4">
                  <img src={item.thumbnail} alt={item.title} className="rounded-md h-24" />
                  <div className="flex flex-col">
                    <h1 className="md:text-lg font-bold">{item.name}</h1>
                    <p className="text-gray-600">{item.price}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <button
                    className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                    onClick={() => {
                      addToCart(item)
                    }}
                  >
                    +
                  </button>
                  <p>{item.quantity}</p>
                  <button
                    className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                    onClick={() => {
                      removeFromCart(item)
                    }}
                  >
                    -
                  </button>
                </div>
              </div>
            ))} */}
          </div>
          {/* {
            cartItems.length > 0 ? (
              <div className="flex flex-col justify-between items-center">
            <h1 className="text-lg font-bold">Total: ${getCartTotal().toFixed(2)}</h1>
            <button
              className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
              onClick={() => {
                clearCart()
              }}
            >
              Clear cart
            </button>
          </div>
            ) : (
              <h1 className="text-lg font-bold">Your cart is empty</h1>
            )
          } */}
        </div>
      // )
  )
}

export default Modal