import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { ContactPage, contactPageAction } from './ContactPage';
import { ThankYouPage } from './ThankYouPage';

const myRouterTree = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="contact" />, //Navigate is like a Hashbang redirect. It will redirect to the specified path when the user visits the root path.
  },
  {
    path: '/contact',
    element: <ContactPage />,
    action: contactPageAction,

    //form data after collecting goes to the action callback, we can return a redirect response to navigate to the thank you page. We can also pass the name of the user as a parameter in the URL to display it on the thank you page.
  },
  {
    path: '/thank-you/:name',
    element: <ThankYouPage />,
  },
]);

export function App() {
  return <RouterProvider router={myRouterTree} />;
}
