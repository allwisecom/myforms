import { useParams } from 'react-router-dom';

export function ThankYouPage() {
  const { name } = useParams<{ name: string }>();
  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold underline mb-3">Thank you, {name}!</h2>
      <p className="mb-3">We'll get back to you as soon as we can.</p>
    </div>
  );
}
