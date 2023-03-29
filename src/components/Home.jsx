import '../styles/Home.css';

function Home() {
    return (
        <div id="bg" className="">
            <div className="pt-36 px-20">
              <h2 className="text-center text-5xl text-white ">
              Stress
              <span className="block w-full text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-green-400 lg:inline">
                 test your application to destress 
              </span>
              your occupation
              </h2>
            </div>
            <div className=''>
                <div id="header" className="t-0 text-center ">
                  <p className='text-2xl mt-8 px-24 mx-24'>Chronos is a comprehensive open-source monitoring tool seeking to serve all applications. Whether you have a monolithic or microservice architecture, use containers or not, employ gRPC or REST, or host locally or on cloud services, we've got you covered.</p>
                </div>
                <div id="content" className='m-28 flex flex-start justify-evenly flex-row text-center'>
                  <div className='p-8 grid'>
                    <i className="fa-solid fa-tower-cell text-white text-5xl"></i>
                    <h3 className="text-2xl font-semibold block w-full text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-green-400 lg:inline">
                      Monitors Your Application
                    </h3>
                    <p>
                      Install an NPM package and create a configuration file to peer into the inner workings of your application.
                    </p>
                  </div>
                  <div className='p-8 grid'>
                    <i className="fa-solid fa-tower-cell text-white text-5xl"></i>
                    <h3 className="text-2xl font-semibold block w-full text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-green-400 lg:inline">
                      Displays graphs
                    </h3>
                    <p>
                      This is where i would write something impressive, but steven does it better.
                    </p>
                  </div>
                  <div className='p-8 grid'>
                    <i className="fa-solid fa-tower-cell text-white text-5xl"></i>
                    <h3 className="text-2xl font-semibold block w-full text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-green-400 lg:inline">
                      Open Sourcee and Free to Use
                    </h3>
                    <p>
                      StrAPI is Open Source and free for the community. Contributions and stars are welcome. Visit our GitHub!
                    </p>
                  </div>
                </div>
            </div>

            
      </div>
    )
}

export default Home;