
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {

  const data={
    name: ["$0/month" , "$9/month", "$49/month"] ,
    details:[ "✔️ Single User", "✔️ Limited Access", "✔️ Unlimited public Projects", "✔️ Community Access",
      "✖ Unlimited Private Project", "✖ Dedicated Phone Support","✖ Free Subdomain", "✖ Monthly Status Report"],
      details1:[ "✔️ 5 User", "✔️ 50GB Storage", "✔️ Unlimited public Projects", "✔️ Community Access",
        "✔️ Unlimited Private Project", "✔️ Dedicated Phone Support","✔️ Free Subdomain", "✖ Monthly Status Report"],
        details2:[ "✔️ Unlimited User", "✔️ 50GB Access", "✔️ Unlimited public Projects", "✔️ Community Access",
          "✔️ Unlimited Private Project", "✔️ Dedicated Phone Support","✔️ Free Subdomain", "✔️ Monthly Status Report"]
  }
  
 

  return (
  
   <>
    <center>
      <h1>React Price card Task</h1>
      
      
      <div className="container">

        <div className="card" id='item-1'>
          <div className="card-head">
            <span className='type'>FREE</span>
            <p className='sub'>{data.name[0]}</p>
          </div>
          <div className="card-body">
            <p>{data.details[0]}</p>
            <p>{data.details[1]}</p>
            <p> {data.details[2]}</p>
            <p>{data.details[3]}</p>
            <p className='hide'> {data.details[4]}</p>
            <p className='hide'>{data.details[5]}</p> 
            <p className='hide'>{data.details[6]}</p>
            <p className='hide'>{data.details[7]}</p>
            <button  className='button'  type="button">Button</button>
                       
          </div>
          
          
        </div>
        <div className="card" id='item-2'>
          <div className="card-head">
            <span className='type'>PLUS</span>
            <p className='sub'>{data.name[1]}</p>
          </div>
          <div className="card-body">
            <p>{data.details1[0]}</p>
            <p>{data.details1[1]}</p>
            <p> {data.details1[2]}</p>
            <p>{data.details1[3]}</p>
            <p> {data.details1[4]}</p>
            <p>{data.details1[5]}</p> 
            <p>{data.details1[6]}</p>
            <p className='hide'>{data.details1[7]}</p>
            <button  className='button'  type="button">Button</button>
                       
          </div>
          
          
        </div>
        <div className="card" id='item-2'>
          <div className="card-head">
            <span className='type'>PRO</span>
            <p className='sub'>{data.name[2]}</p>
          </div>
          <div className="card-body">
            <p>{data.details2[0]}</p>
            <p>{data.details2[1]}</p>
            <p> {data.details2[2]}</p>
            <p>{data.details2[3]}</p>
            <p> {data.details2[4]}</p>
            <p>{data.details2[5]}</p> 
            <p   >{data.details2[6]} </p>
            <p>{data.details2[7]}</p>
            <button  className='button'  type="button">Button</button>
                       
          </div>
          
          
        </div>

      </div>


      </center>
 
   </>
          
  )
}

export default App
