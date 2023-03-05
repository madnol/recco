import { FC, HTMLProps } from 'react';
import classnames from 'classnames';
import './card.styles.scss';

export interface Props extends HTMLProps<HTMLDivElement> {
  title?: string;
  image?: string;
  className?: string;
  onImageClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export const Card: FC<Props> = (props) => {
  const { title, image, onImageClick, className, children, ...otherProps } =
    props;
  return (
    <div
      className={classnames('card', ['w-80 bg-base-100 shadow-xl', className])}
      {...otherProps}
    >
      <figure>
        {!!image && (
          <img
            onClick={onImageClick}
            className={classnames('card-image')}
            src={image}
            alt={title}
          />
        )}
      </figure>
      {!!children && <div className="card-children">{children}</div>}
    </div>
  );
};

Card.displayName = 'Card';

export default Card;
