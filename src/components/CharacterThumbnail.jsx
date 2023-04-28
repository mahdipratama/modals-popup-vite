/* eslint-disable react/prop-types */
import './Thumbnail.css'

function CharacterThumbnail({ thumbnails, onClick }) {

  const renderThumbnail = thumbnails.map((thumb) => (
    <button key={thumb.id} onClick={() => onClick(thumb.id)}>
      <img src={thumb.thumb} alt={thumb.name} />
      <span>{thumb.name}</span>
    </button>
  ))

  return (

    <div className='thumbnail'>
      {renderThumbnail}
    </div>
  );
}

export default CharacterThumbnail