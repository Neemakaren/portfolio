import { useState } from 'react';
import img from '../assets/img-1.jpg'
import img3 from '../assets/img-3.webp'
import Modal from './Modal';


const Practice1 = ({showModal, toggle, projects, setshowModal, setModalData, modalData, viewModalHandler}) => {

  // const viewModalHandler = (data) => {
    // dispatch(setModalData(data));
    // dispatch(setIsModalVisible(true));
    // setModalData(data);
//     setshowModal(true);
// }

 
  return (
    <section className='select-none'>
      <h2 className='text-center uppercase font-extrabold text-2xl'><mark className='bg-blue-400 px-2'>My Projects</mark></h2>
    <section className="bg-[#F5F5F5]">
    <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
      {/* <Modal showModal={showModal} toggle={toggle} projects={projects}/> */}
      {showModal && <Modal showModal={showModal} projects={projects} setshowModal={setshowModal} />}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4 h-full">

        {
            projects.map((p, id) => (
                // <div key={id} className="col-span-2 sm:col-span-2 md:col-span-2 bg-gray-50 h-auto md:h-full flex flex-col" onClick={toggle(p)}>
                // <div key={id} className="col-span-2 sm:col-span-2 md:col-span-2 bg-gray-50 h-auto md:h-full flex flex-col" onClick={() => toggle(p)}>
                <div key={id} className="col-span-2 sm:col-span-2 md:col-span-2 bg-gray-50 h-auto md:h-full flex flex-col" onClick={() => viewModalHandler(p)}>
            <div className="group relative flex flex-col overflow-hidden rounded-md px-4 pb-4 pt-40 flex-grow">
            <img src={img} alt="" className="absolute inset-0 h-full w-full object-cover"/>
           
              <div className="absolute inset-0 hover:bg-white hover:m-8 z-10 text-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-500 ease-in-out">
              #{p.name}
              </div>
            </div>
          </div>
            ))
        }
       
               
        {/* <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50">
        <div className="group relative flex flex-col overflow-hidden rounded-md px-4 pb-4 pt-40 mb-4">
        <img src={img} alt="" className="absolute inset-0 h-full w-full object-cover"/>
          
          <div className="absolute inset-0 hover:bg-white hover:m-8 z-10 text-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-500 ease-in-out">#Job-Board</div>
          
        </div>
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
          <div className="group relative flex flex-col overflow-hidden rounded-md px-4 pb-4 pt-40">
          <img src={img} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"/>
            <div className="absolute inset-0 hover:bg-white hover:m-8 z-10 text-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-500 ease-in-out">#Blog-App</div>
            
          </div>
          <div className="group relative flex flex-col overflow-hidden rounded-md px-4 pb-4 pt-40">
          <img src={img} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"/>
            <div className="absolute inset-0 hover:bg-white hover:m-8 z-10 text-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-500 ease-in-out">#Organic-Food</div>
            
          </div>
        </div>
      </div> */}
        
      
            {/* <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 h-auto md:h-full flex flex-col" onClick={toggle}>
            <div className="group relative flex flex-col overflow-hidden rounded-md px-4 pb-4 pt-40 flex-grow">
            <img src={img} alt="" className="absolute inset-0 h-full w-full object-cover"/>
           
              <div className="absolute inset-0 hover:bg-white hover:m-8 z-10 text-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-500 ease-in-out">
              #Find-Me
              </div>
            </div>
          </div> */}
   



{/*        
        <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50">
          <div className="group relative flex flex-col overflow-hidden rounded-md px-4 pb-4 pt-40 mb-4">
          <img src={img} alt="" className="absolute inset-0 h-full w-full object-cover"/>
            
            <div className="absolute inset-0 hover:bg-white hover:m-8 z-10 text-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-500 ease-in-out">#Job-Board</div>
            
          </div>
          <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
            <div className="group relative flex flex-col overflow-hidden rounded-md px-4 pb-4 pt-40">
            <img src={img} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"/>
              <div className="absolute inset-0 hover:bg-white hover:m-8 z-10 text-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-500 ease-in-out">#Blog-App</div>
              
            </div>
            <div className="group relative flex flex-col overflow-hidden rounded-md px-4 pb-4 pt-40">
            <img src={img} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"/>
              <div className="absolute inset-0 hover:bg-white hover:m-8 z-10 text-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-500 ease-in-out">#Organic-Food</div>
              
            </div>
          </div>
        </div> */}
        {/* <div className="col-span-2 sm:col-span-1 md:col-span-1 bg-sky-50 h-auto md:h-full flex flex-col">
          <div className="group relative flex flex-col overflow-hidden rounded-md px-4 pb-4 pt-40 flex-grow">
            <img src={img} alt="" className="absolute inset-0 h-full w-full object-cover"/>
            <div className="absolute inset-0 hover:text-pink-300 hover:bg-white hover:m-8 z-10 text-2xl flex items-center justify-center group-hover:text-[20px] transition-transform duration-500 ease-in-out">#Ecommerce-App</div>
            
          </div>
        </div> */}
      </div>
    </div>
  </section>
  </section>
  );
};

export default Practice1;
