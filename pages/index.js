
    import {useState} from "react"


    function  Home(){
        return <div>               
         <h1>A semana de Engenharia ta maneira</h1>
          <Contador/>
          </div>
    }
     function Contador(){
       const [contador,setContador] = useState(1);
       function adicionarContador (){
           setContador(contador +1);
       }
        return( <div>
            <h1>{contador}</h1>
            <button onClick={adicionarContador}>Adicionar</button> 
            </div>)

    
    }
export  default Home
