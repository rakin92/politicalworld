import { useRouter } from 'next/router'
import USAMap from "react-usa-map";

import Layout from '../../components/Layout/Layout';

export default function Home() {
  const router = useRouter()
  const mapHandler = (event: any) => {
    router.push(`/usa/${event.target.dataset.name}`);
  };

  return (
    <Layout> 
      <USAMap onClick={mapHandler} defaultFill={"#000000"} title={"United States of America"}/>
      <style global jsx>{`
        path {
          pointer-events: all;
        }
        path:hover {
            opacity: 0.5;
            cursor: pointer;
        }
      `}</style>
    </Layout>
  )
}
