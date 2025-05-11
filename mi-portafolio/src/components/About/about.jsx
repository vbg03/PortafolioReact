import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function About() {
  const container = useRef();

  useGSAP(() => {
    gsap.fromTo(
      container.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 }
    );
  }, { scope: container });

  return (
    <section ref={container}>
      <h2>Sobre Mí</h2>
      <p>Desarrolladora apasionada por crear experiencias web únicas.</p>
    </section>
  );
}

export default About;
