import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2006 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BTech in Electronics & Communication Engineering"
            subTitle="NIT Hamirpur (2020 - present)"
            result="8.37"
            des="I pursued my passion for technology and innovation at the esteemed National Institute of Technology, Hamirpur, where I earned my Bachelor's degree in ECE.
             NIT Hamirpur is renowned for its rigorous academic curriculum, cutting-edge research facilities, and a vibrant community of Engineers."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Gaya College (2018 - 2020)"
            result="84%"
            des="I completed my higher secondary education at Gaya College, where I pursued an enriching academic curriculum during my 11th and 12th grades. Gaya College, known for its dedication to academic excellence,
            provided me with a robust educational foundation and a nurturing learning environment."
          />
          <ResumeCard
            title="Primary School Education"
            subTitle="JaiHind Public School (2006 - 2018)"
            result="95%"
            des="My educational journey began at JaiHind Public School, a nurturing institution where I embarked on my academic endeavors from kindergarten through to the 10th grade equivalent. These foundational years were pivotal in shaping my approach to learning, curiosity, and enthusiasm for education."
          />
        </div>
      </div>
      {/* part Two */}

      {/* <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Sr. Software Engineer"
            subTitle="Google Out Tech - (2017 - Present)"
            result="USA"
            des="Google's hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up."
          />
          <ResumeCard
            title="Web Developer & Trainer"
            subTitle="Apple Developer Team - (2012 - 2016)"
            result="MALAYSIA"
            des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="Nike - (2020 - 2011)"
            result="Oman"
            des="The Oman economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy."
          />
        </div>
      </div> */}
    </motion.div>
  );
}

export default Education