const Error = ({ error }) => {
  return (
    <div className='error'>
      <p className='error__text-warning'>
        Ops, ocorreu um erro: {error.userMessage}
      </p>
    </div>
  );
};

export default Error;
