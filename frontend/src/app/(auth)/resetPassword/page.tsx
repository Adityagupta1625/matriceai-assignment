import { Metadata } from 'next';
import ResetPasswordForm from '@/components/auth/resetPassword';

export const metadata: Metadata = {
  title: 'Reset Password',
};

const Page = async () => {
  return <ResetPasswordForm />;
};

export default Page;