// aboutTabs.config.ts
import { StaticImageData } from 'next/image';
import aboutUsPng from '../../public/aboutus.jpg'
import ourMission from '../../public/ourMission.png'

export interface AboutTabItem
{
    id: string;
    title: string;
    description: string[];
    image: StaticImageData | string;
}

export const aboutTabs: AboutTabItem[] = [
    {
        id: 'about',
        title: 'About Us',
        description: ["Raibo Infotech is one of the fastest-growing AI startups, dedicated to building the future through intelligent technology and innovation. Our team is passionate about pushing the boundaries of what's possible with Artificial Intelligence, robotics, and AI-powered communication. We are focused on delivering high-impact solutions across multiple domains from AI calling systems to game development with AI simulation.",
            "At Raibo Infotech, we are not just working on one thing we are building a smarter future across many areas of AI. Our goal is to develop technologies that are practical, scalable, and transformative for businesses and individuals alike."
        ],

        image: aboutUsPng,
    },
    {
        id: 'vision',
        title: 'Our Vision',
        description:
            ['We envision a future where technology seamlessly integrates into human life, enabling smarter businesses, stronger communication, better education, and a more connected society.',
                'Our goal is to be one of the most trusted AI and software companies globally, known for our ethical practices, futuristic vision, and innovative spirit.'
            ],
        image: ourMission,
    },
    {
        id: 'mission',
        title: 'Our Mission',
        description: ['Our mission is simple but ambitious: to simplify complex processes using artificial intelligence and automation, and make advanced technology accessible to everyone — startups, enterprises, and individuals alike.',
            'We are committed to delivering reliable, secure, and impactful digital solutions that help our clients stay ahead in a fast-changing world.'
        ],
        image: '',
    },
];
