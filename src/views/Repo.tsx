import { useQueryClient } from "react-query";
import { useParams } from "react-router-dom"
import { Repository } from "./Repos";

export function Repo(){
    const params = useParams();
    const currentRepository = params['*'] as string;
    
    const queryClient = useQueryClient();
    
    async function handleChangeRepositoryDescription() {
        // chamada API para atualizar a descrição do repositório
        
        const previusRepos = queryClient.getQueryData<Repository[]>('repos');
        if(previusRepos){
            const nextRepos = previusRepos.map(repo => {
                if(repo.name === currentRepository){
                    return { ...repo,description: 'Nova descrição'}
                }else{
                    return repo;
                }
            })
        }
    }
        
    
    return <h1>{currentRepository}</h1>
}