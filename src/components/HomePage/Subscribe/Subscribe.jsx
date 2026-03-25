import bg from '../../../assets/bg-shadow.png'

const Subscribe = () => {
  return (
    <div className="flex flex-col items-center justify-center  w-8/12 mx-auto  relative md:-bottom-20 rounded-xl border-2 border-white p-2 " >
      <div className='bg-white bg-cover bg-center bg-no-repeat rounded-xl md:h-[200px] p-5 items-center justify-center md:w-full ' style={{backgroundImage: `url(${bg})`}}>
      <div className="text-center md:space-y-3">
        <h2 className='text-xl font-bold'>Subscribe to our Newsletter</h2>
        <p>Get the latest updates and news right in your inbox!</p>
        <div className="flex items-center justify-center">
          <input
            className="bg-white p-2 rounded-l-xl"
            type="email"
            name="email"
            id=""
            placeholder="Enter your email"
          />
          <button className="btn border-none  rounded-l-none bg-gradient-to-r from-yellow-500 to-pink-500">
            Subscribe
          </button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Subscribe;
