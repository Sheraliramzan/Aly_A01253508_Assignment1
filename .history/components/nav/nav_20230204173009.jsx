import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import { menuD } from "./data";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const router = useRouter();

  return (
    <>
      <div className="navcont">
        <Image
          src={"/icons/menu-icon.png"}
          width={30}
          height={50}
          onClick={handleMenu}
        />
        <Image src={"/icons/graduation-hat.png"} width={50} height={50} />
      </div>
      {isMenuOpen && (
        <div className="menucont">
          <div className="listcont">
            <div className="btncont">
              <button className="close" onClick={handleMenu}>
                X
              </button>
            </div>
            <ul>
              {menuD.map((o, i) => {
                return (
                  <li
                    key={i}
                    onClick={() => {
                      router.push(`/${o.link}`);
                    }}
                  >
                    {o.name}
                  </li>
                );
              })}
            </ul>
          </div>
          <Image
            src={"/background-images/menuBackground.png"}
            width={240}
            height={240}
          />
        </div>
      )}
    </>
  );
}