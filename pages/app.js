import React, {useEffect} from 'react';
import { GithubOutlined, UserOutlined, LinkedinOutlined, CrownOutlined } from '@ant-design/icons';
import { Layout, Menu, theme, Flex, Space, Form, Drawer, InputNumber, Input, Button, Radio, Typography } from 'antd';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';


const { Header, Content, Footer, Sider } = Layout;

const type = ["oltp.md","olap.md", "batch.md", "realtime.md", "streams.md"];
const services = ["apache.md","cloud.md","services.md", "visual.md"];
const formats = ["dbengines.md", "fileformats.md", "libraries.md", "workflows.md"];
const basics = ["basics.md", "operations.md", "types.md", "bitools.md"];
const pages = [ ...basics , ...type, ...services, ...formats];

const postDataToEmail = (data) => {

  fetch("https://formspree.io/f/xnqerpaj", {
    'body' : JSON.stringify(data) ,
    'method' : 'POST'
  }).then(()=> console.log("Posted Succesfully")).catch(err => console.log(err));
}

const MyForm = () => {

  return (
    <Form
    labelCol={{ span: 4 }}
    wrapperCol={{ span: 14 }}
    layout="Vertical"
    style={{ maxWidth: 800 }}
    title="Multipurpose"
    action={"https://formspree.io/f/xnqerpaj"}
    method='post'
    onFinish={(b)=> postDataToEmail(b)  }
  >
      <Form.Item label="Describe" name="describe" required>
          <Input.TextArea size='large' placeholder='write in detail your requirement or use case or feedback'></Input.TextArea>
      </Form.Item>
      <Form.Item label="Name" name={"name"} required>
          <Input placeholder='Enter Name'></Input>
      </Form.Item>
    <Form.Item label="Email" name={"email"} required>
        <Input type='email' placeholder='Enter email'></Input>
    </Form.Item>
    <Form.Item label="Data size"  name={"dataSize"}>
      <InputNumber  min={1} max={100} addonAfter={'TB'} />
    </Form.Item>
    <Form.Item label="Storage duration" name={'storageDuration'} >
      <InputNumber  min={1} max={120} addonAfter={'Months'} />
    </Form.Item>
    <Form.Item label="Data generation" name={'dataGenerationFrequency'} >
        <Radio.Group>
          <Radio.Button value="millisecond">millisecond</Radio.Button>
          <Radio.Button value="second">Second</Radio.Button>
          <Radio.Button value="minute">Minute</Radio.Button>
          <Radio.Button value="hourly">Hour</Radio.Button>
          <Radio.Button value="daily">Day</Radio.Button>
        </Radio.Group>
    </Form.Item>
    <Form.Item label="Costs Now" name="cost" >
      <InputNumber  min={0} max={10000} addonAfter={'USD/Month'} />
    </Form.Item>
    <Form.Item label="Target budget" name="targetBudget">
      <InputNumber  min={0} max={100000} addonAfter={'USD/Month'} />
    </Form.Item>
    <Form.Item label="Additional details" name="details" >
      <Input.TextArea size='large' placeholder='write in detail your inspiration, poc, tools/cloud you use or links?' ></Input.TextArea>
    </Form.Item>
    <Form.Item label="Sumbit">
      <Button type="primary" htmlType="submit"> Submit </Button>
    </Form.Item>

  </Form>  
  
  )
}


const App = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const [active, setActive] = React.useState('de/README.md');
  const [mdown, setMdown] = React.useState('https://venu-mallik.pages.dev');
  const [formopen, setFormOpen] = React.useState(false);

  useEffect(() => {
    let route = window.location.pathname;
    console.log(route);
    if(active.includes(".md")){
    fetch(active)
      .then(res => res.text()).then(res => setMdown(res));
    }
    if(active === 'lab'){

    }
  },[active])

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
          { ["concepts.md", "basics.md", "operations.md", "types.md", "bitools.md"].map(item => ( 
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
          <Menu.Item key={`lab`} title={"Lab"} 
            onClick={(e)=>    setActive(e.key)  } >
              {"Lab"}
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
      <Header
          style={{
            textAlign: 'center',
            backgroundColor: colorBgContainer,
            height: '50px'
          }}>
            <Flex  justify='space-evenly' align='center' style={{marginTop: '15px'}}>
            <Typography.Title level={4}>Data Engineering Landscape</Typography.Title>
            <Button onClick={()=> setFormOpen(true)}>Submit Feedback</Button>
            <Drawer title="Multi Purpose Form" size='large'
              onClose={()=> setFormOpen(false)} open={formopen}>
              <MyForm/>
            </Drawer>
            </Flex>

        </Header>
        <Content
          style={{
            margin: '5px 5px 0',
          }}
        >
          {active.includes(".md") && <>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Markdown remarkPlugins={[remarkGfm]} >{mdown}</Markdown>
          </div> </>}
          {active === 'lab' && 
            <iframe
            src="https://jupyterlite.github.io/demo/repl/index.html?toolbar=1&code=import numpy as np"
            width="100%"
            height="100%"
          ></iframe>
          }
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;