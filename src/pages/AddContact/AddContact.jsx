import './AddContact.scss'
import { Formik, Form, Field, ErrorMessage} from 'formik'
import {contactValidationSchema} from '../../validation/validation'
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from "react-router";
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/actions';

export default function AddContact() {
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const initialValues = {
        id: uuidv4(),
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        avatar: '',
        gender: '',
        status: '',
        favorite: ''
    }
    const handleSubmin = (values) => {
        console.log(values);
        dispatch(addContact(values))
        navigate('/')
    }
    return(
        
        <div className="container">
            <div className="modal-content addPage shadow">
                <Formik initialValues={initialValues} validationSchema={contactValidationSchema} onSubmit={handleSubmin}>
                    {({isSubmitting}) => (
                      <Form>
                            <h1 className='text-center'>Add new contact</h1>
                            <hr />
                            <div className=' mb-4'>
                                <label htmlFor="firstName">First name</label>
                                <Field className='form-control fs-5' type='text' name='firstName' id='firstName'/>
                                <ErrorMessage name='firstName' component='p' className='text-danger position-absolute'/>
                            </div>
                            <div className='mb-4'>
                                <label htmlFor="lastName">Last name</label>
                                <Field className='form-control fs-5' type='text' name='lastName' id='lastName'/>
                                <ErrorMessage name='lastName' component='p' className='text-danger position-absolute'/>
                            </div>
                                <Field name="phone">
                                    {({ field, form }) => (
                                        <input
                                        {...field}
                                        type="text"
                                        className="form-control fs-5"
                                        id="phone"
                                        placeholder="+38-067-123-4567"
                                        onChange={(e) => {
                                            const raw = e.target.value.replace(/\D/g, '').slice(0, 12); // максимум 12 цифр
                                            let formatted = '';

                                            if (raw.length > 0) {
                                            formatted = '+' + raw.slice(0, 2);
                                            }
                                            if (raw.length > 2) {
                                            formatted += '-' + raw.slice(2, 5);
                                            }
                                            if (raw.length > 5) {
                                            formatted += '-' + raw.slice(5, 8);
                                            }
                                            if (raw.length > 8) {
                                            formatted += '-' + raw.slice(8, 12);
                                            }

                                            form.setFieldValue('phone', formatted);
                                        }}
                                        />
                                    )}
                                    </Field>
                            <div className='mb-4'> 
                                <label htmlFor="email">Email</label>
                                <Field className='form-control fs-5' type='email' name='email' id='email'/>
                                <ErrorMessage name='email' component='p' className='text-danger position-absolute'/>
                            </div>
                            <div className='mb-4'>
                                <label htmlFor="avatar">Avatar</label>
                                <Field className='form-control fs-5' type='number' max={99} min={0} name='avatar' id='avatar'/>
                                <ErrorMessage name='avatar' component='p' className='text-danger position-absolute'/>
                            </div>
                            <div className='mb-4'>
                                <label htmlFor="gender">Gender</label>
                                <Field className='form-control fs-5' as='select' name='gender'>
                                    <option value="">Choose gender</option>
                                    <option value="men">Men</option>
                                    <option value="women">Women</option>
                                </Field>
                                <ErrorMessage name='gender' component='p' className='text-danger position-absolute'/>
                            </div>
                            <div className='mb-4'>
                                <label htmlFor="status">Status</label>
                                <Field className='form-control fs-5' as='select' name='status'>
                                    <option value="">Choose status</option>
                                    <option value="work">Work</option>
                                    <option value="family">Family</option>
                                    <option value="friends">Friends</option>
                                    <option value="private">Private</option>
                                    <option value="others">Others</option>
                                </Field>
                                <ErrorMessage name='status' component='p' className='text-danger position-absolute'/>
                            </div>
                            <div className='mb-4'>
                                <label className='form-check-label fs-5' htmlFor="favorite">Favorite</label>
                                <Field className='form-check-input m-1 fs-4' type='checkbox' name='favorite'/>
                            </div>
                            <button type='submit' className='btn btn-primary btn-lg form-control' disabled={isSubmitting}>Add</button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}