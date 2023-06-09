import {useState } from 'react'
const UserForm = ({onUserAdded}) => {
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submit triggered');
    console.log(userName, email);

    onUserAdded({ userName, email });

  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            aria-label="User Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>

        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            aria-label="User Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default UserForm;
