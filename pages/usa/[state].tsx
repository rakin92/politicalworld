import { useRouter } from 'next/router'
import { GetStaticProps, GetStaticPaths } from 'next'

import Layout from '../../components/Layout/Layout';
import ProfileCard from '../../components/ProfileCard/ProfileCard';

import styles from './state.module.css';

export const State = ({ stateData } : any ) => {  
  return (
    <Layout> 
      <h1>{stateData.name}</h1>

      <h1>Governor</h1>
      <div className={styles.senators}>
        <ProfileCard />
      </div>

      <h1>Senators</h1>
      <div className={styles.senators}>
        <ProfileCard />
        <ProfileCard />
      </div>

      <h1>Representatives</h1>
      <div className={styles.senators}>
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
      </div>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const stateDataJSON = await import('../../shared/data/usa/states.json')
  console.log(typeof stateDataJSON)
  const paths = Object.keys(stateDataJSON).map((key) => ({
    params: { state: key },
  }));
  
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params } : any ) => {
  const stateDataJSON = await import('../../shared/data/usa/states.json')
  const stateData = stateDataJSON[params.state]

  return {
    props: {
      stateData,
    },
  }
}

export default State;