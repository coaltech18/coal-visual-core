import ServiceDetail from '@/components/ServiceDetail';
import { pageMetadata } from '@/lib/metadata';
export const metadata = pageMetadata('Web applications & interface development', 'Web interfaces, dashboards and product development with Coaltech.', '/services/app-development');
export default function ServicePage() { return <ServiceDetail type="product" />; }

