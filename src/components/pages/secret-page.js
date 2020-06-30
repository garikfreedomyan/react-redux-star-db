import React from 'react';
import { Redirect } from 'react-router-dom';

import './secret-page.css'

const SecretPage = ( {isLoggedIn}) => {

   if (isLoggedIn) {
      return (
         <div className="secret-block">
            <h3 className="secret-block__titel">Люк мог бы перейти на сторону тьмы</h3>
            <p className="secret-block__text">
               До той самой сцены, когда Дарт Вейдер сказал: «Я твой отец», никто из съемочной группы 
               не догадывался о таком развитии событий – все считали, что отец Люка Скайуокера мертв. 
               Об этой родственной связи знали только Лукас, режиссер Ирвин Кершнер и Марк Хэмилл (Люк).

               По задумке Лукаса, Люк должен был стать новым Вейдером. Автор франшизы планировал так: 
               Скайуокер снимет шлем с погибшего Дарта, наденет его, а потом скажет: «Теперь я – Вейдер». 
               Но такой поворот событий не понравился коллегам Лукаса, и Люк остался на светлой стороне.
            </p>
         </div>
      );
   }

   return <Redirect to="/login" />
}

export default SecretPage;