import InstaIcon from '@/assets/icons/inta.webp'
import YoutubeIcon from '@/assets/icons/youtube.webp'
import TelegramIcon from '@/assets/icons/telegram.webp'
import LinkedInIcon from '@/assets/icons/Linkedin.webp'
import TwitterIcon from '@/assets/icons/Twitter.webp'
import FBIcon from '@/assets/icons/fb.webp'


export enum App_Envs_Enum {
    'Production' = 'production',
    'Staging' = 'staging',
    'Development' = 'development',
}

export const soicalMediaData = [
    { url: 'https://www.facebook.com/physicswallah', image: `${FBIcon.src}` },
    {
        url: 'https://www.instagram.com/physicswallah/',
        image: `${InstaIcon.src}`,
    },
    {
        url: 'https://www.youtube.com/c/PhysicsWallah',
        image: `${YoutubeIcon.src}`,
    },
    {
        url: 'https://www.linkedin.com/company/physicswallah/',
        image: `${LinkedInIcon.src}`,
    },
    {
        url: 'https://twitter.com/physicswallahap?lang=en',
        image: `${TwitterIcon.src}`,
    },
    {
        url: 'https://t.me/Physics_Wallah_Official_Channel',
        image: `${TelegramIcon.src}`,
    },
];
