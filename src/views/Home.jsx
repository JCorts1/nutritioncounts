import logo from "../img/logo.jpg";

const Home = () => {
  return (
    <div className="w-screen h-screen flex">
      <div className="bg-[#C3E2C2] h-screen w-1/2">
        <img src={logo} alt="MainLogo" className="ml-11 mt-10 w-4/6" />
      </div>
      <div className="bg-[#C3E2C2] w-1/2 h-screen flex-col">
        <div className="h-2/4 w-full justify-end flex">
          <ul className="flex bg-[#EAECCC] hover:bg-[#CD8D7A] hover:text-[#EAECCC] text-[#CD8D7A] w-3/6 h-10 mr-28 mt-4 p-6 rounded-full items-center justify-evenly">
            <li className=" m-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:rounded-full hover:bg-[#C3E2C2] duration-200">
              <a href="#">Sign Up</a>
            </li>
            <li className=" m-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:rounded-full hover:bg-[#C3E2C2] duration-200">
              <a href="#">Log In</a>
            </li>
            <li className=" m-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:rounded-full hover:bg-[#C3E2C2] duration-200">
              <a href="#">Account</a>
            </li>
            <li className=" m-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:rounded-full hover:bg-[#C3E2C2] duration-200">
              <a href="#">About Us</a>
            </li>
          </ul>
        </div>
        <div className="h-2/4 w-full">
          <h1 className="w-4/6 my-10 ml-36 text-8xl text-[#CD8D7A]">
            Nutrition Counts!!
          </h1>
        </div>
      </div>
      {/* <div className="w-screen h-screen bg-[#C3E2C2] shadow rounded">
          <div className="ml-10">
            <img src="img/logo.png" alt="logo" />
          </div>
        </div> */}
    </div>
  );
};

export default Home;
