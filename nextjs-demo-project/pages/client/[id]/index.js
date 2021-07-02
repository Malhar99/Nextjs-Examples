import { useRouter } from 'next/router'

const ClientProjectsList = () => {
    const router = useRouter();
    const loadProjectHandler = () => {
        router.push({
            pathname:"/client/[id]/[clientprojectId]",
            query:{id:router.query.id,clientprojectId:1}
        })
    }
    return (
        <div>
            <h1>{router.query.id}'s Projects list</h1>
            <button onClick={loadProjectHandler}>Load Project</button>
        </div>
    )
}

export default ClientProjectsList;