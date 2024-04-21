"use client";
import { useEffect, useState } from "react";
import { Layout, Card, Menu } from "antd";
import {readme} from '@/markdown/README.js';
import {basics} from '@/markdown/data_basic.js';
import {operations} from '@/markdown/data_operations.js';
import {services} from '@/markdown/data_services.js';
import { marked } from "marked";
marked.use({
  pedantic: false,
  gfm: true,
  breaks: false
});
const returnParsed = (key) =>
{

  if(key === 'home') return marked.parse(readme);
  if(key === 'basics')   return marked.parse(basics)
  if(key === 'operations') return marked.parse(operations);
  if(key === 'services') return marked.parse(services);

}


export default function Home() {

  const [key, setKey] = useState('home');
  
  useEffect(() => {
    const page = document.getElementById("conttab");
    if(page){
     page.innerHTML = returnParsed(key);}
  }, [key])


  return (
    <Layout >
      <Menu activeKey={key} mode='horizontal'
        selectedKeys={key} onClick={(info) => setKey(info.key)} items={[
          {
            label: 'Home',
            key: 'home',
          },
          {
            label: 'Basics',
            key: 'basics',
          },
          { label: 'Operations', key: 'operations' },
          { label: 'Services', key: 'services' },
        ]} />
      {/*  <Card style={{ height: '95vh' }} id="conttab">
        
       </Card> */}
        <div id="conttab" style={{height:"100hv"}}></div>
    </Layout>
  );
}
