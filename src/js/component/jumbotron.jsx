import React from 'react';

export const Jumbotron = () => {
    return (
        <div className='row'>
            <div className='d-flex justify-content-center'>
                <div className='jumbotron' style={{padding:"40px", backgroundColor:'rgb(211,211,211)', margin:'60px'}} >
                    <h1 className='display-2'>A Warm Welcome</h1>
                    <p className='lead'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos natus laudantium sapiente quidem facilis rem, excepturi, repellendus sunt, temporibus molestiae nulla sint amet id repellat ad mollitia dicta suscipit? Fuga?</p>
                    <p className="my-3">
                        <a className="btn btn-primary btn-lg" href="#" role="button">Call to action!</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

