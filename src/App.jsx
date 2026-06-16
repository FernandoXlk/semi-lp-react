import { useState } from 'react'
import './App.css'


function App() {
  const [nome,setNome] = useState("")
  const [assunto,setAssunto] = useState("")
  
  const navTo = (id) =>{
    const element = document.getElementById(id)

    if(element){
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  const enviar = () => {
    const mensagem = `Gostaria de entrar em contato! \n\nNome: ${nome} \naAssunto: ${assunto}`
    const msg = encodeURIComponent(mensagem)
    window.open(`https://wa.me/5541999999999?text=${msg}`)
  }


  return (
    <>
     <nav>
        <span className="navItem" onClick={() => navTo('s1')}>
            <img src="/home.png" alt="Home"/>
             <p className="navWords">Home</p>
        </span>
       
        <span className="navItem" onClick={() => navTo('s2')}>
            <img src="/cardIcon.png" alt="Products"/>
            <p className="navWords">Cards</p>
        </span>
        <span className="navItem" onClick={() => navTo('s3')}>
            <img src="/videosIcon.png" alt="video"/>
            <p className="navWords">Videos</p>
        </span>
        <span className="navItem" onClick={() => navTo('s4')}>
            <img src="/phone.png" alt="Contact"/>
            <p className="navWords">Contato</p>
        </span>
      
      
    </nav>

    <main>
      <section id="s1" className="s1">
        <h1>Título do banner</h1>
        <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto maiores sint sapiente quis nobis aperiam minus, veniam at earum quisquam totam accusamus modi, voluptate minima quia harum illum eligendi alias.</h2>
      </section>

      <section id="s2" className="s2">
        <h1>Banner</h1>
      </section>

      <section id="s3" className="s3">
        <div className="card">
          <img src="./tobeyImage.jpg" alt=""/>
          <div className="textsCard">
            <h4>Título</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium distinctio nemo neque facilis cum eligendi inventore pariatur. Hic nesciunt adipisci explicabo sunt, optio similique illum dignissimos cumque excepturi exercitationem aperiam!</p>
          </div>
        </div>

        <div className="card">
          <img src="./TomImage.jpg" alt=""/>
          <div className="textsCard">
            <h4>Título</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium distinctio nemo neque facilis cum eligendi inventore pariatur. Hic nesciunt adipisci explicabo sunt, optio similique illum dignissimos cumque excepturi exercitationem aperiam!</p>
          </div>
        </div>

        <div className="card">
          <img src="./Andrewimage.webp" alt=""/>
          <div className="textsCard">
            <h4>Título</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium distinctio nemo neque facilis cum eligendi inventore pariatur. Hic nesciunt adipisci explicabo sunt, optio similique illum dignissimos cumque excepturi exercitationem aperiam!</p>
          </div>
        </div>
        
      </section>

      <section id="s4" className="s4">
        <iframe className="video" src="https://www.youtube.com/embed/7FFGIqNHV1g?si=ee2YIU8LCS6cIh6j" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </section>

      <section id="s5" className="s5">
        <div className="formulario">
          <label for="nome">Nome </label>
          <input type="text" id="nome" placeholder="insira seu nome" value={nome} onChange={(event) => setNome(event.target.value)}/>
          <label for="assunto">assunto</label>
          <textarea name="assunto" placeholder="insira sua mensagem" value={assunto} onChange={(event) => setAssunto(event.target.value)}></textarea>
          <button onClick={enviar}>ENVIAR</button>
        </div>
      </section>
    </main>

    <footer>
        <a href="https://www.facebook.com" target="_blank">
          <img width="40px" src="./faceIcon.jpg" alt="facebook"/>
        </a>
        <a href="https://www.instagram.com/" target="_blank">
          <img width="40px" src="./instaIcon.png" alt="instagram"/>
        </a>
        <a href="https://linkedin.com" target="_blank">
          <img width="40px" src="./linkedinIcon.avif" alt="linkedin"/>
        </a>
        <a href="https://github.com" target="_blank">
          <img width="40px" src="./githubIcon.jpg" alt="github"/>
        </a>
    </footer>
    </>
  )
}

export default App
