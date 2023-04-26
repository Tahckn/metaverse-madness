'use client';
import { motion } from 'framer-motion';
import styles from '../styles';

import { TypingText, TitleText } from '../components';
import { staggerContainer, fadeIn } from '../utils/motion';


const World = () =>
    <section id='world' className={`${styles.paddings} relative z-10`}>
        <motion.div
            variants={staggerContainer}
            initial='hidden'
            whileInView='show'
            viewport={{ once: 'false', amount: 0.25 }}
            className={`${styles.innerWidth} mx-auto flex flex-col`}>

            <TypingText title='| People on the World' textStyles='text-center' />
            <TitleText
                title={(<>
                    Track friends around you and invite them to play together in the same world </>)}
                textStyles='text-center'
            />
            <motion.div
                variants={fadeIn('up', 'tween', 0.3, 1)}
                className='mt-[68px] relative flex w-full h-[550px]'
            >
                <img src="/map.png" alt="map" className='w-full h-full object-cover' />
                <div className='absolute bottom-20 right-20 h-[70px] w-[70px] p-[6px] rounded-full bg-[#5d6680] shadow-people-1'>
                    <img src="/people-01.png" alt="people-1" className='w-full h-full' />
                </div>
                <div className='absolute top-10 right-64 h-[150px] w-[196px] p-[6px] rounded-[40px] bg-[#5d6680] shadow-view-2'>
                    <img src="/view-2.png" alt="people" className='w-full h-full rounded-[40px] relative' />
                    <h3 className='font-semibold absolute bottom-6 left-5 text-[18px] text-white  '>Hawkins Labs</h3>
                    <div className='absolute flex items-center bottom-14 left-5' >
                        <img className='w-[24px] h-[24px]' src="/people-01.png" alt="ppl-1" />
                        <img className='w-[24px] h-[24px] relative right-3' src="/people-02.png" alt="ppl-2" />
                        <img className='w-[24px] h-[24px] relative right-6' src="/people-03.png" alt="ppl-3" />
                        <p className='text-white text-[12px] relative right-4 font-normal'>+264 has joined</p>
                    </div>
                </div>
                <div className='absolute top-10 left-20 h-[70px] w-[70px] p-[6px] rounded-full bg-[#5d6680] shadow-people-2'>
                    <img src="/people-02.png" alt="people-2" className='w-full h-full  ' />
                </div>
                <div className='absolute bottom-28 left-32 h-[150px] w-[196px] p-[6px] rounded-[40px] shadow-view-1 bg-[#5d6680]'>
                    <img src="/view-1.png" alt="people-2" className='w-full h-full rounded-[40px] relative' />
                    <h3 className='font-semibold absolute bottom-6 left-5 text-[18px] text-white  '>The Upside Down</h3>
                    <div className='absolute flex items-center bottom-14 left-5' >
                        <img className='w-[24px] h-[24px]' src="/people-01.png" alt="ppl-1" />
                        <img className='w-[24px] h-[24px] relative right-3' src="/people-02.png" alt="ppl-2" />
                        <img className='w-[24px] h-[24px] relative right-6' src="/people-03.png" alt="ppl-3" />
                        <p className='text-white text-[12px] relative right-4 font-normal'>+264 has joined</p>
                    </div>
                </div>

                <div className='absolute top-1/2 left-[45%]  h-[70px] w-[70px] p-[6px] rounded-full bg-[#5d6680] shadow-people-3'>
                    <img src="/people-03.png" alt="people-3" className='w-full h-full' />
                </div>
            </motion.div>

        </motion.div>
    </section>;

export default World;
