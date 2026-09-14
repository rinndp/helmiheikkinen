import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import heroImg from './assets/session1/2606_HELMI-HEIKKINEN-B-119.jpg'
import './App.css'
import { sessions, type Session } from './sessions/sessions';
import { FaLink } from 'react-icons/fa'

function Gallery({ layout, items }: { layout: Session['layout']; items: Session['items'] }) {
  return (
    <div className={`gallery gallery--${layout}`}>
      {items.map((item, i) => (
        <div
          className={`gallery__item gallery__item--${item.orientation}`}
          key={i}
          data-aos="fade-up"
          data-aos-delay={(i % 3) * 100}
        >
          <img src={item.src} alt="" />
        </div>
      ))}
    </div>
  )
}

function App() {
  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual'
    }
    window.scrollTo(0, 0)
    AOS.init({ duration: 800, easing: 'ease-out-cubic', once: false, mirror: true, offset: 60 })
  }, [])

  return (
    <>
      <nav data-aos="fade-down"
        data-aos-delay="600" className="nav">
        <a href="#home">HOME</a>
        <a href="#work">WORK</a>
        <a href="#contact">CONTACT</a>
      </nav>

      <section id="home" className="hero">
        <img data-aos="fade" data-aos-delay="700"
          className="hero__bg" src={heroImg} alt="" />
        <div className="hero__scrim" />
        <div className="hero__text">
          <h1 data-aos="fade-up">HELMI HEIKKINEN</h1>
          <p className="hero__sub" data-aos="fade-up" data-aos-delay="100">MODEL</p>
          <h2 className="hero__title" data-aos="fade-up" data-aos-delay="200">PORTFOLIO</h2>
        </div>
      </section>

      <section id="work" className="work">
        {sessions.map((s) => (
          <article className="session" key={s.title}>
            <header className="session__header">
              <h2 data-aos="fade-up">{s.title}</h2>
              <div className='flex flex-row items-center justify-center gap-2'
                data-aos="fade-up"
                data-aos-delay="100">
                <a
                  href={s.credit.link}
                  target="_blank"
                  className="session__credit"

                >
                  {s.credit.label}
                </a>
                <FaLink className='w-3 h-3 mt-2' />
              </div>
            </header>
            <Gallery layout={s.layout} items={s.items} />
          </article>
        ))}
      </section>

      <section id="contact" className="contact">
        <p className="contact__eyebrow" data-aos="fade-up">LET'S WORK TOGETHER</p>
        <h2 data-aos="fade-up" data-aos-delay="100">CONTACT</h2>
        <div className="contact__links">
          <a
            className="contact__link"
            href="mailto:helmielviira06@gmail.com"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            helmielviira06@gmail.com
          </a>
          <a
            className="contact__link"
            href="https://instagram.com/111helmi"
            target="_blank"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            @111helmi
          </a>
        </div>
        <p className="contact__location" data-aos="fade-up" data-aos-delay="400">
          Based in Kuopio, Finland.
        </p>
      </section>
    </>
  )
}

export default App
