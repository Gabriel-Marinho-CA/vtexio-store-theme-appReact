import React from 'react';
import {useCssHandles} from "vtex.css-handles";
import "./components/index";
import "../react/css/header";
import { useState } from 'react';

const CSS_HANDLES = [
  'menu_header_down',
  'all_content_menu',
  'escolha_tamanho',
  'menu_desktop',
  'Submenu',
  
  'list_subcategories',
  'low_bar_subcategories',
  'menu_tamanhos_desktop',
  'tamanho',
  'menu_mobile',
  'actived',

  'menu_tamanhos_desktop',
  'tamanho',
]



const HeaderDown = () => {

    const handles = useCssHandles(CSS_HANDLES);



  //  const handleHover = (event) => {
  //     event.preventDefault();

  //       this.setState({
  //         open: true
  //       })
  //   }

  /* ======== 
    OPEN SUBMENUS ON HOVER
   ========== */

   const [hoverFem,setHoverFem] = useState(false);

   const [hoverMasc,setHoverMasc] = useState(false);

   const [hoverInfan,setHoverInfan] = useState(false);

   const [hoverAcess,setHoverAcess] = useState(false);

   const [menuTam,setMenuTam] = useState(false);

    const toggleFem = () =>  {
        setHoverFem(true);
        setHoverMasc(false);
        setHoverInfan(false);
        setHoverAcess(false);
        setMenuTam(false);
    }

    const toggleMasc = () =>  {
      setHoverMasc(true);
      setHoverFem(false);
      setHoverInfan(false);
      setHoverAcess(false);
      setMenuTam(false);

    }

    const toggleInfan = () =>  {
        setHoverInfan(true);
        setHoverFem(false);
        setHoverMasc(false);
        setHoverAcess(false);
        setMenuTam(false);
    }

    const toggleAcess = () =>  {
        setHoverAcess(true);
        setHoverFem(false);
        setHoverMasc(false);
        setHoverInfan(false);
        setMenuTam(false);
    }
    const closeDiv = () => {
      setHoverAcess(false);
      setHoverFem(false);
      setHoverMasc(false);
      setHoverInfan(false);
      setMenuTam(false);
    }


    /*======= END SUBMENUS =======*/

    const menuTamanhos = () => {
      setMenuTam(!menuTam);
    }


    return (
        <div>
            <div className ={`${handles.menu_header_down}`}  >
                <ul className = {`${handles.all_content_menu}`}>
                    <li
                     onMouseEnter ={toggleFem}

                     >
                         <a href="#">FEMININO</a>
                    </li>
                    <li
                      onMouseEnter ={toggleMasc}
                      onMouseLeave ={toggleMasc}
                    >
                           <a href="#">MASCULINO</a>
                    </li>
                    <li className="infantil"
                        onMouseEnter ={toggleInfan}
                        onMouseLeave ={toggleInfan}
                    
                    >
                           <a href="#">INFANTIL</a>
                    </li>
                    <li className="acessorios"
                        onMouseEnter ={toggleAcess}
                        onMouseLeave ={toggleAcess}
                    
                    >
                           <a href="#">ACESSÓRIOS</a>
                    </li>
                    <div className= {`${handles.escolha_tamanho}`}>
                         <span>ESCOLHA POR TAMANHO <i className="far fa-chevron-down"></i></span>
                    </div>
                </ul>
            <div id="menu-desktop" className= {`${handles.menu_desktop}`}>
                <div
                    className = 
                    { hoverFem? ` ${handles.Submenu} ${handles.actived}` :`${handles.Submenu}` }
                    onMouseLeave ={closeDiv}
                 >
                <div className="img-menu-feminino">
                    <img src="/arquivos/img-submenu-desktop.png" alt="" />
                </div>
                <div className=
                    {`${handles.list_subcategories}`}
                >
                  <ul>
                        <li>
                            <a href="#">Botas</a>
                        </li>
                        <li>
                            <a href="#">Sandálias</a>
                        </li>
                        <li>
                            <a href="#">Tênis Casual</a>
                        </li>
                        <li>
                            <a href="#">Tênis Esportivo</a>
                        </li>
                  </ul>
                  <ul>
                        <li>
                            <a href="#">Sneakers</a>
                        </li>
                        <li>
                            <a href="#">Rasteirinhas</a>
                        </li>
                        <li>
                            <a href="#">Sapatos</a>
                        </li>
                        <li>
                            <a href="#">Sapatilhas</a>
                        </li>
                  </ul>
                  <ul>
                        <li>
                            <a href="#">Scarpin</a>
                        </li>
                        <li>
                            <a href="#">Peep</a>
                        </li>
                        <li>
                            <a href="#">Toe</a>
                        </li>
                        <li>
                            <a href="#">Chinelos</a>
                        </li>
                        </ul>
                  <ul>
                        <li>
                            <a href="#">Alpargatas</a>
                        </li>
                        <li>
                            <a href="#">Mocassim</a>
                        </li>
                  </ul>
                </div>
                <div className= {`${handles.low_bar_subcategories}`}></div>
                </div>
                <div className=
                 { hoverMasc? `${handles.Submenu} ${handles.actived}` :`${handles.Submenu}` }
                 onMouseLeave ={closeDiv}
                >
                <div className="img-menu-feminino">
                    <img src="/arquivos/img-submenu-desktop.png" alt="" />
                </div>
                <div className={`${handles.list_subcategories}`}>
                    <ul>
                    <li>
                        <a href="#">Masculino</a>
                    </li>
                    <li>
                        <a href="#">Sandálias</a>
                    </li>
                    <li>
                        <a href="#">Tênis Casual</a>
                    </li>
                    <li>
                        <a href="#">Tênis Esportivo</a>
                    </li>
                    </ul>
                    <ul>
                    <li>
                        <a href="#">Sneakers</a>
                    </li>
                    <li>
                        <a href="#">Rasteirinhas</a>
                    </li>
                    <li>
                        <a href="#">Sapatos</a>
                    </li>
                    <li>
                        <a href="#">Sapatilhas</a>
                    </li>
                    </ul>
                    <ul>
                    <li>
                        <a href="#">Scarpin</a>
                    </li>
                    <li>
                        <a href="#">Peep</a>
                    </li>
                    <li>
                        <a href="#">Toe</a>
                    </li>
                    <li>
                        <a href="#">Chinelos</a>
                    </li>
                    </ul>
                    <ul>
                    <li>
                        <a href="#">Alpargatas</a>
                    </li>
                    <li>
                        <a href="#">Mocassim</a>
                    </li>
                    </ul>
                </div>
                <div className={`${handles.low_bar_subcategories}`}></div>
                </div>
                <div className= 
                  { hoverInfan? `${handles.Submenu} ${handles.actived}` :`${handles.Submenu}` }
                  onMouseLeave ={closeDiv}>
                <div className="img-menu-feminino">
                    <img src="/arquivos/img-submenu-desktop.png" alt="" />
                </div>
                <div className={`${handles.list_subcategories}`}>
                    <ul>
                    <li>
                        <a href="#">infantil</a>
                    </li>
                    <li>
                        <a href="#">Sandálias</a>
                    </li>
                    <li>
                        <a href="#">Tênis Casual</a>
                    </li>
                    <li>
                        <a href="#">Tênis Esportivo</a>
                    </li>
                    </ul>
                    <ul>
                    <li>
                        <a href="#">Sneakers</a>
                    </li>
                    <li>
                        <a href="#">Rasteirinhas</a>
                    </li>
                    <li>
                        <a href="#">Sapatos</a>
                    </li>
                    <li>
                        <a href="#">Sapatilhas</a>
                    </li>
                    </ul>
                    <ul>
                    <li>
                        <a href="#">Scarpin</a>
                    </li>
                    <li>
                        <a href="#">Peep</a>
                    </li>
                    <li>
                        <a href="#">Toe</a>
                    </li>
                    <li>
                        <a href="#">Chinelos</a>
                    </li>
                    </ul>
                    <ul>
                    <li>
                        <a href="#">Alpargatas</a>
                    </li>
                    <li>
                        <a href="#">Mocassim</a>
                    </li>
                    </ul>
                </div>
                <div className={`${handles.low_bar_subcategories}`}></div>
                </div>
                <div className=
                 { hoverAcess? `${handles.Submenu} ${handles.actived}` : `${handles.Submenu}` }
                 onMouseLeave ={closeDiv}
                >
                <div className="img-menu-feminino">
                    <img src="/arquivos/img-submenu-desktop.png" alt="" />
                </div>
                <div className={`${handles.list_subcategories}`}>
                    <ul>
                    <li>
                        <a href="#">acessorios</a>
                    </li>
                    <li>
                        <a href="#">Sandálias</a>
                    </li>
                    <li>
                        <a href="#">Tênis Casual</a>
                    </li>
                    <li>
                        <a href="#">Tênis Esportivo</a>
                    </li>
                    </ul>
                    <ul>
                    <li>
                        <a href="#">Sneakers</a>
                    </li>
                    <li>
                        <a href="#">Rasteirinhas</a>
                    </li>
                    <li>
                        <a href="#">Sapatos</a>
                    </li>
                    <li>
                        <a href="#">Sapatilhas</a>
                    </li>
                    </ul>
                    <ul>
                    <li>
                        <a href="#">Scarpin</a>
                    </li>
                    <li>
                        <a href="#">Peep</a>
                    </li>
                    <li>
                        <a href="#">Toe</a>
                    </li>
                    <li>
                        <a href="#">Chinelos</a>
                    </li>
                    </ul>
                    <ul>
                    <li>
                        <a href="#">Alpargatas</a>
                    </li>
                    <li>
                        <a href="#">Mocassim</a>
                    </li>
                    </ul>
                </div>
                <div className={`${handles.low_bar_subcategories}`}></div>
                </div>
            </div>
            </div>
  
        <div className={`${handles.menu_mobile}`}>
          <div className="close-btn">X</div>
          <div className="search-area mobile">
              {/* SEARCH */}
          </div>
          <div className="categories-mobile">
            <div className="categorie feminino">
              <img src="/arquivos/img-menu-feminino.png" alt="" />
              <div className="all-content">
                <div className="content-left">
                  <p>FEMININO</p>
                  <ul>
                    <li><a href="#">Botas</a></li>
                    <li><a href="#">Sandálias</a></li>
                    <li><a href="#">Tênis Casual</a></li>
                    <li><a href="#">Sneakers</a></li>
                    <li><a href="#">Rasteirinhas</a></li>
                    <li><a href="#">Sapatos</a></li>
                    <li><a href="#">Sapatilhas</a></li>
                  </ul>
                </div>
                <div className="content-right">
                  <ul>
                    <li><a href="#">Scarpin</a></li>
                    <li><a href="#">Peep Toe</a></li>
                    <li><a href="#">Chinelos</a></li>
                    <li><a href="#">Oxford</a></li>
                    <li><a href="#">Alpargatas</a></li>
                    <li><a href="#">Alpargatas</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="categorie masculino">
              <img src="/arquivos/img-menu-masculino.png" alt="" />
              <div className="all-content">
                <div className="content-left">
                  <p>MASCULINO</p>
                  <ul>
                    <li><a href="#">Tênis Esportivo</a></li>
                    <li><a href="#">Tênis Casual</a></li>
                    <li><a href="#">Sapatênis</a></li>
                    <li><a href="#">Sapatos</a></li>
                  </ul>
                </div>
                <div className="content-right">
                  <ul>
                    <li><a href="#">Botas</a></li>
                    <li><a href="#">Chuteiras</a></li>
                    <li><a href="#">Mocassim</a></li>
                    <li><a href="#">Chinelos e Sandálias</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="categorie infantil">
              <img src="/arquivos/img-menu-infantil.png" alt="img-categoria" />
              <div className="all-content">
                <div className="content-left">
                  <p>INFANTIL</p>
                  <ul>
                    <li className="meninas"><a href="#">Menina</a> <i className="far fa-chevron-right"
                      ></i>
                      <div className="subcategories-infantil meninas">
                        <ul>
                          <li>
                            <a href="#">lorem ipsum</a>
                          </li>
  
                          <li>
                            <a href="#">lorem ipsum</a>
                          </li>
                          <li>
                            <a href="#">lorem ipsum</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="meninos"><a href="#">Menino</a><i className="far fa-chevron-right"
                      ></i>
                      <div className="subcategories-infantil meninos">
                        <ul>
                          <li>
                            <a href="#">lorem ipsum</a>
                          </li>
                          <li>
                            <a href="#">lorem ipsum</a>
                          </li>
                          <li>
                            <a href="#">lorem ipsum</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="categorie acessorios">
              <img src="/arquivos/img-menu-acessorios.png" alt="img-categoria" />
              <div className="all-content">
                <div className="content-left">
                  <p>ACESSÒRIOS</p>
                  <ul>
                    <li><a href="#">Malas</a></li>
                    <li><a href="#">Mochilas</a></li>
                    <li><a href="#">Meias</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="my-account">
            <div className="link" role="open">
              <div className="user" id="login">
                {/* SEARCH */}
                <img src="/arquivos/ico-user.png" alt="ico-user" />
                <p>Minha conta e <br /> <span>Meus pedidos</span></p>
              </div>
            </div>
            <div className="tooltip-on" id="my-account-tooltip-on">
              <ul>
                <li>
                  <a href="/account">
                    <span className="icon"><i className="fa fa-user"></i></span>
                    <span className="text">Minha Conta</span>
                  </a>
                </li>
                <li>
                  <a href="/account#/orders">
                    <span className="icon"><i className="fa fa-archive"></i></span>
                    <span className="text">Meus Pedidos</span>
                  </a>
                </li>
                <li>
                  <a className="link" href="/favoritos">
                    <span className="icon"><i className="fa fa-heart-o"></i></span>
                    <span className="text">Meus Favoritos</span>
                  </a>
                </li>
                <li>
                  <a>
                    <span className="icon"><i className="fa fa-sign-out"></i></span>
                    <span className="text">Sair</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="tooltip-off" id="my-account-tooltip-off">
            </div>
          </div>
          <div className="user-area">
            <div className="account">
              <div className="user" id="login">
               
                <img src="/arquivos/ico-user.png" alt="ico-user"/>
                <p>Minha conta </p>
              </div>
            </div>
            <div className="talk-to-us">
              <img src="/arquivos/atendimento-ico.png" alt="atendimento-ico" />
              <p>Fale Conosco</p>
            </div>
            <div className="cart">
              <a href="/cart">
                <img src="/arquivos/nossa-loja.png" alt="nossa-loja" />
                <p>Carrinho</p>
              </a>
            </div>
          </div>
        </div>


        {/* <div className=
        {menuTam? `${handles.menu_tamanhos_desktop} ${handles.actived}` : ''}
          onClick = {menuTamanhos}
        >
            <div className={`${handles.tamanho}`}>
                <p>MASCULINO</p>
                <ul>
                    <li><a href="#">40</a></li>
                    <li><a href="#">40</a></li>
                    <li><a href="#">40</a></li>
                    <li><a href="#">40</a></li>
                    <li><a href="#">40</a></li>
                    <li><a href="#">40</a></li>
                </ul>
            </div>
            <div className={`${handles.tamanho}`}>
                <p>FEMININO</p>
                <ul>
                    <li><a href="#">40</a></li>
                    <li><a href="#">40</a></li>
                    <li><a href="#">40</a></li>
                    <li><a href="#">40</a></li>
                    <li><a href="#">40</a></li>
                    <li><a href="#">40</a></li>
                </ul>
            </div>
            <div className={`${handles.tamanho}`}>
                <p>INFANTIL</p>
                <ul>
                    <li><a href="#">40</a></li>
                    <li><a href="#">40</a></li>
                    <li><a href="#">40</a></li>
                    <li><a href="#">40</a></li>
                    <li><a href="#">40</a></li>
                    <li><a href="#">40</a></li>
                </ul>
            </div>
            <div className= {`${handles.low_bar_subcategories}`}></div>
          </div> */}
      </div>

  
    )
}

export default HeaderDown;