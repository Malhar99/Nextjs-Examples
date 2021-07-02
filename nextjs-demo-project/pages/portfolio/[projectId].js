import { useRouter } from 'next/router';

const PortfolioProjectPage = () => {
    const { query } =useRouter();
    return (
        <div>
            <h1>{query.projectId}</h1>
        </div>
    )
}

export default PortfolioProjectPage