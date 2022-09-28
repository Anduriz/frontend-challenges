import './Display.css';

export const Display = ({coffee}) => {

  return (
    <div className='display'>
      <div className='display-container'>
        <img src={coffee} alt="" />
      </div>
    </div>
  )
}
