import Link from 'next/link'

const ClientPage = () => {
    return (
        <div>
            <h1>Client Page</h1>
            <ul>
                <li>
                    <Link href={{pathname:"/client/[id]",query:{id:'Malhar'}}}>Malhar</Link>
                </li>
            </ul>
        </div>
    )
}

export default ClientPage;