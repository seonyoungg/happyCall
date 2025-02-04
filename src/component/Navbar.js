import React from 'react'
import { Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { useNavigate } from 'react-router';

const Navbar = ({toggleSide}) => {
    const [selectLang, setSelectLang] = useState("KOR"); // 현재 선택된 언어
    const [dropdownOpen, setDropdownOpen] = useState(false); // 드롭다운 열림/닫힘 상태

    const LangSelect = (lang) => {
        setSelectLang(lang); // 언어 업데이트
        setDropdownOpen(false); // 드롭다운 닫기
    };

    const navigate=useNavigate();
    const goToHome = ()=>{
        navigate("/");
        window.scrollTo(0,0)
    }

  return (
    <div className="header" data-name="header">
        <Container>
            <div className="nav-wrap">
                <div className="logo-img" onClick={goToHome}>
                    <img src="/img/logo.png" alt="해피콜로고"/>
                </div>
                <div className="nav-item">
                    <a className="btn outline-btn icon-btn"
                        href="https://hcmall.co.kr/" 
                        target="_blank">
                        <FontAwesomeIcon icon={faCartShopping} />
                        해피콜스토어
                    </a>
                    <div className="lang-dropdown">
                        <div className={`underline-btn selected ${dropdownOpen? 'active' : ''}`}
                            onClick={() => setDropdownOpen(!dropdownOpen)} >
                            {selectLang}
                        </div>
                        {dropdownOpen && (
                            <ul className="dropdown"> 
                                <li onClick={() => LangSelect("KOR")}>KOR</li>
                                <li onClick={() => LangSelect("EN")}>EN</li>
                                <li onClick={() => LangSelect("JP")}>JP</li>
                            </ul>
                        )}
                        </div>

                    <div className="menu-item"
                         onClick={toggleSide}>
                        <img src='/img/menu.png' alt="메뉴"/>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Navbar
