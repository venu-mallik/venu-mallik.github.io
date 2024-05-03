import React, {useEffect} from 'react';
import { GithubOutlined, UserOutlined, LinkedinOutlined, CrownOutlined } from '@ant-design/icons';
import { Layout, Menu, theme, Flex, Space } from 'antd';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';


const { Header, Content, Footer, Sider } = Layout;

const App = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const [active, setActive] = React.useState('de/README.md');
  const [mdown, setMdown] = React.useState('https://venu-mallik.pages.dev');

  useEffect(() => {
    fetch(active)
      .then(res => res.text()).then(res => setMdown(res));
  },[active])

  const de_names = ['apache.md', 'batch.md', 'cloud.md', 'data_basic.md', 'data_operations.md', 'data_services.md', 'olap.md', 'oltp.md', 'README.md', 'realtime.md', 'routes.md', 'streams.md', 'types.md', 'visual.md']
  const Headings = ["Basics", "Processing Types", "Services"]; 


  return (
    <Layout style={{height: '100vh'}}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div style={{ textAlign: 'center', alignContent: 'center', margin: '10px', color:'white' }}>
            <Space direction="vertical">
            <h2>Venu Mallik</h2>
            <email>venu.mallik@gmail.com</email> 
            <Flex justify="space-evenly" align="center">
            <a href='https://venu-mallik.pages.dev' target="_blank"><UserOutlined ></UserOutlined>  </a>
            <a href='https://github.com/venu-mallik' target="_blank"><GithubOutlined ></GithubOutlined>  </a> 
            <a href='https://linkedin.com/in/venumallik' target="_blank"><LinkedinOutlined ></LinkedinOutlined>  </a>
            </Flex>
            <h4><u>Other websites</u> </h4>
              <a href='https://climate.pages.dev' target="_blank">vega lite demo</a>              
              <a href='https://minipix.in' target='_blank'> <CrownOutlined/>  OTT Nextjs</a>
              <a href='https://minipix-api.ibee.ai/docs' targe='_blank'><CrownOutlined/> OTT Fastapi</a>
          </Space>
        </div>
      
        <Menu theme="dark" mode="inline" 
          defaultSelectedKeys={['de/README.md']} 
        >
          {['README.md'].map(item => ( 
            <Menu.Item key={`de/${item}`} title={"Venu Mallik"} 
            onClick={(e)=>    setActive(e.key)           } >
              {item.split(".")[0]}
            </Menu.Item>
          ))}
          <Menu.SubMenu title="Basics">
          { ["basics.md","types.md", "operations.md"].map(item => ( 
            <Menu.Item key={`de/${item}`} title={item.split(".")[0]} 
            onClick={(e)=>    setActive(e.key)           } >
              {item.split(".")[0]}
            </Menu.Item>
          ))}</Menu.SubMenu>
          <Menu.SubMenu title="Formats and Tools">
          { ["dbengines.md", "fileformats.md", "libraries.md", "workflows.md"].map(item => ( 
            <Menu.Item key={`de/${item}`} title={item.split(".")[0]} 
            onClick={(e)=>    setActive(e.key)           } >
              {item.split(".")[0]}
            </Menu.Item>
          ))}</Menu.SubMenu>
          <Menu.SubMenu title="By Processing Type">
          { ["oltp.md","olap.md", "batch.md", "realtime.md", "streams.md"].map(item => ( 
            <Menu.Item key={`de/${item}`} title={item.split(".")[0]} 
            onClick={(e)=>    setActive(e.key)           } >
              {item.split(".")[0]}
            </Menu.Item>
          ))}</Menu.SubMenu>
          <Menu.SubMenu title="Services">
          { ["apache.md","cloud.md","services.md", "visual.md"].map(item => ( 
            <Menu.Item key={`de/${item}`} title={item.split(".")[0]} 
            onClick={(e)=>    setActive(e.key)  } >
              {item.split(".")[0]}
            </Menu.Item>
          ))}</Menu.SubMenu>



        </Menu>
      </Sider>
      <Layout>
      <Header
          style={{
            textAlign: 'center',
            backgroundColor: colorBgContainer,
            height: '50px'
          }}>
            <h2>Data Engineering Blog</h2>
        </Header>
        <Content
          style={{
            margin: '5px 5px 0',
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Markdown remarkPlugins={[remarkGfm]} >{mdown}</Markdown>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;