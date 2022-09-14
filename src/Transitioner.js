import { motion } from 'framer-motion'

const animationConfig = {
   initial: { opacity: 0 },
   animate: { opacity: 1 },
   exit: { opacity: 0 }
}

const Transitioner = ({ children, single }) => {
   return (
      <motion.div
         variants={animationConfig}
         initial="initial"
         animate="animate"
         exit="exit"
         transition={{ duration: .5 }}
         className={single ? 'w-full h-full' : ''}
      >
         {children}
      </motion.div>
   )
}
 
export default Transitioner;