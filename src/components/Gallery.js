import React, { useState } from 'react';
import FontAwesome from 'react-fontawesome';
import $ from 'jquery';

import '../styles/Gallery.css'


export default function Gallery(){
    //let src="";
    
    const openModal=(src)=>{
        console.log(src);
        $(".modalImage").attr("src",src);
        $(".popup").css("display","block");
        $(".jumbotron").css("display","none");
        $(".grid-padding").css("display","none");   
    }
    const handleClose=()=>{
        $(".popup").css("display","none");
        $(".jumbotron").css("display","block");
        $(".grid-padding").css("display","block");
    }
    return(
        <div className="container-fluid">
            <div className="jumbotron mt-3 m">
                <div className="h3">
                    Welcome to My Gallery
                </div>
            </div>
            <div className="row mainPop" >
                <div className="popup" style={{display:"none",marginTop:"1%"}}>
                <span className="close1" style={{fontSize:"50px",float:"left"}} onClick={()=>handleClose()}><FontAwesome ><span class="fal fa-times" size="7x" ></span></FontAwesome></span>
                <img src="" className="modalImage" alt="image" width="90%" height="100%" ></img>
                    <span className="close" style={{fontSize:"50px",float:"left"}} onClick={()=>handleClose()}><FontAwesome ><span class="fal fa-times" size="7x" ></span></FontAwesome></span>
                </div>

            </div>
            <div className="grid-padding">
                <div className="row" >
                    <div className="col-sm-4">
                        <div className="row">
                            <img src="https://images.unsplash.com/photo-1596063789158-6173a72a46a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                             className="fit-image" onClick={(event)=>openModal(event.currentTarget.src)}></img>
                        </div>
                        <div className="row">
                            <img src="https://images.unsplash.com/photo-1602826949307-2eead9fcfdb1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1055&q=80"
                             className="fit-image" onClick={(event)=>openModal(event.currentTarget.src)}></img>
                        </div>
                        <div className="row">
                            <img src="https://images.unsplash.com/photo-1573688697771-81f8c2c4dc7f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=355&q=80"
                             className="fit-image" onClick={(event)=>openModal(event.currentTarget.src)}></img>
                        </div>
                        <div className="row">
                            <img src="https://images.unsplash.com/photo-1600840988002-de786474a069?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                             className="fit-image" onClick={(event)=>openModal(event.currentTarget.src)}></img>
                        </div>
                    </div>
                    <div className="col-sm-4">
                    <div className="row">
                            <img src="https://images.unsplash.com/photo-1532525429183-5523ef8ce28f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=401&q=80"
                             className="fit-image" onClick={(event)=>openModal(event.currentTarget.src)}></img>
                        </div>
                        <div className="row">
                            <img src="https://images.unsplash.com/photo-1602008672365-f4c4244c8034?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80"
                             className="fit-image" onClick={((event)=>openModal(event.currentTarget.src))}></img>
                        </div>
                        <div className="row">
                            <img src="https://images.unsplash.com/photo-1601984376939-2b071e66420f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                             className="fit-image" onClick={(event)=>openModal(event.currentTarget.src)}></img>
                        </div>
                        <div className="row">
                            <img src="https://images.unsplash.com/photo-1599362924603-10466096914e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=925&q=80"
                             className="fit-image" onClick={(event)=>openModal(event.currentTarget.src)}></img>
                        </div>
                        
                    </div>
                    <div className="col-sm-4">
                    <div className="row">
                            <img src="https://images.unsplash.com/photo-1596340314589-bbc7f26a2d61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                             className="fit-image" onClick={(event)=>openModal(event.currentTarget.src)}></img>
                        </div>
                        <div className="row">
                            <img src="https://images.unsplash.com/photo-1599362924603-10466096914e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=925&q=80"
                             className="fit-image" onClick={(event)=>openModal(event.currentTarget.src)}></img>
                        </div>
                        <div className="row">
                            <img src="https://images.unsplash.com/photo-1602527863222-1a22f7100326?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=401&q=80"
                             className="fit-image" onClick={(event)=>openModal(event.currentTarget.src)}></img>
                        </div>
                        <div className="row">
                            <img src="https://images.unsplash.com/photo-1592185319492-1743797e157c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                             className="fit-image" onClick={(event)=>openModal(event.currentTarget.src)}></img>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    );
}