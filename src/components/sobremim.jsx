import './sobre.css';

function Sobre() {
  return (
    <div className="SobreDiv">
      <div className='SobreWord'>
        <div className='ajuste_Alinhamento'>
            <h2 className='TitleSobre'>Sobre mim</h2>
            <p className='sobreItens'>Completamente apaixonado por tecnologia e novos desafios.</p>
            <p className='sobreItens'>A curiosidade foi a chave para querer atuar na área tecnológica. </p>
            <p className='sobreItens'>O contato desde muito cedo com websites e softwares me fez querer entender o funcionamento por trás de tudo que conhecemos hoje como tecnologia.</p>
        </div>
      </div>
      
      <div className='SobrePic'>
        <div className='DivAlinhamentoPic'>
          
          <img className='sobrePic' src="perfil.jpeg"></img>
          
        </div>

      </div>
    </div>
  );
}

export default Sobre;
