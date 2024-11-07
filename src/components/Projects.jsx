import img from '../assets/img-1.jpg'
import img3 from '../assets/img-3.webp'
import Modal from './Modal';
import { useSelector, useDispatch } from 'react-redux';
import { setIsModalVisible, setModalData } from '../store/modalSlice';
import { AiFillCode } from 'react-icons/ai';


const Projects = ({projects}) => {
  const dispatch = useDispatch();
  const {isModalVisible} = useSelector((state) => state.modal);

  const viewModalHandler = (data) => {
    dispatch(setModalData(data));
    dispatch(setIsModalVisible(true));
}

 
  return (
    <section className='select-none'>
      <h2 className='text-center uppercase font-extrabold text-2xl mb-6 font-Cedarville'><mark className='bg-blue-400 px-2 rounded-md shadow-lg'>My Projects</mark></h2>
    <section className="bg-[#F5F5F5]">
    <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
    { isModalVisible && <Modal projects={projects} />}
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full"> */}
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4 h-full items-center text-center"> */}
        {/* {
          projects.map((p,id) => (
            <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 h-auto md:h-full flex flex-col"  key={id}  onClick = {() => viewModalHandler(p)}>
            <div className="group relative flex flex-col overflow-hidden rounded-md px-4 pb-4 pt-40 flex-grow">
            <img src={img} alt="" className="absolute inset-0 h-full w-full object-cover"/>
              <div className="absolute inset-0 hover:bg-white hover:text-green-500 hover:m-8 z-10 text-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-500 ease-in-out">
              #{p.name}
              </div>
            </div>
          </div>
          ))
        } */}
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-2 p-6 '>
        {
            projects.map((b, idx) => (
              <div key={idx}className='p-4 border bg-white shadow-xl hover:scale-105 transition-transform duration-500 ease-in-out hover:shadow-md hover:shadow-pink-500 ' >
              <img src={img} alt="" className='w-full  rounded-md'/>
            <div className='bg-white text-[#a2a3a4] p-2'>
              <p className='text-center hover:text-purple-500'>#{b.name}</p>   
                {/* <Link to='/blogpage' className='pt-6 text-black hover:text-[#55A747] cursor-pointer'>Read More...</Link>  */}
            <div className='mt-4 flex justify-between items-center'>
              <a href={b.link}>
              <AiFillCode  className='text-black text-2xl'/>
              </a>
              <button className='px-10 py-2 border rounded-md hover:bg-orange-400 text-black' onClick = {() => viewModalHandler(b)} >Read More..</button>
            </div>
            </div>
            </div>
            ))
          }
      </div>

      {/* </div> */}
    </div>
  </section>
  </section>
  );
};

export default Projects;
