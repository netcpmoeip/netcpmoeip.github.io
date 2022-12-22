import { getCardsData } from '../lib/cards';
import Team from '../components/team';
import Tool from '../components/tool';
import Lecture from '../components/lecture';
import Project from '../components/project';
import Feedback from '../components/feedback';
import Misc from '../components/misc';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, {useState, Fragment} from 'react';

export async function getServerSideProps() {
  const allCardsData = await getCardsData();
  return {
    props: {
      allCardsData,
      isWide: true,
    }
  }
}


const Home = (props: { allCardsData: any, isWide: boolean }) => {
  const data = props.allCardsData
  const [activeId, setActiveId] = useState('all');
  const [loading, setLoading ] = useState(true)
  const [url, setUrl] = useState(String)
  const items = [
    { id: 1, type: "project", color: "#9900cc", text: "Проекты" },
    { id: 2, type: "tool", color: "#bb0000", text: "Инструменты" },
    { id: 3, type: "lecture", color: "#ff9900", text: "Лекции" },
    { id: 4, type: "team", color: "#008833", text: "Люди" },
    { id: 5, type: "feedback", color: "#0088bb", text: "Отзывы" }
  ];
  
  const menuHandler = (type: string) => {
    {activeId === type ? setActiveId('all') : setActiveId(type) }
  }
  return (
    <>
      <Head>
        <title>Придумаем</title>
        <meta name="description" content="Придумаем что-то там" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header><h1 onClick={() => setActiveId('all')}>Придумаем</h1></header>
      <main>
        <div className={styles.container}>
          <div className={styles.navigation}>
            {items.map((item) => (
              <a key={item.id} onClick={() => {menuHandler(item.type)}} style={activeId === item.type ? {borderBottom: '.25em solid '+ item.color}: {}} className={activeId === item.type ? "active" : ""}>
                {item.text}
              </a>
            ))}
          </div>
          <div className={styles.wrapper}>
            {data.map((item: any) => {
              if (item.type === 'team') {
                return (
                  <div key={item.id} style={activeId == item.type || activeId === 'all' ? {display: "flex"}: {display: "none"}}>
                    <Team {...item}/>
                  </div>
                );
              }
              if (item.type === 'project') {
                return (
                  <div key={item.id} style={activeId === item.type || activeId === 'all' ? {display: "flex"}: {display: "none"}}>
                    <Project {...item}/>
                  </div>
                );
              }
              if (item.type === 'feedback') {
                return (
                  <div key={item.id} style={activeId === item.type || activeId === 'all' ? {display: "flex"}: {display: "none"}}>
                    <Feedback {...item}/>
                  </div>
                );
              }
              if (item.type === 'lecture') {
                return (
                  <div key={item.id}style={activeId === item.type || activeId === 'all' ? {display: "flex"}: {display: "none"}}  onClick={() => {setUrl(item.url), setLoading(false)}}>
                    <Lecture {...item}/>
                  </div>
                );
              }
              if (item.type === 'tool') {
                return (
                  <div key={item.id} style={activeId === item.type || activeId === 'all' ? {display: "flex"}: {display: "none"}}>
                    <Tool {...item}/>
                  </div>
                );
              }
              if (item.type === 'misc') {
                return (
                  <Misc key={item.id} {...item}/>
                );
              }
            })}
          </div>
        </div>
      </main>
      <footer />
      <div id="video_overlay">{loading === false && (
        <Fragment>
          <div className={styles.overlay}>
            <div className={styles.close_button} onClick={()=> setLoading(true)}>&times;</div>
              <iframe width="560" height="315" src={url} title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
      </Fragment>
      )}</div>
    </>
  )
}
export default Home;
