import React from 'react';
import Modal from 'react-responsive-modal';

function ModalE(props) {
  let [isInvalid, setIsInvalid] = React.useState(false);
  let [email, setEmail] = React.useState('');
  let [password, setPassword] = React.useState('');


  function close() {
    props.setOpen(false);
  }

  function handleLogin() {
    props.setSignboo(false);
  }

  function handlePassword(event) {
    setPassword(event.currentTarget.value);
}

  function handleEmail(event) {
    setEmail(event.currentTarget.value);
  }

  function handleLogin(event) {
    event.preventDefault();

    if (email === 'example@gmail.com' && password === '1234') {
      // take them home
      props.setSignboo(false);
      props.setOpen(false);
    } else {
      // show an error
      setIsInvalid(true);
    }
  }

  return (
    <Modal open={props.open} onClose={close} center={true}>
      <h1>Login</h1>

      {isInvalid && (
        <p style={{ color: 'red' }}>
          Your credentials are incorrect
                </p>
      )}

      <form onSubmit={handleLogin}>
        <div>
          <label>Email</label>
          <input type="email" value={email} onChange={handleEmail} />
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={handlePassword}
            required
            minLength="4"
            maxLength="8"
          />
        </div>
        <button>Login</button><button onClick={close}>Cancel</button>
      </form>
    </Modal>
  );
}

export default ModalE;