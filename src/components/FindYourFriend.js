import React, {useState} from 'react'
import Graph from 'graph-data-structure'
import Alert from './Alert'
export default function FindYourFriend() {
    var graph= Graph()
    var obj2= JSON.parse(localStorage.getItem('token'))
    var g=graph.deserialize(obj2);
    
    
    
    var array= g.nodes();
    var str="";

    const [alert, setAlert] = useState(null);
    const showALert=(msg)=>{
        setAlert(msg);
        setTimeout(() => {
            setAlert(null)
          }, 6000);
    }
    const handleOnClick=()=>{
        try{
        const person1= document.getElementById("select1").value ;
        const person2= document.getElementById("select2").value ;
        var path= g.shortestPath(person1, person2);
        if(path!==null){
        console.log("Path: ", path)
        for (let index = 0; index < path.length; index++) {
            const element = path[index];
            str+=element;
            if(index!== path.length-1)
            str+="> ";
            
        }
        if(str.length!==0){
           showALert(str);
        }
        }
    }catch(err){
        console.log(err.message);
        showALert(err.message);
    };
   
        

    }
   

    return (
         
        <>
         <div className="container my-3">
            <form>
            <select className="container" id="select1">
                <option selected>Select a name from the list</option>
                {

                    array.map((num)=>(
                        <option>{num}</option>
                    ))
                }
            </select>
            </form>
            </div>
        <div className="container my-3" >
            <form>
            <select className="container" id="select2">
            <option selected>Select a name from the list</option>
                {
                    array.map((num)=>(
                        <option>{num}</option>
                    ))
                }
            </select>
            </form>
            </div>

            

            
        <div className="container my-3" align="center">
        <button type="submit" className="btn btn-outline-secondary btn-lg" onClick={handleOnClick}>Check Your FriendShip</button>
        </div>
         <p className="container" > FIND YOUR FRIENDSHIP TREE BELOW:</p>
        <div className="container">
            <Alert alert={alert} />
        </div>
        </>
    )
}
