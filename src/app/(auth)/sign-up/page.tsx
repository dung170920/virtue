import { Button, Checkbox, Input, Label } from '@/components/ui'
import { PATH } from '@/constants'
import Link from 'next/link'
import React from 'react'

const SignUp = () => {
  return (
    <div className='flex flex-col items-center justify-center flex-1'>
      <form
        autoComplete="off"
        className="w-full max-w-[556px] lg:px-[60px] lg:py-[50px] bg-card rounded-md z-10 shadow text-center"
      >
        <h2 className="mb-2 text-xl font-semibold">Sign Up</h2>
        <div className="flex items-center justify-center mb-8 text-neutral-500">
          <p>Already have an account? </p>
          <Link href={PATH.signIn} className="text-primary underline ml-1">
            Sign In
          </Link>
        </div>
        <span className='text-sm'>Or sign up with email</span>
        <div className="flex flex-col items-start mt-5 gap-y-2">
          <Label htmlFor="fullName">Full Name *</Label>
          <Input type="text" id="fullName" placeholder="John Doe" />
        </div>
        <div className="flex flex-col items-start mt-5 gap-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input type="text" id="email" placeholder="example@gmail.com" />
        </div>
        <div className="flex flex-col items-start mt-5 gap-y-2">
          <Label htmlFor="password">Password *</Label>
          <Input type="password" id="password" placeholder="Create a password" />
        </div>
        <div className="flex items-start space-x-4 my-6">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm cursor-pointer text-left">
            I agree to the <a href="#" className='font-medium text-primary'>Terms of Use</a> and have read and understand the <a href="#" className='font-medium text-primary'>Privacy policy</a>.
          </label>
        </div>
        <Button type='submit' className='w-full' size={'lg'}>
          Create an account
        </Button>
      </form>
    </div>
  )
}

export default SignUp