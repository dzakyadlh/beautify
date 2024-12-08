import { CircularProgress } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function CustomPrimaryButton({
  type = 'button',
  icon,
  text,
  isLoading = false,
}) {
  return (
    <button className="w-full flex items-center justify-center gap-4 border border-black rounded-md py-2 bg-tertiary hover:bg-darkbeige transition duration-300">
      {icon && <FontAwesomeIcon icon={icon} className="text-sm" />}
      {isLoading ? (
        <CircularProgress isIndeterminate color="black" size="24px" />
      ) : (
        <p className="font-semibold">{text}</p>
      )}
    </button>
  );
}

export function CustomOutlinedButton({
  type = 'button',
  icon,
  text,
  isLoading = false,
}) {
  return (
    <button className="w-full flex items-center justify-center gap-4 border border-black rounded-md py-2 hover:border-darkbeige transition duration-300">
      {icon && <FontAwesomeIcon icon={icon} />}
      {isLoading ? (
        <CircularProgress isIndeterminate color="black" size="24px" />
      ) : (
        <p className="font-semibold">{text}</p>
      )}
    </button>
  );
}

export function CTAButton({ type = 'button', icon, text, isLoading = false }) {
  return (
    <button className="w-fit bg-black text-white flex items-center justify-center gap-4 rounded-full px-10 py-4 hover:text-black hover:bg-tertiary transition duration-300">
      {icon && <FontAwesomeIcon icon={icon} />}
      {isLoading ? (
        <CircularProgress isIndeterminate color="black" size="24px" />
      ) : (
        <p className="font-semibold">{text}</p>
      )}
    </button>
  );
}
