import {Drawer, Input, Col, Select, Form, Row, Button} from 'antd';
import { StarOutlined, StarFilled, StarTwoTone } from '@ant-design/icons';

const {Option} = Select;

function SaveGatewayForm({showDrawer, setShowDrawer}) {
    const onCLose = () => setShowDrawer(false);

    const onFinish = values => {
        alert(JSON.stringify(values, null, 2));
    };

    const onFinishFailed = errorInfo => {
        alert(JSON.stringify(errorInfo, null, 2));
    };

    return <Drawer
        title="Add new GateWay"
        width={720}
        onClose={onCLose}
        visible={showDrawer}
        bodyStyle={{paddingBottom: 80}}
        footer={
            <div
                style={{
                    textAlign: 'right',
                }}
            >
                <Button onClick={onCLose} style={{marginRight: 8}}>
                    Cancel
                </Button>
            </div>
        }
    >
        <Form layout="vertical"
              onFinishFailed={onFinishFailed}
              onFinish={onFinish}
              hideRequiredMark>
            <Row gutter={16}>
                <Col span={12}>
                    <Form.Item
                        name="serial_number"
                        label="Serial Number"
                        rules={[{required: true, message: 'Please enter Serial Number'}]}
                    >
                        <Input placeholder="Please enter Serial Number"/>
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        name="name_gateway"
                        label="Name Gateway"
                        rules={[{required: true, message: 'Please enter Name Gateway'}]}
                    >
                        <Input placeholder="Please enter Name Gateway"/>
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        name="ipv4_address"
                        label="IPv4 Address"
                        rules={[{required: true, message: 'Please enter IPv4 Address'}]}
                    >
                        <Input placeholder="Please enter IPv4 Address"/>
                    </Form.Item>
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <Form.Item >
                        <Button type="primary" htmlType="submit">
                            SAVE
                        </Button>
                    </Form.Item>
                </Col>
            </Row>
        </Form>
    </Drawer>
}

export default SaveGatewayForm;
