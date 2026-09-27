import ServiceDetail from '@/components/ServiceDetail';
import { pageMetadata } from '@/lib/metadata';
export const metadata = pageMetadata('AI graphic design, videos & reels', 'AI-assisted graphic design, videos and reels from Coaltech. Creative for product stories, launches and social posts.', '/services/ai-marketing');
export default function ServicePage() { return <ServiceDetail type="ai" />; }

