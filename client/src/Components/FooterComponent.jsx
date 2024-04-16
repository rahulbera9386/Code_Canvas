import React from 'react'
import { Footer, FooterDivider } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
const FooterComponent = () => {
  return (
    <>
    <Footer bgDark className=''>
      <div className="w-full">
        <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
          <div>
            <Footer.Title title="Company" className='text-white'/>
            <Footer.LinkGroup col>
              <Footer.Link href="#" className="text-gray-300">About</Footer.Link>
              <Footer.Link href="#" className="text-gray-300">Careers</Footer.Link>
              <Footer.Link href="#" className="text-gray-300">Brand Center</Footer.Link>
              <Footer.Link href="#" className="text-gray-300">Blog</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="help center" className='text-white'/>
            <Footer.LinkGroup col>
              <Footer.Link href="#" className="text-gray-300">Discord Server</Footer.Link>
              <Footer.Link href="#" className="text-gray-300">Twitter</Footer.Link>
              <Footer.Link href="#" className="text-gray-300">Facebook</Footer.Link>
              <Footer.Link href="#" className="text-gray-300">Contact Us</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="legal" className='text-white'/>
            <Footer.LinkGroup col>
              <Footer.Link href="#" className="text-gray-300">Privacy Policy</Footer.Link>
              <Footer.Link href="#" className="text-gray-300">Licensing</Footer.Link>
              <Footer.Link href="#" className="text-gray-300">Terms &amp; Conditions</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="download" className='text-white'/>
            <Footer.LinkGroup col>
              <Footer.Link href="#" className="text-gray-300">iOS</Footer.Link>
              <Footer.Link href="#" className="text-gray-300">Android</Footer.Link>
              <Footer.Link href="#" className="text-gray-300">Windows</Footer.Link>
              <Footer.Link href="#" className="text-gray-300">MacOS</Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
        <FooterDivider/>
        <div className="w-full px-4 py-6 sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Rahul™" year={new Date().getFullYear()} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} className='hover:text-white'/>
            <Footer.Icon href="#" icon={BsInstagram} className='hover:text-white'/>
            <Footer.Icon href="#" icon={BsTwitter} className='hover:text-white'/>
            <Footer.Icon href="#" icon={BsGithub} className='hover:text-white'/>
            <Footer.Icon href="#" icon={BsDribbble} className='hover:text-white'/>
          </div>
        </div>
      </div>
    </Footer>
    </>
  )
}

export default FooterComponent