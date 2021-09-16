import React,{Component} from "react";
export default class Home extends Component{
    render (){
        return(
            <section>
            <Navbar />
                <div className="container">
                    <div className="row">
                        <div className="col s12 m4 l3">
                            <Profile />
                        </div>
                        <div className="col s12 m8 l9">
                            <About />
                            <Skills />
                            <Experience />
                            <Education />
                            <Portfolio />

                        </div>
                    </div>                
                </div>
            </section>
            )
    }
}