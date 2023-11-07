import './App.css';
import Post from './components/Post';
import Comentario from './components/Comentario';
import seriesS from './image/Imagem1.jpg';
import xbox from './image/Imagem2.png';


function App() {
  return (
    <div className='div'>
      <Post 
      titulo="Microsoft aumenta preço de X-BOX Series S!"
      Image={seriesS}
      descricao="É oficial, a Microsoft alterou em seu site o preço do Xbox Series S para o preço sugerido de R$3.599 e se mantém em silêncio sobre as mudanças, "
      categoria="Categoria: Games"
      />
      <h3>Comentários</h3>
      <Comentario
        image={xbox}
        nome="Caixista na veia"
        comentario="SITE SONYSTA, TUDO FAKE ESSA NOTICÍA!!!!!!!"
      />
      <h6>@desenvolvido por: Diego Munhoz</h6>
    </div>
  );
}

export default App;
