import api from '@/lib/common/api';

export const subscribe = async (email) =>
  await api(
    `${process.env.NEXT_PUBLIC_SUBSCRIPTION_API_URL}/${process.env.NEXT_PUBLIC_SUBSCRIPTION_FORM_ID}/subscribe`,
    {
      body: {
        api_key: process.env.NEXT_PUBLIC_SUBSCRIPTION_API_KEY,
        email,
      },
      method: 'POST',
    }
  );
