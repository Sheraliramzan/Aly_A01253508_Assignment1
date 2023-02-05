export default function Nav(){
    return 
    <>
        <div className="navcont">
              <Image alt='menu' className='menuimg'
                src={"/icons/menu-icon.png"}
                width={40}
                height={30}
                onClick={handleClick}
              />
              <Image alt='grad' className='gardimg' src={"/icons/graduation-hat.png"} width={40} height={30} />
          </div>
          {isMenuOpen && (
            <div className="menucont">
              <div className="listcont">
                <div className="btncont">
                  <button className="close" onClick={handleClick}>
                    X
                  </button>
                </div>
                <div>
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="/about">About</a>
                    </li>
                    <li>
                      <a href="/contact">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
              <Image alt='bar'
                src={"/background-images/menuBackground.png"}
                width={240}
                height={240}
              />
            </div>
          )}
    </>
}