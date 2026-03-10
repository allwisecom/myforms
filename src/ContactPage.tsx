import { FormEvent } from 'react';
import { ActionFunctionArgs, Form, redirect, useNavigate } from 'react-router-dom';
import { appendErrors, FieldError, useForm } from 'react-hook-form';
import { get } from 'http';
import { ValidationError } from './ValidationError';

type Contact = {
  name: string;
  email: string;
  reason: string;
  notes: string;
};
//hook forms wont work on <Form> element since it is not a regular form element, it is a wrapper around the form element provided by react-router-dom to handle form submissions and navigation. We can use the useForm hook to manage the form state and validation, but we need to use the register function to register the form fields and handleSubmit function to handle the form submission.
export function ContactPage() {
  const fieldStyle = 'flex flex-col mb-2';

  const {
    register,
    handleSubmit,
    formState: { errors }, //isloading, isDirty, isValid, touchedFields, dirtyFields
  } = useForm<Contact>({ mode: 'onBlur', reValidateMode: 'onBlur' }); // if you go the form and revisit the form the validation messages shows up.

  const navigate = useNavigate();

  //useState is not being used since on every change we have component re render
  //  const [contact, setContact] = useState<Contact>({
  //     name: '',
  //     email: '',
  //     reason: '',
  //     notes: '',
  //   });

  function handleFormSubmit(contact: Contact) {
    console.log('form submit callback invoked. Contact details: ', contact);
    navigate(`/thank-you/${contact.name}`); //hashbang - state change - hook

    //return redirect(`/thank-you/${contact.name}`); //redirect works like hashbang
  }

  function getEditorStyle(fieldError: FieldError | undefined) {
    return fieldError ? 'border-red-500' : '';
  }
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
  // <Form method="post">
  return (
    <div className="flex flex-col py-10 max-w-md mx-auto">
      <h2 className="text-3xl font-bold underline mb-3">Contact Us</h2>
      <p className="mb-3">If you enter your details we'll get back to you as soon as we can.</p>

      <form noValidate onSubmit={handleSubmit(handleFormSubmit)}>
        <div className={fieldStyle}>
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            id="name"
            //name="name"
            {...register('name', {
              required: 'Name is required',
              minLength: { value: 2, message: 'Name must be at least 2 characters' },
            })}
            className={getEditorStyle(errors.name)}
            //required
            //onChange={(e) => setContact({ ...contact, name: e.target.value })}
          />
          <ValidationError fieldError={errors.name} />
        </div>
        <div className={fieldStyle}>
          <label htmlFor="email">Your email address</label>
          <input
            type="email"
            id="email"
            //name="email"
            {...register('email')}
            //required
            pattern='\S+@S+\.\S+"'
            className={getEditorStyle(errors.email)}
            //onChange={(e) => setContact({ ...contact, email: e.target.value })}
          />
          <ValidationError fieldError={errors.email} />
        </div>
        <div className={fieldStyle}>
          <label htmlFor="reason">Reason you need to contact us</label>
          <select id="reason" {...register('reason')} className={getEditorStyle(errors.reason)}>
            <option value=""></option>
            <option value="Support">Support</option>
            <option value="Feedback">Feedback</option>
            <option value="Other">Other</option>
          </select>
          <ValidationError fieldError={errors.reason} />
        </div>
        <div className={fieldStyle}>
          <label htmlFor="notes">Additional notes</label>
          <textarea
            id="notes"
            //name="notes"
            {...register('notes')}
            className={getEditorStyle(errors.notes)}
            //name property we use to collect the data by form element in handleSubmit callback
            //onChange={(e) => setContact({ ...contact, notes: e.target.value })}
          />
        </div>
        <div>
          <button type="submit" className="mt-2 h-10 px-6 font-semibold bg-black text-white">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

//errors object

// errors{
//   name: {
//     type: 'required',
//     message: 'Name is required'
//   }
// }

// export async function contactPageAction({ request }: ActionFunctionArgs) {
//   const formData = await request.formData(); // .then() - waits foor promise to resolve.

//   const contact = {
//     name: formData.get('name'),
//     email: formData.get('email'),
//     reason: formData.get('reason'),
//     notes: formData.get('notes'),
//   };

//   console.log('contact page action invoked. Contact details: ', contact);

//   return redirect(`/thank-you/${formData.get('name')}`); //redirect works like hashbang
// }
