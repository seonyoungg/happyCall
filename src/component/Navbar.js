import React from 'react'
import { Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'

const Navbar = () => {

    const [selectLang, setSelectLang] = useState("KOR"); // 현재 선택된 언어
    const [dropdownOpen, setDropdownOpen] = useState(false); // 드롭다운 열림/닫힘 상태

    const LangSelect = (lang) => {
        setSelectLang(lang); // 언어 업데이트
        setDropdownOpen(false); // 드롭다운 닫기
    };

  return (
    <div class="header">
        <Container>
            <div className='nav-wrap'>
                <div className='logo-img'>
                    <img src='/img/logo.png' alt="해피콜로고"/>
                </div>
                <div className='nav-item'>
                    <a class="btn outline-btn icon-btn"
                        href="https://hcmall.co.kr/" 
                        target="_blank">
                        <FontAwesomeIcon icon={faCartShopping} />
                        해피콜스토어
                    </a>
                    <div className="lang-dropdown">
                        <div className="underline-btn selected"
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

                    <div class="menu-item">
                        <img src='/img/menu.png' alt="메뉴"/>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Navbar
