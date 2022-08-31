const Project = ({img, name, tech, description, codeLink, siteLink}) => {
  
  return (
    <article>
      <img src={img} alt={name} />  
      <h3>{name}</h3>
      <p className='article-skills'>{tech}</p>
      <section className='article-description'>
        <ul>
          {description.map(liText => <li>{liText}</li>)}
        </ul>  
      </section>
      <section className='article-links'>
        <div>Github Link</div>
        <div>Live Site</div>
      </section>
    </article>
  )
}

export default Project;