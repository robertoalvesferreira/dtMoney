import { Container } from "./styles";
import iconmeImg from '../../assets/Entradas.svg';
import outcomeImg from '../../assets/Saídas.svg';
import totalImg from '../../assets/Total.svg'

export function Summary(){
    return(
       <Container>
           <div>
               <header>
                   <p>Entradas</p>
                   <img src={iconmeImg} alt="Entradas"/>
               </header>
               <strong>R$1000,000</strong>
           </div>
           <div>
               <header>
                   <p>Saidas</p>
                   <img src={outcomeImg} alt="Saidas"/>
               </header>
               <strong>- R$500,000</strong>
           </div>
           <div className="highlight-background">
               <header>
                   <p>Entradas</p>
                   <img src={totalImg} alt="Total"/>
               </header>
               <strong>R$500,000</strong>
           </div>
       </Container>
    )
}