import React from 'react'
import './ContactForm.css'
import { Button, Form, Input } from 'antd';
import { UserOutlined, MailOutlined, MessageOutlined } from '@ant-design/icons';

const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
const ContactFrom = () => {
  return (
    <>
      <div className="Container">
        <h2 style={{  width: 'clamp(26rem,30vw,42rem',
                textAlign:'center',
                fontSize:'clamp(3rem,4vw,4rem)'}}>Send Message</h2>
        <Form 
        style={{
          margin:'2rem',
        }}
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
        
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >

          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input
              style={{
                width: 'clamp(20rem,25vw,30rem',
                fontSize: 'clamp(1.5rem,2vw,2rem)',
                border: 'none',
                borderBottom: '2px solid #122a5e',
                outline: 'none',
                resize: 'none',
                borderRadius: '0',
              }}
              // size="large"
              prefix={<UserOutlined />}
              allowClear
              placeholder="User Name" />
          </Form.Item>

          <Form.Item
            name="Email"
            rules={[
              {
                required: true,
                message: 'Please input your email!',
              },
            ]}
          >
            <Input
              style={{
                // width: '100%',
                width: 'clamp(20rem,25vw,30rem',
                fontSize: 'clamp(1.5rem,2vw,2rem)',
                border: 'none',
                borderBottom: '2px solid #122a5e',
                outline: 'none',
                resize: 'none',
                borderRadius: '0',
              }}
              // size="large"
              prefix={<MailOutlined />}
              placeholder='Email' />
          </Form.Item>

          <Form.Item
            name="TextBox"
            rules={[
              {
                required: true,
                message: 'Please type your message!',
              },
            ]}
          >
            <Input.TextArea
              style={{
                width: 'clamp(20rem,30vw,40rem',
                fontSize: 'clamp(1.5rem,1.75vw,2rem)',
                border: 'none',
                borderBottom: '2px solid #122a5e',
                outline: 'none',
                resize: 'none',
                borderRadius: '0',
              }}
              // size="large"
              bordered='false'
              placeholder='Type your message' />
          </Form.Item>

          <Form.Item
          >
            <Button
              style={{
                justifyContent:'center',
                alignItems:'center',
                height:'clamp(4rem, 5vw, 5rem)',
                width:'clamp(9rem, 10vw, 15rem)',
                backgroundColor: '#122a5e',
                color: '#fff',
                border: 'none',
                cursor: 'pointer',
                borderRadius: '1rem',
                fontSize: 'clamp(1.5rem,2vw,2.5rem)',
              }}
              size="large"
              block
              htmlType="submit">
              Send
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>

  )
}

export default ContactFrom
