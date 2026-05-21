import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Link from "next/link";
import SpecialCard from "./Project-card";

export default function Projects() {
  return (
    <div className="bg-[url('https://res.cloudinary.com/dzcwsxuvc/image/upload/v1623923461/green_au1be8.jpg')] bg-fixed bg-cover bg-center w-full md:h-full flex flex-col justify-start self-center pt-4 md:px-10 md:pt-20">
      <h1 className="text-5xl text-white md:text-center lg:w-3/5 lg:text-center lg:mx-auto">
        I have done some work but trust me, I am{" "}
        <span className="text-yellow-500">very hungry for knowledge!</span>
      </h1>

      <div className="flex flex-col my-20 font-sans md:flex-row text-white text-center justify-between lg:justify-around md:my-8 lg:my-36">
        <div className="flex flex-col mt-8 md:w-80 lg:mt-0">
          <Link href={"https://www.frontendmentor.io/"} passHref>
            <h1 className="font-bold tracking-wider text-2xl underline mb-8 md:text-3xl">
              Frontend Mentor
            </h1>
          </Link>
          <Carousel
            showArrows={true}
            infiniteLoop={true}
            autoPlay={false}
            showThumbs={false}
          >
            <Link
              href={"https://rephidimc.github.io/article-preview-component/"}
              passHref
            >
              <div>
                <SpecialCard
                  image={
                    "https://res.cloudinary.com/dzcwsxuvc/image/upload/v1623923437/1_ir97wc.jpg"
                  }
                  alt={"Frontend mentor article preview component"}
                  title="Article preview component"
                  note="I practiced my layout skills with this article preview component. I had loads of fun playing around with the animations for the sharing icons as well."
                >
                  <button className="bg-transparent hover:bg-green-900 font-semibold hover:text-white py-2 px-4 border border-green-300 hover:border-transparent rounded motion-safe:hover:scale-110 my-4">
                    HTML
                  </button>
                  <button className="bg-transparent hover:bg-blue-900 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded motion-safe:hover:scale-110 my-4">
                    CSS
                  </button>
                  <button className="bg-transparent hover:bg-red-900 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded motion-safe:hover:scale-110 my-4">
                    JavaScript
                  </button>
                </SpecialCard>
              </div>
            </Link>

            <Link
              href={"https://rephidimc.github.io/fylo-data-storage-component/"}
              passHref
            >
              <div>
                <SpecialCard
                  image={
                    "https://res.cloudinary.com/dzcwsxuvc/image/upload/v1623923369/2_ncvvb2.jpg"
                  }
                  alt={"Frontend mentor Fylo data component"}
                  title="Fylo data component"
                  note="I had a good time working on the CSS componentS, especially the slider."
                >
                  <button className="bg-transparent hover:bg-green-900 font-semibold hover:text-white py-2 px-4 border border-green-300 hover:border-transparent rounded motion-safe:hover:scale-110 my-4">
                    HTML
                  </button>
                  <button className="bg-transparent hover:bg-blue-900 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded motion-safe:hover:scale-110 my-4">
                    CSS
                  </button>
                </SpecialCard>
              </div>
            </Link>

            <Link
              href={
                "https://rephidimc.github.io/Coding-bootcamp-testimonials-slider-master/"
              }
              passHref
            >
              <div>
                <SpecialCard
                  image={
                    "https://res.cloudinary.com/dzcwsxuvc/image/upload/v1623923372/3_veqicm.jpg"
                  }
                  alt={"coding bootcamp testimonials slider"}
                  title="coding bootcamp testimonials slider"
                  note="This challenge was probably my first JavaScript task; you can imagine my rection when the slider came through. Hahahahahahaha."
                >
                  <button className="bg-transparent hover:bg-green-900 font-semibold hover:text-white py-2 px-4 border border-green-300 hover:border-transparent rounded motion-safe:hover:scale-110 my-4">
                    HTML
                  </button>
                  <button className="bg-transparent hover:bg-blue-900 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded motion-safe:hover:scale-110 my-4">
                    CSS
                  </button>
                  <button className="bg-transparent hover:bg-red-900 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded motion-safe:hover:scale-110 my-4">
                    JavaScript
                  </button>
                </SpecialCard>
              </div>
            </Link>

            <Link
              href={"https://rephidimc.github.io/four-card-feature-section/"}
              passHref
            >
              <div>
                <SpecialCard
                  image={
                    "https://res.cloudinary.com/dzcwsxuvc/image/upload/v1623923372/4_gzmp2z.jpg"
                  }
                  alt={"Four card feature"}
                  title="Four card feature"
                  note="Oh Brilliant! I loved every bit of this task; the font family, white space. I think if i go ahead, I'd end up mentioning every tiny bit of the project. That's how much I loved it."
                >
                  <button className="bg-transparent hover:bg-green-900 font-semibold hover:text-white py-2 px-4 border border-green-300 hover:border-transparent rounded motion-safe:hover:scale-110 my-4">
                    HTML
                  </button>
                  <button className="bg-transparent hover:bg-blue-900 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded motion-safe:hover:scale-110 my-4">
                    CSS
                  </button>
                </SpecialCard>
              </div>
            </Link>

            <Link
              href={"https://rephidimc.github.io/base-apparel-coming-soon/"}
              passHref
            >
              <div>
                <SpecialCard
                  image={
                    "https://res.cloudinary.com/dzcwsxuvc/image/upload/v1623923377/5_rio2vq.jpg"
                  }
                  alt={"Base Apparel coming soon"}
                  title="Base Apparel coming soon"
                  note="My first form validation task, I remember. Not too bad if I'm being honest. I love the hover on the button and writing javascript to show and hide items depending on the validation. Great stuff."
                >
                  <button className="bg-transparent hover:bg-green-900 font-semibold hover:text-white py-2 px-4 border border-green-300 hover:border-transparent rounded motion-safe:hover:scale-110 my-4">
                    HTML
                  </button>
                  <button className="bg-transparent hover:bg-blue-900 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded motion-safe:hover:scale-110 my-4">
                    CSS
                  </button>
                  <button className="bg-transparent hover:bg-red-900 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded motion-safe:hover:scale-110 my-4">
                    JavaScript
                  </button>
                </SpecialCard>
              </div>
            </Link>

            <Link
              href={
                "https://rephidimc.github.io/intro-component-with-signup-form/"
              }
              passHref
            >
              <div>
                <SpecialCard
                  image={
                    "https://res.cloudinary.com/dzcwsxuvc/image/upload/v1623923389/6_pjf6qr.jpg"
                  }
                  alt={"Intro component with sign-up form"}
                  title="Intro component with sign-up form"
                  note="Phew! This was so so so tough and fun. Having to cater for every bit of possibility made it routinely at some point. But Hey! I learnt stuff."
                >
                  <button className="bg-transparent hover:bg-green-900 font-semibold hover:text-white py-2 px-4 border border-green-300 hover:border-transparent rounded motion-safe:hover:scale-110 my-4">
                    HTML
                  </button>
                  <button className="bg-transparent hover:bg-blue-900 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded motion-safe:hover:scale-110 my-4">
                    CSS
                  </button>
                  <button className="bg-transparent hover:bg-red-900 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded motion-safe:hover:scale-110 my-4">
                    JavaScript
                  </button>
                </SpecialCard>
              </div>
            </Link>

            <Link
              href={"https://rephidimc.github.io/single-price-grid-component/"}
              passHref
            >
              <div>
                <SpecialCard
                  image={
                    "https://res.cloudinary.com/dzcwsxuvc/image/upload/v1623923375/7_hvqopu.jpg"
                  }
                  alt={"Single price grid component"}
                  title="Single price grid component"
                  note="Probably the easiest task I've completed till date. I love the font family used alot."
                >
                  <button className="bg-transparent hover:bg-green-900 font-semibold hover:text-white py-2 px-4 border border-green-300 hover:border-transparent rounded motion-safe:hover:scale-110 my-4">
                    HTML
                  </button>
                  <button className="bg-transparent hover:bg-blue-900 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded motion-safe:hover:scale-110 my-4">
                    CSS
                  </button>
                </SpecialCard>
              </div>
            </Link>

            <Link
              href={"https://rephidimc.github.io/ping-coming-soon-page/"}
              passHref
            >
              <div>
                <SpecialCard
                  image={
                    "https://res.cloudinary.com/dzcwsxuvc/image/upload/v1623923380/8_pqqhg3.jpg"
                  }
                  alt={"Ping coming soon page"}
                  title="Ping coming soon page"
                  note="One interesting task. It felt good implementing field validation once again."
                >
                  <button className="bg-transparent hover:bg-green-900 font-semibold hover:text-white py-2 px-4 border border-green-300 hover:border-transparent rounded motion-safe:hover:scale-110 my-4">
                    HTML
                  </button>
                  <button className="bg-transparent hover:bg-blue-900 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded motion-safe:hover:scale-110 my-4">
                    CSS
                  </button>
                  <button className="bg-transparent hover:bg-red-900 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded motion-safe:hover:scale-110 my-4">
                    JavaScript
                  </button>
                </SpecialCard>
              </div>
            </Link>

            <Link
              href={
                "https://rephidimc.github.io/huddle-landing-page-with-alternating-feature-blocks/"
              }
              passHref
            >
              <div>
                <SpecialCard
                  image={
                    "https://res.cloudinary.com/dzcwsxuvc/image/upload/v1623923377/9_ucvulg.jpg"
                  }
                  alt={"Huddle landing page with alternating feature blocks"}
                  title="Huddle landing page with alternating feature blocks"
                  note="This challenge was good for sharpening my layout skills."
                >
                  <button className="bg-transparent hover:bg-green-900 font-semibold hover:text-white py-2 px-4 border border-green-300 hover:border-transparent rounded motion-safe:hover:scale-110 my-4">
                    HTML
                  </button>
                  <button className="bg-transparent hover:bg-blue-900 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded motion-safe:hover:scale-110 my-4">
                    CSS
                  </button>
                </SpecialCard>
              </div>
            </Link>

            <Link
              href={
                "https://rephidimc.github.io/huddle-landing-page-with-single-introductory-section/"
              }
              passHref
            >
              <div>
                <SpecialCard
                  image={
                    "https://res.cloudinary.com/dzcwsxuvc/image/upload/v1623923398/10_rpwctq.jpg"
                  }
                  alt={"Huddle landing page with a single introductory section"}
                  title="Huddle landing page with a single introductory section"
                  note="Simple two-column layout. Great!"
                >
                  <button className="bg-transparent hover:bg-green-900 font-semibold hover:text-white py-2 px-4 border border-green-300 hover:border-transparent rounded motion-safe:hover:scale-110 my-4">
                    HTML
                  </button>
                  <button className="bg-transparent hover:bg-blue-900 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded motion-safe:hover:scale-110 my-4">
                    CSS
                  </button>
                </SpecialCard>
              </div>
            </Link>

            <Link
              href={
                "https://rephidimc.github.io/fylo-landing-page-with-two-column-layout/"
              }
              passHref
            >
              <div>
                <SpecialCard
                  image={
                    "https://res.cloudinary.com/dzcwsxuvc/image/upload/v1623923414/11_uiw0qh.jpg"
                  }
                  alt={"Fylo landing page with two column layout"}
                  title="Fylo landing page with two column layout"
                  note="Seeing this again triggers memories of how well I really enjoyed working on it. The designer should be praised for the color progression."
                >
                  <button className="bg-transparent hover:bg-green-900 font-semibold hover:text-white py-2 px-4 border border-green-300 hover:border-transparent rounded motion-safe:hover:scale-110 my-4">
                    HTML
                  </button>
                  <button className="bg-transparent hover:bg-blue-900 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded motion-safe:hover:scale-110 my-4">
                    CSS
                  </button>
                </SpecialCard>
              </div>
            </Link>

            <Link
              href={
                "https://rephidimc.github.io/social-media-dashboard-with-theme-switch/"
              }
              passHref
            >
              <div>
                <SpecialCard
                  image={
                    "https://res.cloudinary.com/dzcwsxuvc/image/upload/v1623923372/12_wchjki.jpg"
                  }
                  alt={"Social media dashboard with theme switcher"}
                  title="Social media dashboard with theme switcher"
                  note="Booooom! I saved best for last. Implementing dark mode was the real task. It was grueling while working, but in the end, it was worth every minute."
                >
                  <button className="bg-transparent hover:bg-green-900 font-semibold hover:text-white py-2 px-4 border border-green-300 hover:border-transparent rounded motion-safe:hover:scale-110 my-4">
                    HTML
                  </button>
                  <button className="bg-transparent hover:bg-blue-900 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded motion-safe:hover:scale-110 my-4">
                    CSS
                  </button>
                  <button className="bg-transparent hover:bg-red-900 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded motion-safe:hover:scale-110 my-4">
                    JavaScript
                  </button>
                </SpecialCard>
              </div>
            </Link>
          </Carousel>
        </div>

        <div className="flex flex-col mt-12 md:w-80 md:mt-8 lg:mt-0">
          <Link
            href={
              "https://www.udemy.com/course/the-complete-web-development-bootcamp/"
            }
            passHref
          >
            <h1 className="font-bold tracking-wider text-2xl underline md:text-3xl">
              Udemy
            </h1>
          </Link>
          <div className="flex flex-col mt-8">
            {/* <Carousel
              showArrows={true}
              infiniteLoop={true}
              autoPlay={false}
              showThumbs={false}
            > */}
            <Link href={"https://thawing-taiga-40947.herokuapp.com/"} passHref>
              <div>
                <SpecialCard
                  image={
                    "https://res.cloudinary.com/dzcwsxuvc/image/upload/v1623923385/1_frlghq.jpg"
                  }
                  alt={"to-do-list screenshot"}
                  title="Daily to-do List"
                  note="I enjoyed this task, as I had to incorporate a whole lot of frontend ideas and frameworks, alongside a bit of backend. You want a personalized to-do list? jump right in and create yours."
                >
                  <button className="bg-transparent hover:bg-green-900 font-semibold hover:text-white py-2 px-4 border border-green-300 hover:border-transparent rounded motion-safe:hover:scale-110 my-4">
                    HTML
                  </button>
                  <button className="bg-transparent hover:bg-blue-900 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded motion-safe:hover:scale-110 my-4">
                    CSS
                  </button>
                  <button className="bg-transparent hover:bg-red-900 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded motion-safe:hover:scale-110 my-4">
                    JavaScript
                  </button>
                  <button className="bg-transparent hover:bg-yellow-600 font-semibold hover:text-white py-2 px-4 border border-yellow-500 hover:border-transparent rounded motion-safe:hover:scale-110 my-4">
                    EJS
                  </button>
                </SpecialCard>
              </div>
            </Link>

            {/* </Carousel> */}
          </div>
        </div>
      </div>
    </div>
  );
}
