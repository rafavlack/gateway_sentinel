import './App.css';
import {Button, Image, Table, Empty, Spin} from 'antd';
import {useEffect, useState} from "react";
import {Menu, Layout} from "antd/es";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  PlusOutlined,
  LoadingOutlined
} from '@ant-design/icons';
import {getAllGateway} from "./gateway_client";
import SaveGatewayForm from "./SaveGatewayForm";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const columns = [
  {
    title: 'ID',
    dataIndex: 'id_gateway',
    key: 'id_gateway'
  },
  {
    title: 'Serial Number',
    dataIndex: 'serial_number',
    key: 'serial_number'
  },
  {
    title: 'Name Gateway',
    dataIndex: 'name_gateway',
    key: 'name_gateway'
  },
  {
    title: 'IPv4 Address',
    dataIndex: 'ipv4_address',
    key: 'ipv4_address'
  }
];
const antIcon = <LoadingOutlined style={{fontSize: 100}} spin/>;

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [gateways, setgateways ] = useState([]);
  const [showDrawer, setShowDrawer] = useState(false);

  const fetchGateway = () =>
      getAllGateway()
          .then(res => res.json())
          .then(data => {
            console.log(data);
            setgateways(data);
            setFetching(false);
          })

  useEffect(() => {
    console.log("component is mounted");
    fetchGateway();
  }, []);


  const renderGateway = () => {
    if (fetching) {
      return <Spin indicator={antIcon}/>
    }
    if (gateways.length <= 0){
      return <Empty />
    }  return <>
      <SaveGatewayForm
          showDrawer={showDrawer}
          setShowDrawer={setShowDrawer}
      />
      <Table
          dataSource={gateways}
          columns={columns}
          bordered
          title={() =>
              <div>
                <Button
                    onClick={() => setShowDrawer(!showDrawer)}
                    type="primary" shape="round" icon={<PlusOutlined/>} size="large">
                  Add New GateWay
                </Button>,
                <Button
                    onClick={() => setShowDrawer(!showDrawer)}
                    type="primary" shape="round" icon={<PlusOutlined/>} size="large">
                  Add New Peripheral
                </Button>
              </div>

          }
          pagination={{pageSize: 50}}
          scroll={{y: 500}}
          rowKey={gateway => gateway.id}
      />
    </>

  }


  return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed}
               onCollapse={setCollapsed}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              Option 1
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Option 2
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="User">
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<FileOutlined />}>
              Files
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />

          <div id="table_container">
            {renderGateway()}
          </div>

          <Footer style={{ textAlign: 'center' }}>
            <Image
                width={200}
                src="./logo.png"
            />
            <h3><div>Logo made by <a href="https://www.designevo.com/" title="Free Online Logo Maker">DesignEvo free logo creator</a></div></h3>
          </Footer>
        </Layout>
      </Layout>
  );
}

export default App;
