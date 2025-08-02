"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "We used Trello to provide clarity on steps, requirements, and procedures. This was exceptional when communicating with teams that had deep cultural and language differences.",
    name: "Jefferson Scomacao",
    role: "Development Manager at IKEA/PTC",
    logo: "/logo1.svg",
    link: "#",
  },
  {
    quote:
      "Trello helped our teams collaborate better across departments. It's intuitive and easy to use even with large, diverse teams.",
    name: "Lina Meyers",
    role: "Product Lead at TeamFlow",
    logo: "/logo2.png",
    link: "#",
  },
  {
    quote:
      "With Trello, we streamlined project workflows and improved transparency across all teams in multiple time zones.",
    name: "Arun Patel",
    role: "CTO at RemoteBridge",
    logo: "/logo3.png",
    link: "#",
  },
];

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = ["/slider1.svg", "/slider2.webp", "/slider3.webp"];

  const textList = [
    {
      title: "Inbox",
      desc: "When it’s on your mind, it goes in your Inbox. Capture your to-dos from anywhere, anytime.",
    },
    {
      title: "Boards",
      desc: "Your to-do list may be long, but it can be manageable! Keep tabs on everything from 'to-dos to tackle' to 'mission accomplished!”",
    },
    {
      title: "Planner",
      desc: "Drag, drop, get it done. Snap your top tasks into your calendar and make time for what truly matters.",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="bg-white w-full h-full">
      <nav
        className={`bg-white flex justify-between py-3 md:py-0 lg:justify-around items-center w-full px-4 sticky top-0 z-900 transition-shadow duration-300 ${
          hasScrolled ? "shadow-lg" : ""
        }`}
      >
        <div className="flex items-center gap-10 sticky">
          <Image src="/logo.svg" alt="Logo" width={100} height={40} />
          <div className="hidden md:flex lg:gap-8 items-center text-sm font-extralight gap-4">
            <a href="#" className="text-black hover:text-blue-500">
              Features
            </a>
            <a href="#" className="text-black hover:text-blue-500">
              Solutions
            </a>
            <a href="#" className="text-black hover:text-blue-500">
              Plans
            </a>
            <a href="#" className="text-black hover:text-blue-500">
              Pricing
            </a>
            <a href="#" className="text-black hover:text-blue-500">
              Resources
            </a>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-4 sticky">
          <a
            href="https://id.atlassian.com/login?application=trello&continue="
            className="text-black hover:text-blue-500"
          >
            Login
          </a>
          <a href="https://id.atlassian.com/login?application=trello&continue=">
            <button className="bg-blue-600 text-white px-6 py-5 h-full hover:bg-blue-700">
              Get Trello for free
            </button>
          </a>
        </div>

        <div className="md:hidden sticky">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="flex flex-col gap-3 px-6 py-4 bg-white border-b md:hidden animate-slide-down top-15 sticky">
          <a href="#" className="text-black hover:text-blue-500">
            Features
          </a>
          <a href="#" className="text-black hover:text-blue-500">
            Solutions
          </a>
          <a href="#" className="text-black hover:text-blue-500">
            Plans
          </a>
          <a href="#" className="text-black hover:text-blue-500">
            Pricing
          </a>
          <a href="#" className="text-black hover:text-blue-500">
            Resources
          </a>
          <hr />
          <a
            href="https://id.atlassian.com/login?application=trello&continue="
            className="text-black"
          >
            Login
          </a>
          <a href="https://id.atlassian.com/login?application=trello&continue=">
            <button className="bg-blue-600 text-white px-4 py-2 mt-2 rounded-md w-full hover:bg-blue-700">
              Get Trello for free
            </button>
          </a>
        </div>
      )}

      <div className=" w-full bg-blue-100 py-4 px-1">
        <h1 className="text-black text-center">
          {" "}
          Accelerate your teams' work with Atlassian Intelligence (AI) features
          🤖 now available for all Premium and Enterprise!{" "}
          <span className="text-blue-600 underline">
            <a className="cursor-pointer ">Learn More</a>
          </span>{" "}
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 items-center min-h-screen justify-items-center-safe bg-gray-100 px-5  xl:px-20">
        <div className="space-y-6 max-w-4xl mt-30 lg:mt-0">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-center lg:text-left">
            Capture, organize, and <br />
            tackle your to-dos from anywhere.
          </h1>
          <p className="text-lg text-gray-600 text-center lg:text-left">
            Escape the clutter and chaos—unleash your productivity with Trello.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-normal">
            <input
              type="email"
              placeholder="Email"
              className="p-3 rounded-md border border-gray-300 w-full sm:w-1/2"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition">
              Sign up – it’s free!
            </button>
          </div>

          <p className="text-sm text-gray-500 text-center lg:text-left">
            By entering my email, I acknowledge the{" "}
            <a
              href="https://www.atlassian.com/legal/privacy-policy"
              className="text-blue-600 underline"
            >
              Atlassian Privacy Policy
            </a>
            .
          </p>

          <a
            href="https://trello.com/#video"
            className="text-blue-600 flex items-center gap-1 hover:underline justify-center lg:justify-normal"
          >
            <span>Watch video</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 18l6-6-6-6v12z" />
            </svg>
          </a>
        </div>

        <div className="flex justify-center mt-10 md:mt-0">
          <video
            src="main.mp4"
            autoPlay
            muted
            playsInline
            className="w-full max-w-xl rounded-xl"
          />
        </div>
      </div>

      <section className="w-full px-4 md:px-20 py-20 bg-gray-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
          <div className="space-y-6 hidden lg:block">
            <p className="text-sm text-blue-700 font-bold uppercase">
              Trello 101
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
              Your productivity powerhouse
            </h2>
            <p className="text-gray-600 text-lg">
              Stay organized and efficient with Inbox, Boards, and Planner.
              Every to-do, idea, or responsibility—no matter how small—finds its
              place, keeping you at the top of your game.
            </p>
            <div className="space-y-4">
              {textList.map((item, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg border-l-4  transition-all duration-300 ${
                    currentSlide === index
                      ? "bg-blue-50 border-blue-600 shadow-md text-blue-700"
                      : "bg-white border-gray-200 text-gray-500"
                  }`}
                >
                  <h4 className="font-bold ">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative w-full flex flex-col items-center">
            <div className="relative w-full flex flex-col items-center">
              <div className="block lg:hidden mb-6 px-4 text-center">
                <p className="text-sm text-blue-700 font-bold uppercase">
                  Trello 101
                </p>
                <h2 className="text-3xl font-bold text-gray-900 leading-tight">
                  Your productivity powerhouse
                </h2>
                <p className="text-gray-600 text-base mt-2">
                  Stay organized and efficient with Inbox, Boards, and Planner.
                  Every to-do, idea, or responsibility—no matter how small—finds
                  its place, keeping you at the top of your game.
                </p>
              </div>

              <Image
                src={slides[currentSlide]}
                alt={`Slide ${currentSlide + 1}`}
                width={600}
                height={400}
                className="rounded-xl shadow-lg transition duration-500 ease-in-out w-full"
              />

              <div className="mt-6 px-4 py-3 rounded-lg transition duration-300 block lg:hidden text-center bg-blue-50 border-l-4 border-blue-600 shadow-md">
                <h4 className="text-xl font-bold text-blue-700 mb-2">
                  {textList[currentSlide].title}
                </h4>
                <p className="text-sm text-gray-600">
                  {textList[currentSlide].desc}
                </p>
              </div>
            </div>


            <div className="flex space-x-4 mt-4 lg:absolute lg:bottom-4 lg:left-1/2 lg:-translate-x-1/2">
              <button
                onClick={prevSlide}
                className="w-8 h-8 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition"
              >
                ←
              </button>
              <button
                onClick={nextSlide}
                className="w-8 h-8 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 py-0 px-6 md:px-20">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-3xl font-bold text-center mt-20">
            From message to action
          </h2>
          <p className="text-lg text-center mb-20 max-w-2xl">
            Quickly turn communication from your favorite apps into to-dos,
            keeping all your discussions and tasks organized in one place.
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white px-5 py-10 rounded-xl shadow-lg">
          <div className="flex justify-center lg:justify-start">
            <img
              src="main2.svg"
              alt="Email to Trello Inbox illustration"
              className="w-full max-w-2xl min-w-sm rounded-lg shadow-lg"
            />
          </div>

          <div className="text-gray-900 max-w-xl mx-auto lg:mx-0 text-center lg:text-left space-y-6">
            <div className="space-y-2">
              <h3 className="flex items-center space-x-2 text-black font-semibold text-xl">
                <img src="email.svg"></img>
                <span>EMAIL MAGIC</span>
              </h3>
              <p className="font-extralight leading-9 text-xl text-left ">
                Easily turn your emails into to-dos! Just forward them to your
                Trello Inbox, and they’ll be transformed by Atlassian
                Intelligence (AI) into organized to-dos with all the links you
                need.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center mt-20"></div>

        <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white px-5 py-10 rounded-xl z-100 -mb-30 shadow-lg">
          <div className="text-gray-900 max-w-xl mx-auto lg:mx-0 text-center lg:text-left space-y-6 order-2 lg:order-1">
            <div className="space-y-2">
              <h3 className="flex items-center space-x-2 text-black font-semibold text-xl">
                <img src="calender.svg" alt="email icon" />
                <span>MESSAGE APP SORCERY</span>
              </h3>
              <p className=" font-light leading-9 text-xl text-left">
                Need to follow up on a message from Slack or Microsoft Teams?
                Send it directly to your Trello board! Your favorite app
                interface lets you save messages that appear in your Trello
                Inbox with AI- generated summaries and links.
              </p>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <img
              src="main3.svg"
              alt="Email to Trello Inbox illustration"
              className="w-full max-w-2xl min-w-sm rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-20 px-5 ">
        <div className="max-w-6xl space-y-4 mb-12 grid grid-cols-1 lg:grid-cols-2 mt-25 mx-auto">
          <div>
            <p className="text-blue-900 font-semibold tracking-wide text-sm">
              WORK SMARTER
            </p>
            <h2 className="text-4xl font-bold text-blue-900">
              Do more with Trello
            </h2>
            <p className="text-lg text-gray-700">
              Customize the way you organize with easy integrations, automation,
              and mirroring of your to-dos across multiple locations.
            </p>
          </div>
          <div className="hidden lg:block"></div>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 -mt-10 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <img
              src="main4.svg"
              alt="Integrations Icon"
              className="mb-4 w-20 h-auto"
            />
            <h3 className="text-xl font-bold text-blue-900 mb-2">
              Integrations
            </h3>
            <p className="text-gray-700 mb-4">
              Connect the apps you are already using into your Trello workflow
              or add a Power-Up to fine-tune your specific needs.
            </p>
            <button className="border border-blue-600 text-blue-600 rounded px-4 py-2 hover:bg-blue-50 transition">
              Browse Integrations
            </button>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <img
              src="main5.svg"
              alt="Automation Icon"
              className="mb-4 w-20 h-auto"
            />
            <h3 className="text-xl font-bold text-blue-900 mb-2">
              Butler Automation
            </h3>
            <p className="text-gray-700 mb-4">
              No-code automation is built into every Trello board. Focus on the
              work that matters most and let the robots do the rest.
            </p>
            <button className="border border-blue-600 text-blue-600 rounded px-4 py-2 hover:bg-blue-50 transition">
              Get to know Automation
            </button>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm sm:col-span-2 sm:justify-self-center lg:col-span-1 lg:justify-self-auto">
            <img
              src="main6.svg"
              alt="Mirroring Icon"
              className="mb-4 w-20 h-auto"
            />
            <h3 className="text-xl font-bold text-blue-900 mb-2">
              Card mirroring
            </h3>
            <p className="text-gray-700 mb-4">
              View all your to-dos from multiple boards in one place. Mirror a
              card to keep track of work wherever you need it!
            </p>
            <button className="border border-blue-600 text-blue-600 rounded px-4 py-2 hover:bg-blue-50 transition">
              Compare plans
            </button>
          </div>
        </div>
      </section>
      <section className="bg-white w-full px-5 md:px-20 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 bg-white shadow-xl rounded-xl overflow-hidden transition duration-500 ease-in-out">
            <div className="p-8 flex flex-col justify-between">
              <div>
                <p className="text-xl md:text-2xl font-medium text-blue-900 mb-6">
                  {testimonials[currentSlide].quote}
                </p>
                <div className="mt-10">
                  <hr className="h-px bg-gray-300 border-0 w-1/2 my-4" />

                  <p className="font-semibold text-sm text-blue-900">
                    {testimonials[currentSlide].name}
                  </p>
                  <p className="text-sm text-gray-600">
                    {testimonials[currentSlide].role}
                  </p>
                  {testimonials[currentSlide].logo && (
                    <img
                      src={testimonials[currentSlide].logo}
                      alt="Company Logo"
                      className="h-10 "
                    />
                  )}
                </div>
              </div>
              <div className="mt-8">
                <a
                  href={testimonials[currentSlide].link}
                  className="text-blue-700 underline text-sm"
                >
                  Read the story
                </a>
              </div>
            </div>

            <div className="bg-blue-900 text-white flex flex-col justify-center p-8">
              <h3 className="text-3xl font-bold leading-snug mb-4">
                74% of customers say Trello has improved communication with
                their co-workers and teams.
              </h3>
              <a href="#" className="underline text-white text-sm mt-4">
                Trello TechValidate Survey
              </a>
            </div>
          </div>

          <div className="flex justify-center items-center mt-6 space-x-4">
            {testimonials.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${
                  currentSlide === index ? "bg-blue-900" : "bg-gray-400"
                }`}
              ></div>
            ))}
          </div>

          <div className="flex justify-center items-center space-x-4 mt-4">
            <button
              onClick={() =>
                setCurrentSlide(
                  (prev) =>
                    (prev - 1 + testimonials.length) % testimonials.length
                )
              }
              className="h-auto w-15 text-2xl  text-blue-800 bg-gray-200 rounded-full hover:bg-gray-300"
            >
              ←
            </button>
            <button
              onClick={() =>
                setCurrentSlide((prev) => (prev + 1) % testimonials.length)
              }
              className="h-auto w-15 text-2xl text-blue-800 bg-gray-200 rounded-full hover:bg-gray-300"
            >
              →
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className="items-center text-black">
          <h1 className="text-xl text-center px-5">
            Join a community of millions of users globally who are using Trello
            to get more done.
          </h1>
        </div>

        <div className="flex gap-5 mx-auto w-full items-center justify-center">
          <img className="h-auto w-25" src="foot1.svg"></img>
          <img className="h-auto w-25" src="foot2.svg"></img>
          <img className="h-auto w-25" src="foot3.svg"></img>
          <img className="h-auto w-25" src="foot4.svg"></img>
          <img className="h-auto w-25" src="foot6.svg"></img>
          <img className="h-auto w-25" src="foot7.svg"></img>
        </div>
      </section>

      <section className="bg-[#F4F5F7] py-20 px-4 mt-10">
  <div className="max-w-2xl mx-auto text-center space-y-6 mt-">
    <h2 className="text-3xl md:text-4xl font-semibold text-[#172B4D]">
      Get started with Trello today
    </h2>

    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
      <input
        type="email"
        placeholder="Email"
        className="w-full md:w-1/2 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button className="bg-[#0052CC] hover:bg-[#0065FF] text-white font-medium px-6 py-3 rounded-md transition">
        Sign up – it’s free!
      </button>
    </div>

    <p className="text-sm text-[#172B4D]">
      By entering my email, I acknowledge the{" "}
      <a
        href="https://www.atlassian.com/legal/privacy-policy"
        className="text-[#0052CC] underline"
      >
        Atlassian Privacy Policy
      </a>
      .
    </p>
  </div>
</section>


      <footer className="bg-[#172B4D] text-white px-6 md:px-20 pt-16 pb-10">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
    <div className="col-span-2 lg:col-span-1 flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <img src="logofoot.svg" className=" rounded-sm"></img>
      </div>
      <a href="#" className="text-sm hover:underline">Log In</a>
    </div>

    <div>
      <h4 className="font-semibold mb-2">About Trello</h4>
      <p className="text-sm text-gray-300">What’s behind the boards.</p>
    </div>

    <div>
      <h4 className="font-semibold mb-2">Jobs</h4>
      <p className="text-sm text-gray-300">Learn about open roles on the Trello team.</p>
    </div>

    <div>
      <h4 className="font-semibold mb-2">Apps</h4>
      <p className="text-sm text-gray-300">Download the Trello App for your Desktop or Mobile devices.</p>
    </div>

    <div>
      <h4 className="font-semibold mb-2">Contact us</h4>
      <p className="text-sm text-gray-300">Need anything? Get in touch and we can help.</p>
    </div>
  </div>

  <hr className="my-8 border-gray-700" />

  <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
    <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-gray-300">
      <div className="flex items-center gap-2">
        <img src="globe.svg"></img>
        <span>English</span>
        <svg className="w-4 h-4 fill-gray-300" viewBox="0 0 20 20">
          <path d="M7 7l3 3 3-3" stroke="currentColor" strokeWidth="1.5" fill="none" />
        </svg>
      </div>
      <span>Privacy Policy</span>
      <span>Terms</span>
      <span>Copyright © 2024 Atlassian</span>
    </div>

    <div className="flex items-center gap-4">
      <img src="ig.svg" className="w-6 h-6 rounded-full"></img>
      <img src="facebook.svg" className="w-6 h-6  rounded-full"></img>
      <img src="linkid.svg" className="w-6 h-6  rounded-full"></img>
      <img src="twit.svg" className="w-6 h-6  rounded-full"></img>
      <img src="yt.svg" className="w-6 h-6  rounded-full"></img>
    </div>
  </div>
</footer>

    </div>
  );
}
