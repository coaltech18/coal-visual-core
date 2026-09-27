import PageHero from '@/components/PageHero';
import ProjectWall from '@/components/ProjectWall';
import WebsiteIndex from '@/components/WebsiteIndex';
import SiteLayout from '@/components/SiteLayout';
import { pageMetadata } from '@/lib/metadata';
export const metadata = pageMetadata('Selected work', 'Explore Coaltech website work across hospitality, property, events, community, commerce and software.', '/work');
export default function WorkPage() { return <SiteLayout><PageHero label="Selected work" title={<>Different briefs.<br />A closer look.</>} intro="Websites for businesses, venues, products and communities. Explore selected project stories and more live websites." /><section className="work-section work-section--page" aria-label="Projects"><ProjectWall headingLevel="h2" /></section><WebsiteIndex /></SiteLayout>; }

