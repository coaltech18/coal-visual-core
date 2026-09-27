import ServiceDetail from '@/components/ServiceDetail';
import { pageMetadata } from '@/lib/metadata';
export const metadata = pageMetadata('Social media creative', 'Graphics, videos and reels shaped around your message and audience.', '/services/social-media-marketing');
export default function ServicePage() { return <ServiceDetail type="social" />; }

