import z from 'zod';

const createUser = z.object({
  userName: z.string({ required_error: 'Name required' }),
  email: z.string({ required_error: 'Email required' }),
});


export const UserValidation = {
    createUser
}