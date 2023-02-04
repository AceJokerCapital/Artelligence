import React, { useState } from 'react'
import { Link, Routes, Route } from 'react-router-dom'

import { logo } from '../assets'


const PrivacyPolicy = () => {



   return (
      <>
         <div className='w-full h-full flex flex-col' >
            <header className='w-full flex justify-between items-center bg-[#809475] sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4] '  >
               <Link to='/' className='flex flex-row justify-center items-center gap-2' >
                  <img
                     className='max-xs:w-20 w-28 object-contain'
                     src={logo} alt='logo'
                  />
                  <h1 className='max-xs:text-[14px] sm:text-[18px] md:text-[21px]'>R T E L L I G E N C E</h1>
               </Link>
               <div className='flex flex-col justify-center items-center gap-3' >
                  <Link to={`/`}
                     className='max-xs:w-14 max-xs:text-[12px] w-20 flex items-center justify-center font-mono font-medium bg-[#9fbf93] text-white px-4 py-2 rounded-md hover:scale-105'
                  >{`Home`}</Link>


               </div>

            </header>

            <main className='w-full h-full' >

               <h1 className='text-[36px] mt-10 mb-10 flex items-center justify-center font-mono underline' >
                  Privacy Policy
               </h1>

               <pre className='break-words whitespace-pre-wrap whitespace-[-moz-pre-wrap] p-3 [&>p]:font-mono [&>p]:font-bold [&>p]:flex [&>p]:justify-center [&>p]:mt-4' >
                  This Privacy Policy applies to the Artelligence image generation web application (the “Application”). This policy describes how we collect, use, and disclose information about you when you use the Application.
                  <br />
                  <br />

                  <p>
                     Information We Collect
                  </p>


                  <br />
                  We collect information about you when you use the Application. This includes:
                  <br />
                  • Your IP address
                  <br />
                  • Your device type
                  <br />
                  • Your operating system
                  <br />
                  • Your browser type
                  <br />
                  • The pages you visit on our Application
                  <br />
                  • The time and date of your visit
                  <br />
                  • Any search terms you enter into our Application
                  <br />
                  <br />

                  We also may collect information from third-party sources, such as Open AI API. This includes:

                  <br /><br />
                  • Your preferences and settings for using the Application.
                  <br />
                  How We Use Information We Collect
                  <br /><br />
                  We use the information we collect to provide, maintain, protect and improve our services, to develop new services, and to protect Artelligence and our users. We may also use this information to personalize your experience with the Application.
                  <br /><br />

                  <p>
                     Sharing of Information
                  </p>

                  <br /><br />
                  We will not share any of your personal information with third parties without your consent unless required by law or in connection with providing our services.
                  <br /><br />

                  <p>
                     Security of Information

                  </p>

                  <br /><br />
                  Artelligence takes reasonable steps to help protect your personal information from loss, misuse, unauthorized access or disclosure. However, no security measures are perfect or impenetrable and we cannot guarantee that your personal information will be secure in all circumstances.
                  <br /><br />

                  <p>
                     Changes to this Privacy Policy
                  </p>

                  <br /><br />
                  We may update this Privacy Policy from time to time in order to reflect changes in our practices or services. If we make any material changes we will notify you by email (sent to the e-mail address specified in your account) or by means of a notice on this Site prior to the change becoming effective.



               </pre>

               <span className='mt-10 mb-10 mr-10 font-mono flex justify-end'>Artelligence by AceJokerCapital</span>
            </main>


         </div>

      </>
   )
}


export default PrivacyPolicy;