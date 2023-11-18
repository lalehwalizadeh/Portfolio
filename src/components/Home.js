import { motion } from 'framer-motion';
import Capture from '../Images/Capture.jpg';
import './Home.css';
import './botton.css';
import React from 'react';

export default function Home() {
	return (
		<div className='design'>
			<motion.div
				className='side'
				variants={{
					hidden: { opacity: 0, y: 100 },
					visible: { opacity: 1, y: 5 },
				}}
				initial='hidden'
				animate='visible'
				transition={{ duration: 1, delay: 0.25 }}>
				<div className='pic '>
					<img src={Capture} alt='my_picture' className='img' />
				</div>
				<div className='intro'>
					<h1>Ms.Laleh Walizadeh </h1>
					<h6>Frontend Web Developer</h6>
					<br />
					<span>
						<a href='/about' className='btn_design '>
							{' '}
							More About Me
						</a>
						<a href='/works' className='btn_design '>
							{' '}
							Portfolio{' '}
						</a>
					</span>
				</div>
			</motion.div>
		</div>
	);
}
