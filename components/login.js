import React from 'react'
import { BsPersonCircle } from 'react-icons/bs'
import { Si1Password } from 'react-icons/si'

export default function Login() {

  return (
    <>
      <div className='login-bg w-full h-screen flex justify-center items-center flex-col'>
        <h2 className='text-3xl md:text-4xl lg:text-6xl text-center text-white'><span className='bg-white text-black p-1  font-semibold rounded-md'>True</span> Phone</h2>
        <div className='bg-gray-100 mt-10 sm:rounded-2xl text-center max-w-[480px] py-10'>
          <h3 className='text-3xl font-semibold'>Log in</h3>
          <p className='mt-2 px-4 lg:px-10'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
          <form >
            <div className='bg-white'>
              <div className='relative'>
                <div className='absolute top-3 left-2 text-2xl'><BsPersonCircle /></div>
                <input id="email-address" name="email" type="email" autocomplete="email" required class="relative mt-10 block w-full appearance-none bg-transparent rounded-none border-gray-300 px-10 py-3 text-gray-900  border-b-2 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-md" placeholder="Email address" />
              </div>
              <div class="relative">
                <div className='absolute top-3 left-2 text-2xl'><Si1Password /></div>
                <input id="email-address" name="email" type="email" autocomplete="email" required class="relative block w-full appearance-none bg-transparent rounded-none  px-10 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:outline-none sm:text-md" placeholder="Password" />
              </div>
            </div>

            <div class="text-sm mt-4 flex justify-start px-2">
              <a href="#" class="font-medium text-indigo-600 text-left hover:text-indigo-500">Forgot your password?</a>
            </div>

            <div className='px-2 mt-10'>
              <button type="submit" class="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-md font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" />
                  </svg>
                </span>
                Next
              </button>
            </div>

            <div class="text-md mt-12">
              <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Create account</a>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
