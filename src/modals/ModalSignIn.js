import { Button, Form, Modal, Input, message } from 'antd'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useRef } from 'react'
import { auth } from '../firebase/firebaseConfig'

function ModalSignIn({ isVisible, onClose })
{

  const formRef = useRef()

  const handleSignIn = (values) =>
  {
    if (values.password !== values.confirm) {
      message.error('password not match!')
    } else {

      createUserWithEmailAndPassword(auth, values.email, values.password).then(userCredential =>
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

  }

  return (
    <Modal footer={null} open={isVisible} onCancel={onClose}>

      <div className='text-center'>
        <h1>Sign In</h1>
      </div>

      <Form layout='vertical' size='large' ref={formRef} onFinish={handleSignIn}>
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
        <Form.Item name='confirm' label='Confirm password' rules={[{
          required: true,
          message: 'Please type your password agian!'
        }]}>
          <Input.Password />
        </Form.Item>
      </Form>

      <Button onClick={() => formRef.current.submit()}>
        Register
      </Button>

    </Modal>
  )
}

export default ModalSignIn