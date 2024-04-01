import { Footer } from "flowbite-react";
import { NavLink } from "react-router-dom";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsLinkedin,
  BsGithub,
} from "react-icons/bs";

export default function FooterCom() {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <NavLink
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                Legends
              </span>
              Blog
            </NavLink>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://react-quiz-app-ruddy-six.vercel.app/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Legends Projects
                </Footer.Link>
                <Footer.Link
                  href="/about"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  About Us
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://github.com/lukmanuthmanabubakr"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Github
                </Footer.Link>
                <Footer.Link
                  href="https://www.linkedin.com/in/abubakr-lukman-uthman-51156a263/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  LinkedIn
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>

        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between" >
          <Footer.Copyright
            href="#"
            by="Legend's blog"
            year={new Date().getFullYear()}
          />

          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon
              href="https://www.facebook.com/ola%20dimeji"
              icon={BsFacebook}
              target="_blank"
            />
            <Footer.Icon
              href="http://www.instagram.com/dimeji_911"
              icon={BsInstagram}
              target="_blank"
            />
            <Footer.Icon
              href="https://www.x.com/dimeji_911"
              icon={BsTwitter}
              target="_blank"
            />
            <Footer.Icon
              href="https://www.linkedin.com/in/abubakr-lukman-uthman-51156a263/"
              icon={BsLinkedin}
              target="_blank"
            />
            <Footer.Icon
              href="https://github.com/lukmanuthmanabubakr"
              icon={BsGithub}
              target="_blank"
            />
          </div>
        </div>
      </div>
    </Footer>
  );
}
