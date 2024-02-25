import PropTypes from 'prop-types';

export const GifItem = ({ title, url }) => {
  return (
    <div className="card">
      <img src={url} alt={title} />
      <p aria-label="paragraph">{title}</p>
    </div>
  );
};

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
