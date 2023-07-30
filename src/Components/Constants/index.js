import Heroimgage from "../../assets/hero.webp";
import logo from "../../assets/navlogo.png";
import desingpic from "../../assets/desingpic.webp";
import Sellingimg from "../../assets/Sell.jpg";
export { logo, Heroimgage };
import img1 from "../../assets/webimg1.jpg";
import img2 from "../../assets/webimg2.webp";
import img3 from "../../assets/webimg3.jpg";
import img4 from "../../assets/webimg4.jpg";
import img5 from "../../assets/webimg5.jpg";
import brand1 from "../../assets/brand1.webp";
import brand2 from "../../assets/brand2.webp";
import brand3 from "../../assets/brand3.webp";
import brand4 from "../../assets/brand4.webp";
import brand5 from "../../assets/brand5.webp";
import Pak from "../../assets/pakistan.png";
import Turkey from "../../assets/turkey.jpg";
import UAE from "../../assets/uae.webp";
import UK from "../../assets/uk.png";
import US from "../../assets/us.png";
import {
  AiFillFacebook,
  AiFillYoutube,
  AiFillInstagram,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";

export const navlinks = [
  {
    id: "1",
    title: "Home",
    path: "/home",
  },
  {
    id: "2",
    title: "About",
    path: "/about",
  },
  {
    id: "3",
    title: "Contact",
    path: "/contact",
  },
  {
    id: "4",
    title: "Work",
    path: "/work",
  },
];

const Herotext = {
  heading: "Everything for your bussiness",
  paragraph:
    "Help your customers find you with a home for your business online. Jimdo has all of the digital tools you need, including a customized, compliant website, an online store that's open 24/7, and more.",
  btn: "Start Free",
};

const websiteDesign = {
  heading: " without the effort",
  paragraph:
    "Design your website exactly how you want it—we provide everything you need to get started.",
  links: [
    "Make changes anytime",
    "Add your own images and text",
    "Free image library and photo editing",
    "Flexible Layout",
    "Mobile optimized for all screens",
  ],
  img: desingpic,
};

const Selling = {
  heading: "made simple",
  text: "Create an independent online store—hassle-free.",
  list: [
    "No transaction fees (your products, your profit)",
    "Offer shipping and local pickup options",
    "Book appointments right on your site",
    "Take payments via PayPal or Stripe",
    "Manage all your orders in one place",
    "Sell on Instagram and Facebook",
    "Boost your store with sales and discount",
  ],
  img: Sellingimg,
};

const Sites = {
  heading1: "worth seeing",
  heading2: "Make it",
  heading3: "With a free logo",
  paragraph1:
    "Real people. Real websites. From artists to chefs, freelancers to startups, check out what customers have already built with Jimdo.",
  paragraph2:
    "You're building your brand—now get a logo to match. Use our Logo Creator to design your own business logo and download all the files you need for digital and print. It's free to use.",
};

const Cauroselimages = [
  { image: img1 },
  { image: img2 },
  { image: img3 },
  { image: img4 },
  { image: img5 },
];

const brandpictures = [
  { brand: brand1 },
  { brand: brand2 },
  { brand: brand3 },
  { brand: brand4 },
  { brand: brand5 },
];

const Independent = {
  prg: " We're passionate about self-employed small business owners like you. Helping you harness your power and thrive online has been our mission from the beginning.",
};

const Links = [
  {
    link1: "Company Website",
    link2: "Local Business Website",
    link3: "Freelancer Website",
    link4: "Personal Website",
  },
  {
    link1: "Portfolio Website",
    link2: "Photography Website",
    link3: "Fitness Website",
    link4: "Music and Band Website",
  },
  {
    link1: "Restaurant Website",
    link2: "Wedding Website",
    link3: "Vacation Rental Website",
    link4: "Medical Website",
  },
  {
    link1: "Coaching Website",
    link2: "Real Estate Website",
    link3: "Architecture Website",
    link4: "Salon Website",
  },
  {
    link1: "Website Builder",
    link2: "Artist Website",
    link3: "Author Website",
    link4: "Teacher Website",
  },
];

const Icons = {
  f: AiFillFacebook,
  y: AiFillYoutube,
  i: AiFillInstagram,
  g: AiFillGithub,
  ggl: AiFillLinkedin,
};
const Footerlinks = [
  {
    link1: "Website",
    link2: "About Jimdo",
    link3: "Jimdo Blog",
  },
  {
    link1: "Online Store",
    link2: "Jobs",
    link3: "Inspiration",
  },
  {
    link1: "Domain",
    link2: "Affiliates",
    link3: "Help Center",
  },
  {
    link1: "Logo",
    link3: "Contact Support",
  },
];

const LastLinks = {
  link1: "Legal Notice",
  link2: "Terms of Service",
  link3: "Privacy Policy",
  link4: "Cookie Settings",
};

const Languages = [
  {
    lang: "اردو",
    flag: Pak,
  },
  {
    lang: "Arabic",
    flag: UAE,
  },
  {
    lang: "English UK",
    flag: UK,
  },
  {
    lang: "English US",
    flag: US,
  },
  {
    lang: "Turkish",
    flag: Turkey,
  },
];

export {
  Herotext,
  websiteDesign,
  Selling,
  Sites,
  Cauroselimages,
  brandpictures,
  Independent,
  Links,
  Icons,
  Footerlinks,
  LastLinks,
  Languages,
};
