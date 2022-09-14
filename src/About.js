import Transitioner from './Transitioner'

const About = () => {
   return (
      <Transitioner>
         <div className="pt-24 text-slate-100 text-center text-2xl">
            <div className="text-slate-200">Note: The changes which you make updates only on your device</div>
            <div className="mt-10 flex flex-col">
               <span className="cursive text-3xl first-letter:font-sans first-letter:text-4xl">Made With:</span>
               <a href="https://tailwindcss.com/" target="_blank" className="mt-5 hover:text-slate-300 hover:bg-zinc-700 transition-all duration-200">
                  <code>Tailwindcss</code>
               </a>
               <a href="https://reactjs.org/" target="_blank" className="mt-5 hover:text-slate-300 hover:bg-zinc-700 transition-all duration-200">
                  <code>Reactjs</code>
               </a>
               <a href="https://reactjs.org/docs/context.html" target="_blank" className="mt-5 hover:text-slate-300 hover:bg-zinc-700 transition-all duration-200">
                  <code>Context API (React)</code>
               </a>
               <a href="https://www.framer.com/" target="_blank" className="mt-5 hover:text-slate-300 hover:bg-zinc-700 transition-all duration-200">
                  <code>Framer Motion</code>
               </a>
            </div>
         </div>
      </Transitioner>
   )
}

export default About;