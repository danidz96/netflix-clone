import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Form from '@components/home/form'
import HomepageBackground from '@components/home/homepageBackground'
import { useUser } from '@hooks/useUser'
import { createProfile } from '@helpers/profile'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState({
    type: '',
    content: '',
  })

  const router = useRouter()
  const { signUp, user } = useUser()

  const handleSignup = async (e) => {
    e.preventDefault()

    setLoading(true)
    setMessage({})
    const { error, user: createdUser } = await signUp({ email, password })
    if (error) {
      setMessage({ type: 'error', content: error.message })
    } else {
      if (createdUser) {
        await createProfile(createdUser, name)
        setMessage({
          type: 'note',
          content: 'Check your email for the confirmation link.',
        })
      }
    }
    setLoading(false)
  }

  useEffect(() => {
    if (user) {
      router.replace('/browse')
    }
  }, [user, router])

  return (
    <HomepageBackground>
      <div className="h-screen flex items-center">
        <Form.Container>
          <Form onSubmit={handleSignup}>
            <Form.Title>Sign Up</Form.Title>
            {message.content && (
              <div
                className={`${
                  message.type === 'error' ? 'text-red-600' : 'text-white'
                }`}
              >
                {message.content}
              </div>
            )}
            <Form.Input placeholder="Name" onChange={setName} />
            <Form.Input type="email" placeholder="Email" onChange={setEmail} />
            <Form.Input
              type="password"
              placeholder="Password"
              onChange={setPassword}
            />
            <Form.Button
              type="submit"
              // loading={loading}
              disabled={loading || !email.length || !password.length}
            >
              Sign Up
            </Form.Button>
            <span className="pt-1 text-center text-sm text-white">
              <span>Do you have an account?</span>
              {` `}
              <Link href="/signin">
                <a className="font-bold hover:underline cursor-pointer">
                  Sign in.
                </a>
              </Link>
            </span>
          </Form>
        </Form.Container>
      </div>
    </HomepageBackground>
  )
}
