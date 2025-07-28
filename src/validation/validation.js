import * as Yup from 'yup'

export const contactValidationSchema = Yup.object().shape({
    firstName: Yup.string().required('First Name is required').min(2, 'Min 2 symbols').max(16, 'Max 16 symbols').trim(),
    lastName: Yup.string().required('Last Name is required').min(2, 'Min 2 symbols').max(16, 'Max 16 symbols').trim(),
    phone: Yup.string().matches(/^\+\d{3}-\d{2}-\d{3}-\d{4}$/, 'Phone must be in format +XXX-XX-XXX-XXXX').required('Phone number is required'),
    email: Yup.string().email('Invalid email').required('Email is required').trim(),
    avatar: Yup.string().required('Avatar is required'),
    gender: Yup.string().oneOf(['men','women'], 'Invalid gender').required('Gender is required'),
    status: Yup.string().required('Status is required'),
    favorite: Yup.boolean()
})