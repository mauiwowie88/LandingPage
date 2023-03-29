import '../styles/App.css';
import Navbar from './Navbar';
import Bg from './Bg';
import squa from '../images/squa.png';
import g from '../images/grafana.webp';
import m from '../images/minikube.webp';
import k from '../images/kubernetes.webp';
import db from '../images/MongoDB.webp';
import p from '../images/prometheus.webp';



function About() {

  return (
    <div  className="h-screen">
      <Navbar />
      
      <div className=" pt-40 h-screen">
        <h1 className="text-center text-6xl text-white">
          About StrAPI
        </h1>
        <p className="text-6">
        StrAPI is a lightweight stress-test application for REST API routes and routes within Docker containers.
        </p>
        <div className="mt-10 columns-2">
                <div className="rounded-md p-8">
                <h1 className="p-2 text-5xl text-center bg-indigo-900">Why strapi stands out</h1>
                    <ul className="columns-2 bg-slate-900 bg-slate-800 outline outline-1 outline-slate-700 bg-opacity-50 shadow-cyan-500">
                      <li>
                        <h3>Cost Optimization</h3>
                        <p>
                          Quick cost estimates and insights to stay within budget
                          constraints.
                        </p>
                      </li>
                      <li>
                        <h3>Data Visualization</h3>
                        <p>
                          Clear and interactive visual representation of cluster metric
                          data.
                        </p>
                      </li>
                      <li>
                        <h3>User-friendly Interface</h3>
                        <p>Easy to use interface for quick access to information.</p>
                      </li>
                      <li>
                        <h3>Efficiency</h3>
                        <p>Streamlines and improves the overall deployment process.</p>
                      </li>
                    </ul>
                    <div>
                    <ul className="columns-2">
                      <li>
                        <h3>Cost Optimization</h3>
                        <p>
                          Quick cost estimates and insights to stay within budget
                          constraints.
                        </p>
                      </li>
                      <li>
                        <h3>Data Visualization</h3>
                        <p>
                          Clear and interactive visual representation of cluster metric
                          data.
                        </p>
                      </li>
                      <li>
                        <h3>User-friendly Interface</h3>
                        <p>Easy to use interface for quick access to information.</p>
                      </li>
                      <li>
                        <h3>Efficiency</h3>
                        <p>Streamlines and improves the overall deployment process.</p>
                      </li>
                    </ul>
                    </div>
                </div>
                
          </div>
        <div className="bg-slate-900 bg-slate-800 outline outline-1 outline-slate-700 bg-opacity-50 shadow-cyan-500 mt-28 w-2/5 ">
          <div className="container mx-auto sm:grid-cols-2 xl:grid-cols-3">
            <div className="w-full px-4">

              <div className="flex flex-wrap items-center justify-center">
                <a href="" className='mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]'><img src={g} /></a>
                <a href="" className='mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]'><img src={k} /></a>
                <a href="" className='mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]'><img src={db} /></a>
              </div>

              <div className="flex flex-wrap items-center justify-center">
                <a href="" className='mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]'><img src={m} /></a>
                <a href="" className='mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]'><img src={p} /></a>
                <a href="" className='mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]'></a>
              </div>

            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default About