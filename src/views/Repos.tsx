import axios from "axios";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";


export type Repository ={
  name: string;
  description: string;
}

export function Repos() {

  const {data,isFetching} = useQuery<Repository[]>('repos',async ()=>{
    const reponse = await axios.get('https://api.github.com/users/italo-rodrigues1/repos');
    return reponse.data;
  },{
    staleTime: 1000 * 60,
  });

  return (
    <div className="App">
      <h1>Repositories</h1>
      {isFetching && <p>Carregando...</p> }
      <ul>
        {data?.map(todo => {
          return(
            <li key={todo.name}>
              <Link to={`/repo/${todo.name}`}>{todo.name}</Link>
              <p>{todo.description}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}


