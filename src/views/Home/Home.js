import { Header } from '../../components/Header/Header'
import { Counter } from '../../components/Counter/Counter';
import { Celebrities } from '../../components/Celebrities/Celebrities';
import { Footer } from '../../components/Footer/Footer';
import { AddNewName } from '../../components/AddNewName/AddNewName';

export const Home =()=>{
    return(
        <div className="Home">
            <Header/>
            <Counter/>
            <Celebrities/>
            <AddNewName/>
            <Footer/>
            
        </div>
    );
}