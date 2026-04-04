import DashboardClient from './DashboardClient';

export const metadata = {
  title: 'Dashboard',
  alternates: {
    canonical: 'https://www.codverse.in/dashboard',
  },
};

export default function DashboardPage() {
  return <DashboardClient />;
}
