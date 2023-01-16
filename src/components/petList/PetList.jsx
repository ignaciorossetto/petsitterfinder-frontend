import React from "react";
import "./petList.css";

const PetList = () => {
  return (
    <div className="pListContainer">
      <h1 className="pTitle">Mascotas por categoria!</h1>
      <div className="pList">
        <div className="pListItem">
          <img src="https://cdn.shopify.com/s/files/1/0248/4692/5912/articles/1519305023-0-0_4deff7f8-587a-4500-9aef-ca5063e27da1_1024x1024.jpg?v=1567518338" alt="" className="pListImg" />
          <div className="pListTitles">
            <h1>Perros</h1>
            <h2>Cachorros</h2>
          </div>
        </div>
        <div className="pListItem">
          <img src="https://cdn.pixabay.com/photo/2017/09/25/13/12/puppy-2785074_960_720.jpg" alt="" className="pListImg" />
          <div className="pListTitles">
            <h1>Perros</h1>
            <h2>Pequeños</h2>
          </div>
        </div>
        <div className="pListItem">
          <img src="https://cdn.pixabay.com/photo/2022/05/02/16/24/bordeaux-mastiff-7170006_960_720.jpg" alt="" className="pListImg" />
          <div className="pListTitles">
            <h1>Perros</h1>
            <h2>Grandes</h2>
          </div>
        </div>
        <div className="pListItem">
          <img src="https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_960_720.jpg" alt="" className="pListImg" />
          <div className="pListTitles">
            <h1>Gatos</h1>
            <h2>Adultos</h2>
          </div>
        </div>
        <div className="pListItem">
          <img src="https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_960_720.jpg" alt="" className="pListImg" />
          <div className="pListTitles">
            <h1>Gatos</h1>
            <h2>Pequeños</h2>
          </div>
        </div>
        <div className="pListItem">
          <img src="https://okdiario.com/img/2020/02/26/cuidados-de-tu-pecera-en-invierno-1-655x368.jpg" alt="" className="pListImg" />
          <div className="pListTitles">
            <h1>Peceras</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetList;
