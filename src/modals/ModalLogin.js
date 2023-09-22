import { Button, Form, Modal, Input, message } from 'antd'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import React, { useRef } from 'react'
import { auth } from '../firebase/firebaseConfig'

function ModalLogin({ isVisible, onClose })
{

  const formRef = useRef()

  const handleLogin = (values) =>
  {


    signInWithEmailAndPassword(auth, values.email, values.password).then(userCredential =>
    {
      const user = userCredential.user

      if (user) {
        message.success(`Hello ${user.email}`)

        formRef.current.resetFields()
        onClose()
      }
    }).catch((error) =>
    {
      message.error('Sign in not successfully!')
      console.log(error)
    })


  }

  return (
    <Modal footer={null} open={isVisible} onCancel={onClose}>

      <div className='text-center'>
        <h1>Login</h1>
      </div>

      <Form layout='vertical' size='large' ref={formRef} onFinish={handleLogin}>
        <Form.Item name='email' label='Email' rules={[{
          required: true,
          message: 'Please type your email!'
        }]}>
          <Input type='email-address' allowClear />
        </Form.Item>
        <Form.Item name='password' label='Password' rules={[{
          required: true,
          message: 'Please type your password!'
        }]}>
          <Input.Password />
        </Form.Item>

      </Form>

      <Button onClick={() => formRef.current.submit()}>
        Login
      </Button>

    </Modal>
  )
}

export default ModalLogin