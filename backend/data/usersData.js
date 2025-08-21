
/************************* imports *************************/
import bcrypt from 'bcryptjs';

const usersData = [
   {
      username: 'John Doe',
      email: 'johndoe@gmail.com',
      password: bcrypt.hashSync('Aa!2qwer', 10),
      role: 'admin',
   },
   {
      username: 'William Clark',
      email: 'williamclark@gmail.com',
      password: bcrypt.hashSync('Aa!2qwer', 10),
      role: 'user'
   },
   {
      username: 'James Doe',
      email: 'jamesdoe@gmail.com',
      password: bcrypt.hashSync('Aa!2qwer', 10),
      role: 'user'
   },
   {
      username: 'Benjamin Taylor',
      email: 'benjamintaylor@gmail.com',
      password: bcrypt.hashSync('Aa!2qwer', 10),
      role: 'user'
   },
   {
      username: 'Lucas Moore',
      email: 'lucasmoore@gmail.com',
      password: bcrypt.hashSync('Aa!2qwer', 10),
      role: 'user'
   },
   {
      username: 'Henry Martin',
      email: 'henrymartin@gmail.com',
      password: bcrypt.hashSync('Aa!2qwer', 10),
      role: 'user'
   },
   {
      username: 'Alex Taylor',
      email: 'alextaylor@gmail.com',
      password: bcrypt.hashSync('Aa!2qwer', 10),
      role: 'user'
   },
   {
      username: 'Mary Jane',
      email: 'maryjane@gmail.com',
      password: bcrypt.hashSync('Aa!2qwer', 10),
      role: 'user'
   },
   {
      username: 'Sophia Davis',
      email: 'sophiadavis@gmail.com',
      password: bcrypt.hashSync('Aa!2qwer', 10),
      role: 'user'
   },
   {
      username: 'Jane Doe',
      email: 'janedoe@gmail.com',
      password: bcrypt.hashSync('Aa!2qwer', 10),
      role: 'user'
   },
   {
      username: 'Isabella Brown',
      email: 'isabellabrown@gmail.com',
      password: bcrypt.hashSync('Aa!2qwer', 10),
      role: 'user'
   },
   {
      username: 'Ava Wilson',
      email: 'avawilson@gmail.com',
      password: bcrypt.hashSync('Aa!2qwer', 10),
      role: 'user'
   },
   {
      username: 'Amelia Garcia',
      email: 'ameliagarcia@gmail.com',
      password: bcrypt.hashSync('Aa!2qwer', 10),
      role: 'user'
   },

]

export default usersData;