import LoginForm from "@/components/auth/login";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login',
  description: 'Login to your account',
};

const Page = async () => {
  return <LoginForm />;
};

export default Page;