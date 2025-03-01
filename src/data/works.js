import { imageKit } from "../lib/utils";
export const works = [
  "PHOTOGRAPHY",
  "VIDEO EDITOR",
  "UI & UX DESIGNER",
  "TUMBNAIL EDITOR",
  "Landscape Photography",
  "PRODUCT Photography",
  "Portrait  Photography",
];

export const footerNavLinks = [
  {
    label: "Home",
    links: [
      {
        label: "About Me",
        href: "/about",
      },
      {
        label: "My Works",
        href: "/portfolio",
      },
      {
        label: "Testimonials",
        href: "#",
      },
    ],
  },
  // removed this unwanted section in footerNavigation links
  // {
  //     label: "Portfolio",
  //     links: [
  //         {
  //             label:"Product",
  //             href: "#"
  //         },
  //         {
  //             label:"Portrait",
  //             href: "#"
  //         },
  //         {
  //             label:"Landscape",
  //             href: "#"
  //         }
  //     ]
  // },
  {
    label: "Services",
    links: [
      {
        label: "Photography",
        href: "#",
      },
      {
        label: "Video Editing",
        href: "#",
      },
      {
        label: "UI & UX Design",
        href: "#",
      },
    ],
  },
];
// add social links
export const socialLinks = {
  linkedIn:
    "https://www.linkedin.com/in/chandra-sekhar-kilaparthi-b894a024a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  twitter: "https://x.com/chandu9k?s=21",
  instagram:
    "https://www.instagram.com/chandu.kilaparthi?igsh=MXRrNXNvemhxNGxuOQ%3D%3D&utm_source=qr",
};

export const HeroPageImages = [
  {
    id: 1,
    src: `${imageKit.endpoint}/cp/HeroImage1.JPG`,
  },
  {
    id: 2,
    src: `${imageKit.endpoint}/cp/HeroImage2.JPG`,
  },
  {
    id: 3,
    src: `${imageKit.endpoint}/cp/HeroImage3.JPG`,
  },
  {
    id: 4,
    src: `${imageKit.endpoint}/cp/HeroImage4.jpg`,
  },
  {
    id: 5,
    src: `${imageKit.endpoint}/cp/HeroImage5.JPG`,
  },
  {
    id: 6,
    src: `${imageKit.endpoint}/cp/HeroImage6.JPG`,
  },
];
