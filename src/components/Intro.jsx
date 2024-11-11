import React from 'react';

function Intro() {
   return (
      <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
         <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">Naufal Arya Putra</h1>
         <p className="text-base md:text-xl mb-3 font-medium">Software Engineer & Web Developer</p>
         <p className="text-sm max-w-xl mb-6 font-bold">
         I’m a Computer Science major at BINUS University focusing on Web Development, Software Engineering, and Mobile Development. I’m passionate about creating engaging and functional online experiences, from developing dynamic websites to building full-stack applications and mobile apps using Kotlin and Java. I’m driven by continuous learning and innovation, always striving to deliver impactful and user-centric solutions across web, software, and mobile platforms.
            <br />
            Check out my latest projects on this website. To see the full code and collaborate, visit my GitHub here{' '}
            <a
               href="https://youtube.com/fknight"
               target="_blank"
               className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600"
               rel="noreferrer noopener"
            >
               Naufalaryaaa
            </a>{' '}
            .
         </p>
      </div>
   )
}

export default Intro;