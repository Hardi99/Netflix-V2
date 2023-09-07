import './App.css'

const Section = ({data}) => {

  return (
    <>
    {data.map((section, index) => (
        <div key={index}>
            <h2>{section.category}</h2>
            <nav>
                {section.images.map((picture, index) => (
                    <img key={index} src={picture} alt="" />
                ))}
            </nav>
        </div>
    ))}
    </>
  )
}

export default Section
