// @ts-ignore
import ButtonSvg from '../../assets/svg/ButtonSvg';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  px?: string;
  white?: boolean;
  className?: string;
}

export default function Button({
  children,
  white,
  px,
  href,
  className,
  onClick,
}: ButtonProps) {
  const classes = `button relative inline-flex items-center justify-center h-11 tranistion-colors hover:text-color-1 ${
    px || 'px-7'
  } ${white ? 'text-n-8' : 'text-n-1'} ${className || ''}`;

  const spanClasses = 'relative z-10';
  const renderButton = () => {
    return (
      <button onClick={onClick} className={classes}>
        <span className={spanClasses}>{children}</span>
        {ButtonSvg(white)}
      </button>
    );
  };

  const renderLink = () => {
    return (
      <a href={href} className={classes}>
        <span className={spanClasses}>{children}</span>
        {ButtonSvg(white)}
      </a>
    );
  };

  return href ? renderLink() : renderButton();
}
