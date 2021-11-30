import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Form from '@components/form'
import HomepageBackground from '@components/homepageBackground'
import { useUser } from '@hooks/useUser'
import { updateUserName } from '@utils/supabase-client'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState({
    type: '',
    content: '',
  })

  const router = useRouter()
  const { signIn, user } = useUser()

  const handleSignIn = async (e) => {
    e.preventDefault()

    setLoading(true)
    setMessage({})

    const { error } = await signIn({ email, password })
    if (error) {
      setMessage({ type: 'error', content: error.message })
    }

    if (!password) {
      setMessage({
        type: 'error',
        content: 'Please enter a password.',
      })
    }
    setLoading(false)
  }

  useEffect(() => {
    if (user) {
      router.replace('/browse')
    }
  }, [user])

  return (
    <HomepageBackground>
      <div className="h-screen flex items-center">
        <Form.Container>
          <Form onSubmit={handleSignIn}>
            <Form.Title>Sign In</Form.Title>
            {message.content && (
              <div
                className={`${
                  message.type === 'error' ? 'text-red-600' : 'text-white'
                }`}
              >
                {message.content}
              </div>
            )}
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
              Sign In
            </Form.Button>
            <span className="pt-1 text-center text-sm text-white">
              <span>Don't have an account?</span>
              {` `}
              <Link href="/signup">
                <a className="font-bold hover:underline cursor-pointer">
                  Sign up.
                </a>
              </Link>
            </span>
          </Form>
        </Form.Container>
      </div>
    </HomepageBackground>
  )
}
