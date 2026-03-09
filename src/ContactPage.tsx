import { FormEvent } from 'react';
import { Form } from 'react-router-dom';

// type Contact = {
//   name: string;
//   email: string;
//   reason: string;
//   notes: string;
// };

export function ContactPage() {
  const fieldStyle = 'flex flex-col mb-2';

  //useState is not being used since on every change we have component re render
  //  const [contact, setContact] = useState<Contact>({
  //     name: '',
  //     email: '',
  //     reason: '',
  //     notes: '',
  //   });

  //   function handleSubmit(e: FormEvent<HTMLFormElement>) {
  //     e.preventDefault();
  //     const formData = new FormData(e.currentTarget);
  //     //const contact = Object.fromEntries(formData.entries());
  //     //we can also use formData.get('name') to get the value of name field and so on for other fields
  //     const conactDetails = {
  //       name: formData.get('name'),
  //       email: formData.get('email'),
  //       reason: formData.get('reason'),
  //       notes: formData.get('notes'),
  //     };
  //     //console.log('form submit callback invoked. Contact details: ', contact);
  //     console.log('form submit callback invoked. Contact details: ', conactDetails);
  //   }

  //<form onSubmit={handleSubmit}>

  return (
    <div className="flex flex-col py-10 max-w-md mx-auto">
      <h2 className="text-3xl font-bold underline mb-3">Contact Us</h2>
      <p className="mb-3">If you enter your details we'll get back to you as soon as we can.</p>

      <Form method="post">
        <div className={fieldStyle}>
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            id="name"
            name="name"
            //onChange={(e) => setContact({ ...contact, name: e.target.value })}
          />
        </div>
        <div className={fieldStyle}>
          <label htmlFor="email">Your email address</label>
          <input
            type="email"
            id="email"
            name="email"
            //onChange={(e) => setContact({ ...contact, email: e.target.value })}
          />
        </div>
        <div className={fieldStyle}>
          <label htmlFor="reason">Reason you need to contact us</label>
          <select id="reason" name="reason">
            <option value=""></option>
            <option value="Support">Support</option>
            <option value="Feedback">Feedback</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className={fieldStyle}>
          <label htmlFor="notes">Additional notes</label>
          <textarea
            id="notes"
            name="notes"
            //name property we use to collect the data by form element in handleSubmit callback
            //onChange={(e) => setContact({ ...contact, notes: e.target.value })}
          />
        </div>
        <div>
          <button type="submit" className="mt-2 h-10 px-6 font-semibold bg-black text-white">
            Submit
          </button>
        </div>
      </Form>
    </div>
  );
}

export async function contactPageAction({ request }: { request: Request }) {
  const formData = await request.formData();

  const contact = {
    name: formData.get('name'),
    email: formData.get('email'),
    reason: formData.get('reason'),
    notes: formData.get('notes'),
  };

  console.log('contact page action invoked. Contact details: ', contact);

  return {
    redirect: `/thank-you/${contact.name}`,
  };
}
