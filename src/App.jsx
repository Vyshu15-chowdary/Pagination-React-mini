import react ,{useState,useEffect}from 'react';
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const[data,setData] =useState([]);
  const [perpage,setPerpage] = useState([]);

  //useeffect to call api 
  //copied url from jsonpaceholder website

  useEffect(()=>{

    axios.get('https://jsonplaceholder.typicode.com/posts').then(

      res => {setData(res.data);setPerpage(res.data.slice(0,10));
      }
    )
  },[])
 return(
  <div className='App'>
    {data.length>=1 ?
    <div>

      {perpage.map(post => <div className="post">{post.title}</div>)}
      </div>
      :
      <p>Data Not Loaded</p>
    }

    </div>
      
  
 )
  
}

export default App
