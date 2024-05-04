import { Metadata } from 'next';
import RegisterForm from '@/components/auth/register';

export const metadata: Metadata = {
  title: 'Register',
  description: 'Register to your account',
};

const Page = async () => {
  return <RegisterForm />;
};

export default Page;