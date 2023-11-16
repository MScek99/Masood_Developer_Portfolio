import { motion } from 'framer-motion'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex
      flex-row items-start gap-5`}>
        <div className='flex flex-col 
        justify-center items-center mt-5'>
          <div className='w-4 h-4 rounded-full bg-gradient-to-b from-blue-500 from-30% to-indigo-500 to-60%'/>
          <div className='w-1 sm:h-30 h-40 bg-gradient-to-b from-indigo-500 via-purple-500'/>

        </div>
        <div>
          <h1 className={`${styles.heroHeadText} `}>Hello, I'm <span className='bg-gradient-to-r from-blue-600 via-pink-400 to-purple-500 bg-clip-text text-transparent'>Masood</span></h1>
          <h1 className={`${styles.heroSubText}  bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent`}>Welcome To My Portfolio </h1>
        </div>

      </div>
      <ComputersCanvas />
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl bg-black border-4 border-cyan-400 flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-gradient-to-b from-green-500 to-blue-600 mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero