import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import 'tailwindcss/tailwind.css'
import { IoNewspaperSharp } from "react-icons/io5";
import { BiCubeAlt } from "react-icons/bi";


export default function Home() {
  return (
    <div>
      <Head>
        <title>IMPACT FESTIVAL</title>
        <meta name="description" content="Conference event website for LevelUp237" />
        <link rel="icon" href="/impactlogo.png" />
      </Head>

      <main className="bg-white">
        {/* Header */}
        <header
          className="fixed flex justify-between items-center w-full px-8 py-6 bg-black text-white z-10"
        >
          <a href="#" className="text-xl font-bold">
            IMPACT <span className="text-navFocus">FESTIVAL</span>
          </a>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="hover:text-yellow-500">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-yellow-500">About</a>
              </li>
              <li>
                <a href="#sponsors" className="hover:text-yellow-500">Sponsors</a>
              </li>
              <li>
                <a href="#tickets" className="hover:text-yellow-500">Tickets</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-yellow-500">Contact Us</a>
              </li>
            </ul>
          </nav>
        </header>

        {/* Hero */}
        <section className="relative min-h-screen pt-20  pb-12 lg:pt-48" style={{ backgroundColor: "#FBF5F3" }}>
          <Image
            src="/impactlogo.png"
            layout="fill"
            objectFit="cover"
            alt="LevelUp237 Conference hero background"
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-start text-center w-full h-full px-16" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
            {/* <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold uppercase leading-none" style={{ color: "#FFB81C" }}>IM<span className="text-white">237</span></h1>
            <h2 className="text-xl lg:text-3xl mt-6 font-semibold text-white">International Tech Conference</h2>
            button with text "get your ticket now" */}
            <a href="#tickets" className="mt-8 px-8 py-4 bg-button text-white text-lg font-semibold rounded-lg shadow-md hover:bg-transparent hover:border hover:border-white">Get Your Ticket Now</a>
          </div>
        </section>

        {/* About */}
        <section id="about" className="bg-background pt-16 pb-24 px-8">
          <h2 className="text-4xl font-bold mb-8  text-white">About the Conference</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <article>
              <p className="text-lg leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit bibendum ante sed porttitor. Ut euismod lobortis augue, ut pellentesque nulla dapibus quis. Fusce feugiat semper dictum. Nunc condimentum arcu id nisl volutpat, ac efficitur nisi ultricies. Aliquam dapibus lectus eget leo suscipit malesuada.
              </p>
              <p className="text-lg leading-relaxed mt-4">
                 Nam vel nibh at libero vulputate lacinia. Etiam urna sem, tincidunt vitae gravida quis, pulvinar finibus lectus. Sed ut suscipit sapien, vel hendrerit lorem. Quisque commodo tortor sed ex vehicula, nec lacinia est dignissim.
              </p>
            </article>
            <aside>
            <div className="flex">
              <div className="">
                <IoNewspaperSharp />
                <h2>
                Our Vision:
                </h2>
                <p>
                To empower and equip the next generation of young leaders in business, Finance, governance, technology and sports.
                </p>
              </div>
              <div className="">
                <BiCubeAlt />
                <h2>
                Our Mission
                </h2>
                <p className='w-72'>
                To create an environment where successful business leaders, corporate executives, professional entrepreneurs, leaders in technology and sports can provide mentorship to the next generation.
                </p>
              </div>

            </div>
            </aside>
          </div>
        </section>

        <section id="speakers" className="bg-white pt-16 pb-24 px-8">
      <h2 className="text-4xl font-bold mb-8 text-center">Our Speakers</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {speakers.map((speaker) => (
          <SpeakerCard key={speaker.name} speaker={speaker} />
        ))}
      </div>
    </section>
        {/* Sponsors */}
        <section id="sponsors" className="bg-white pt-16 pb-24 px-8">
          <h2 className="text-4xl font-bold mb-8 text-center">Our Sponsors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="
              bg-gray-50
              px-4
              py-6
              rounded-lg
              shadow-md
              flex
              flex-col
              justify-center
              items-center
            ">
              <Image
                src="/sponsor-1.png"
                width={200}
                height={90}
                alt="LevelUp237 Conference sponsor"
              />
              <h3 className="text-xl mt-4 font-semibold">Company A</h3>
            </div>
            <div className="
              bg-gray-50
              px-4
              py-6
              rounded-lg
              shadow-md
              flex
              flex-col
              justify-center
              items-center
            ">
              <Image
                src="/sponsor-2.png"
                width={200}
                height={90}
                alt="LevelUp237 Conference sponsor"
              />
              <h3 className="text-xl mt-4 font-semibold">Company B</h3>
            </div>
            <div className="
              bg-gray-50
              px-4
              py-6
              rounded-lg
              shadow-md
              flex
              flex-col
              justify-center
              items-center
            ">
              <Image
                src="/sponsor-3.png"
                width={200}
                height={90}
                alt="LevelUp237 Conference sponsor"
              />
              <h3 className="text-xl mt-4 font-semibold">Company C</h3>
            </div>
          </div>
        </section>

        {/* Tickets */}
        <section id="tickets" className="bg-white pt-16 pb-24 px-8">
          <h2 className="text-4xl font-bold mb-8 text-center">Tickets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="
              bg-gray-50
              px-8
              py-12
              rounded-lg
              shadow-md
              flex
              flex-col
              justify-center
              items-center
            ">
              <p className="text-2xl font-semibold">$299</p>
              <p className="text-lg">General Admission Ticket</p>
              <button className="mt-8 py-4 px-6 bg-green-500 hover:bg-green-600 text-white text-xl font-semibold rounded-lg transition duration-200">
                Buy Now
              </button>
            </div>
            <div className="
              bg-gray-50
              px-8
              py-12
              rounded-lg
              shadow-md
              flex
              flex-col
              justify-center
              items-center
            ">
              <p className="text-2xl font-semibold">$499</p>
              <p className="text-lg">VIP Admission Ticket</p>
              <button className="mt-8 py-4 px-6 bg-green-500 hover:bg-green-600 text-white text-xl font-semibold rounded-lg transition duration-200">
                Buy Now
              </button>
            </div>
          </div>
        </section>
        <section id="contact" className="bg-gray-100 pt-16 pb-24 px-8">
  <h2 className="text-4xl font-bold mb-8 text-center">Contact Us</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
    <form className="max-w-md mx-auto">
      <label htmlFor="name" className="block font-medium text-gray-700 mb-2">Name</label>
      <input type="text" id="name" name="name" placeholder="Your name" className="px-4 py-2 border w-full mb-6 rounded-md" />

      <label htmlFor="email" className="block font-medium text-gray-700 mb-2">Email</label>
      <input type="email" id="email" name="email" placeholder="Your email" className="px-4 py-2 border w-full mb-6 rounded-md" />

      <label htmlFor="message" className="block font-medium text-gray-700 mb-2">Message</label>
      <textarea id="message" name="message" rows={6} className="px-4 py-2 border w-full mb-6 rounded-md"></textarea>

      <button type="submit" className="bg-green-500 text-white py-2 px-8 rounded-md hover:bg-green-600 transition-colors duration-300 ease-in-out">Send</button>
    </form>
    <div className="flex flex-col justify-center items-center">
      <p className="mb-4 text-lg"><i className="fas fa-map-marker-alt mr-2"></i>123 Main St, Anytown USA 12345</p>
      <p className="mb-4 text-lg"><i className="fas fa-phone-alt mr-2"></i>(123) 555-1234</p>
      <p className="mb-4 text-lg"><i className="fas fa-envelope mr-2"></i>info@levelup237.com</p>
      <div className="flex space-x-4">
        <a href="#" target="_blank" className="text-3xl text-gray-400 hover:text-gray-600 transition-colors duration-300 ease-in-out"><i className="fab fa-facebook"></i></a>
        <a href="#" target="_blank" className="text-3xl text-gray-400 hover:text-gray-600 transition-colors duration-300 ease-in-out"><i className="fab fa-twitter"></i></a>
        <a href="#" target="_blank" className="text-3xl text-gray-400 hover:text-gray-600 transition-colors duration-300 ease-in-out"><i className="fab fa-instagram"></i></a>
      </div>
    </div>
  </div>
</section>

      </main>
      </div>
  )
  }



  const speakers = [
    {
      name: "John Doe",
      title: "Chief Executive Officer",
      company: "Acme Inc.",
      imageSrc: "/speaker-1.jpg"
    },
    {
      name: "Jane Smith",
      title: "Chief Technical Officer",
      company: "Atlas Corp.",
      imageSrc: "/speaker-2.jpg"
    },
    {
      name: "Bob Johnson",
      title: "Chief Marketing Officer",
      company: "Cosmo Co.",
      imageSrc: "/speaker-3.jpg"
    }
  ];
  

  function SpeakerCard({ speaker }) {
    return (
      <div className="flex flex-col items-center text-center mb-16">
        <Image
          src={speaker.imageSrc}
          width={250}
          height={250}
          alt={`Picture of ${speaker.name}`}
          className="rounded-full"
        />
        <div className="mt-6">
          <h3 className="text-2xl font-bold">{speaker.name}</h3>
          <p className="text-lg font-medium">{speaker.title}</p>
          <p className="text-lg">{speaker.company}</p>
        </div>
      </div>
    );
  }