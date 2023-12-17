import corpcommentImg from '@/public/corpcomment.png';
import rmtdevImg from '@/public/rmtdev.png';
import wordanalyticsImg from '@/public/wordanalytics.png';
import {
  BsDiscord,
  BsLinkedin,
  BsTelegram,
  BsThreads,
  BsThreadsFill,
  BsTiktok,
} from 'react-icons/bs';
import {
  FaGithubSquare,
  FaFacebook,
  FaInstagramSquare,
  FaSteam,
  FaReddit,
  FaPinterest,
  FaTumblrSquare,
  FaWhatsappSquare,
  FaSnapchat,
} from 'react-icons/fa';
import { RiTwitterXFill } from 'react-icons/ri';
export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Reviews',
    hash: '#reviews',
  },
  {
    name: 'SocialHub',
    hash: '#socialHub',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const reviewsData = [
  {
    name: 'Sarah Thompson',
    job: 'Marketing Manager',
    review:
      "Working with John Doe was a game-changer for our e-commerce site. His attention to detail and creative solutions elevated our user experience. John Doe's dedication and timely communication made the entire process smooth. Highly recommend!",
  },
  {
    name: 'Alex Rodriguez',
    job: 'CEO, Tech Innovations Inc.',
    review:
      'Exceptional developer! John Doe transformed our outdated website into a modern, user-friendly masterpiece. His problem-solving skills and commitment to quality stood out. Our online presence has never been stronger. Thanks, John Doe!',
  },
  {
    name: ' Emily Chen',
    job: 'Product Manager',
    review:
      "Kudos to John Doe for his outstanding work on our mobile app. His coding expertise and innovative approach greatly improved functionality. John Doe is not just a developer; he's a strategic partner in our tech journey.",
  },
  {
    name: ' James Carter',
    job: 'IT Director, Global Solutions',
    review:
      'John Doe exceeded our expectations in every way. His technical proficiency and ability to grasp our vision were impressive. The website he built is not just functional but also aesthetically pleasing. Truly a top-notch developer!',
  },
  {
    name: 'Grace Kim',
    job: 'Creative Director',
    review:
      'John Doe is a true professional. His collaborative nature and willingness to go the extra mile made our project enjoyable. He took our ideas and turned them into a visually stunning and highly functional website. 10/10 recommend!',
  },
  {
    name: 'Maria Rodriguez',
    job: 'Business Owner, Rodriguez Enterprises',
    review:
      "Working with John Doe was a pleasure. His expertise in web development shone through as he revamped our site, delivering sleek design and seamless functionality. John Doe's commitment to deadlines and open communication made the entire process stress-free. Highly recommended for anyone seeking a skilled and reliable developer.",
  },
] as const;

export const projectsData = [
  {
    title: 'EcoTracker App',
    description:
      'Developed the EcoTracker App, an intuitive platform for users to log and earn points for eco-friendly habits. Features a competitive leaderboard and impactful data visualizations, fostering a community dedicated to sustainability.',
    tags: ['React', 'Next.js', 'MongoDB', 'Tailwind', 'Prisma'],
    imageUrl: corpcommentImg,
  },
  {
    title: 'Recipe Explorer Website',
    description:
      'Crafted a dynamic Recipe Explorer Website for food enthusiasts. Users can explore, share. The platform encourages user contributions, building connections within the culinary world.',
    tags: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Redux'],
    imageUrl: rmtdevImg,
  },
  {
    title: 'Word Analytics',
    description:
      'A public web app for quick analytics on text. It shows word count, character count and social media post limits.',
    tags: ['React', 'Next.js', 'SQL', 'Tailwind', 'Framer'],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const socialData = [
  FaInstagramSquare,
  RiTwitterXFill,
  FaGithubSquare,
  FaFacebook,
  BsLinkedin,
  BsDiscord,
  BsThreadsFill,
  FaSteam,
  FaReddit,
  FaPinterest,
  FaTumblrSquare,
  FaWhatsappSquare,
  FaSnapchat,
  BsTelegram,
  BsTiktok,
] as const;
