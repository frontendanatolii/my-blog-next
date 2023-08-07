import Image from 'next/image';
import classes from './Hero.module.css';

export const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/tolik.jpg'
          alt='An image showing Tolik'
          width={350}
          height={350}
        />
      </div>
      <h1>
        Hi, I'm Tolik
      </h1>
      <p>
        I blog about my way in frontend development with different technologies like React, Next.Js and Vue
      </p>
    </section>
  )
}