/**
 * Defining routes by using predefined paths is not always enough for complex applications. 
 * In Next.js you can add brackets to a page ([param]) to create a dynamic route
*/

import {useRouter} from "next/router";

const ClientSpecficProjectDetail = () => {
  const { query } = useRouter();
  console.log(query)
  return (
    <div>
      <h1>Client Specfic Project Detail</h1>
    </div>
  );
};

export default ClientSpecficProjectDetail;