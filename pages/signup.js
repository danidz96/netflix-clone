import Link from 'next/link'
import Form from '@components/form'
import HomepageBackground from '@components/homepageBackground'

export default function Signup() {
  return (
    <HomepageBackground>
      <div className="h-screen flex items-center">
        <Form.Container>
          <Form>
            <Form.Title>Sign Up</Form.Title>
            <Form.Input placeholder="Name" />
            <Form.Input type="email" placeholder="Email" />
            <Form.Input type="password" placeholder="Password" />
            <Form.Button type="submit">Sign Up</Form.Button>
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
