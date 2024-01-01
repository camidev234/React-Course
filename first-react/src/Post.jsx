import PropTypes from 'prop-types';

export const Post = ({ title, description, address }) => {
    console.log(title, description, address)
    return (    
        <>
            <div className="post">
                <span>Titulo: { title }</span><br />
                <span>Descripcion: { description }</span><br />
                <span>Dureccion: { address.city }</span>
            </div>
        </>
    )
}

Post.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
  };


