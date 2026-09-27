import ServiceDetail from '@/components/ServiceDetail';
import { pageMetadata } from '@/lib/metadata';
export const metadata = pageMetadata('Website design, development & hosting', 'Website design, development and hosting from Coaltech. Plan a new business website, redesign or web project.', '/services/web-development');
export default function ServicePage() { return <ServiceDetail type="web" />; }

