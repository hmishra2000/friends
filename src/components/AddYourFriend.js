import Graph from "graph-data-structure";
import React , {useState} from "react";
import Alert from './Alert';

export default function AddYourFriend() {
    var graph= Graph();
    const [alert, setAlert] = useState(null);
    const showALert=(msg)=>{
        setAlert(msg);
        setTimeout(() => {
          setAlert(null)
        }, 3000);
    }
    const clearAll=()=>{
      localStorage.clear();
      showALert("All Connections are cleared. Please add friends to proceed");
    }
    const addFriend=()=>{
          
          const yName= document.getElementById("yourname").value ;
          const fName= document.getElementById("friendname").value ;
          graph.addEdge(yName, fName);
          graph.addEdge(fName, yName);
          var obj= graph.serialize();

          
          if(localStorage.getItem('token')==null){
          localStorage.setItem('token', JSON.stringify(obj));
          }
          else{
          var obj2= JSON.parse(localStorage.getItem('token'))
          var g=graph.deserialize(obj2);
          g.addEdge(yName, fName);
          g.addEdge(fName, yName);
          var obj3= g.serialize();
          localStorage.clear();
          localStorage.setItem('token', JSON.stringify(obj3));
          showALert(`${yName} and ${fName} are now Friends`);
          document.getElementById("yourname").value= null;
          document.getElementById("friendname").value= null ;



    }
  }

  
  return (
    <>
     <Alert alert={alert} />
    <div className="container my-3">
      
        <div className="mb-3">
          <label htmlFor="yourname" className="form-label">
            Add Your Name
          </label>
          <input type="text" className="form-control" id="yourname" />
          <div id="info" className="form-text">
            Enter Your Name here and start making your friends
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="friendname" className="form-label">
            Add Your Friend's Name
          </label>
          <input type="text" className="form-control" id="friendname" />
        </div>
  
        <button type="submit" className="btn btn-secondary" onClick={addFriend} >
          MAKE FRIEND
        </button>
        <button type="submit" className="btn btn-secondary mx-3" onClick={clearAll} >
          CLEAR ALL CONNECTIONS
        </button>
      
    </div>
    </>
  );
}
