type Props = { text: string; validForm?: boolean };

const SubmitButton = ({ text, validForm }: Props) => {
  return (
    <button
      className="form-submit-btn"
      type="submit"
      disabled={!{ validForm } || false}
    >
      {text}
    </button>
  );
};

export default SubmitButton;
