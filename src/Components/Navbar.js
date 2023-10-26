import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export function Navbar() {
  useEffect(() => {
    const bnbText = document.getElementById("bnb_word");
    const walletText = document.querySelector(".btn_cwallect");
    const buttons = document.querySelectorAll(".buttons");
    const options = document.querySelectorAll(".options");
    const globe = document.querySelector("#img_globe");
    const options6 = document.getElementById("options6");
    const Eth = document.querySelector("#apt");
    const bbb = document.querySelector("#bnbsc");
    const bnbImg = document.querySelector("#img_bnb");
    const pageUp = document.querySelector(".page-up");

    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 450) {
        pageUp.style.display = "flex";
        pageUp.style.visibility = "visible";
      } else {
        pageUp.style.display = "none";
      }
    });

    function BSC() {
      Eth.addEventListener("click", function () {
        bnbText.textContent = "ETH";
        bnbImg.src = "/images/1.png";
        options6.style.visibility = "hidden";
        options6.style.display = "none";
      });
      bbb.addEventListener("click", function () {
        options6.style.visibility = "hidden";
        options6.style.display = "none";
        bnbImg.src = "/images/56.png";
        if (window.matchMedia("(max-width: 1127px)").matches) {
          bnbText.textContent = "BNB";
        } else {
          bnbText.textContent = "BNB Smart Chain";
        }
      });
    }
    BSC();

    function good() {
      if (window.matchMedia("(max-width: 1127px)").matches) {
        walletText.textContent = "Connect";
        bnbText.textContent = "BNB";
      } else {
        walletText.textContent = "Connect Wallet";
        bnbText.textContent = "BNB Smart Chain";
      }
      if (window.matchMedia("(max-width: 767px)").matches) {
        bnbText.innerHTML = "";
      }
    }
    window.onload = good;
    window.onresize = good;

    var prevScrollPos = window.pageYOffset;

    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;

      if (prevScrollPos > currentScrollPos) {
        // Scrolling up

        document.getElementById("navbar").style.top = "0";
      } else {
        // Scrolling down

        if (currentScrollPos > 1200) {
          document.getElementById("navbar").style.top = "-100px";
        }
      }

      prevScrollPos = currentScrollPos;
    };

    buttons.forEach((button, index) => {
      const divs = options[index];
      button.addEventListener("mouseover", function showOptions() {
        options[index].style.visibility = "visible";
        options[index].style.display = "flex";
        divs.addEventListener("mouseover", function showOptions() {
          options[index].style.visibility = "visible";
          options[index].style.display = "flex";
        });
      });

      //
      button.addEventListener("mouseout", () => {
        let timeoutId = setTimeout(() => {
          hideBoth();
        }, 40);
        divs.addEventListener("mouseout", () => {
          hideBoth();
        });
      });

      // Function to hide the div
      function hideBoth() {
        // Only hide the div if both the button and the div are not currently being hovered over
        const buttonNotHovered = !button.matches(":hover");
        const divNotHovered = !divs.matches(":hover");

        if (buttonNotHovered && divNotHovered) {
          divs.style.visibility = "hidden";
          divs.style.display = "none";
        }
      }
    });

    globe.addEventListener("mouseover", function todo() {
      options[5].style.visibility = "visible";
      options[5].style.display = "flex";
      options[5].id = "options72";
      options[5].addEventListener("mouseover", function showOptions() {
        options6.style.visibility = "visible";
      });
    });
    globe.addEventListener("mouseout", function () {
      setTimeout(removes, 60);
      options[5].addEventListener("mouseout", () => {
        removes();
      });
    });

    function removes() {
      if (!globe.matches(":hover") && !options[5].matches(":hover")) {
        options[5].style.visibility = "hidden";
        options[5].style.display = "none";
      }
    }

    function remove() {
      if (!bnbDiv.matches(":hover") && !options6.matches(":hover")) {
        options6.style.visibility = "hidden";
        options6.style.display = "none";
      }
    }

    const bnbDiv = document.querySelector("#div_bnb");
    bnbDiv.addEventListener("mouseover", function todo() {
      options6.style.visibility = "visible";
      options6.style.display = "flex";
      options6.addEventListener("mouseover", function showOptions() {
        options[5].style.visibility = "visible";
      });
    });
    bnbDiv.addEventListener("mouseout", function () {
      setTimeout(remove, 35);
      options6.addEventListener("mouseout", () => {
        remove();
      });
    });
    // toggleButton.addEventListener("click", () => {
    //     if (toggleButton.checked){
    //         toggleButton.style.transform = "translate(100%)"
    //         document.querySelector('body').style.background='white'
    //
    //     }
    //     else{
    //         toggleButton.style.transform = "translate(-100%)"
    //         document.querySelector('body').style.background='#08060b'
    //     }
    // })
  }, []);

  return (
    <div id="navbar" className="navbar">
      <div id="sep1" className="sep1">
        <div id="sec1" className="sec_1">
          <Link to={"/"}>
            <img className="imgs" id="img_beer" src="/images/beer.svg" />
          </Link>
          <Link to={"/"}>
            <span className="ps_word" id="ps_word">
              PancakeSwap
            </span>
          </Link>
        </div>
        <div id="sec_2" className="sec_2">
          <div id="TradeDiv1" className="TradeDiv">
            <button className="buttons" id="btn_trade">
              Trade <span className="scale_borders" />
            </button>
            <div className="options" id="options1">
              <Link id="oo" to="/Swap">
                <span className="opt_kids">Swap</span>
              </Link>
              <span className="opt_kids">Liquid</span>
              <span className="opt_kids">Liquidity</span>
              <span className="opt_kids" id="perpetual">
                Perpetual
                <img src="/images/l-arrow.svg" />
              </span>
              <span className="opt_kids" id="bridge">
                Bridge
                <img src="/images/l-arrow.svg" />
              </span>
            </div>
          </div>
          <div id="TradeDiv2" className="TradeDiv">
            <button className="buttons" id="btn_earn">
              Earn <span className="scale_borders" />
            </button>
            <div className="options" id="options2">
              <span id={"farms"} className="opt_kids">
                Farms
              </span>
              <span id={"pl"} className="opt_kids">
                Pools
              </span>
            </div>
          </div>
          <div id="TradeDiv3" className="TradeDiv">
            <button className="buttons" id="btn_win">
              Win
              <span className="green_dot" />
              <span className="scale_borders" />
            </button>
            <div className="options" id="options3">
              <span id={"tr"} className="opt_kids">
                Trading Competition
              </span>
              <span className="opt_kids">Prediction(BETA)</span>
              <span className="opt_kids">Lottery</span>
              <span className="opt_kids" id="potteryDiv">
                Pottery (BETA) <span className="pottery">POT OPEN</span>
              </span>
            </div>
          </div>
          <div id="TradeDiv4" className="TradeDiv">
            <button className="buttons" id="btn_nft">
              NFT <span className="scale_borders" />
            </button>
            <div className="options" id="options4">
              <span id={"ovr"} className="opt_kids">
                Overview
              </span>
              <span className="opt_kids">Collections</span>
              <span id={"act"} className="opt_kids">
                Activity
              </span>
            </div>
          </div>
          <div id="TradeDiv5" className="TradeDiv">
            <button className="buttons" id="btn_(... .)">
              <span className="scale_borders" />
              <span className="div_cir_dot" id="div_cir_dot">
                <span className="cir_dot" />
                <span className="cir_dot" />
                <span className="cir_dot" />
                &nbsp;
              </span>
            </button>
            <div className="options" id="options5">
              <span id={"info"} className="opt_kids">
                Info
              </span>
              <Link id="ifo" to={"/IFO"}>
                <span className="opt_kids">IFO</span>
              </Link>
              <span className="opt_kids">Voting</span>
              <Link id="affiliates" to={"/affiliates-program"}>
                <span className="opt_kids">Affiliate Program</span>
              </Link>
              <Link id="ooo" to={"/leaderboard"}>
                <span className="opt_kids">Leaderboard</span>
              </Link>
              <span className="opt_kids" id="blog">
                Blog <img src="/images/l-arrow.svg" />
              </span>
              <span className="opt_kids" id="docs">
                Docs <img src="/images/l-arrow.svg" />{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div id="sep2" className="sep2">
        <div className="sec_3" id="sec_3">
          <img className="imgs" id="img_deer2" src="/images/7186.png" />
          <span className="api-price">$1.870</span>
        </div>
        <div id="sec4" className="sec_4">
          <div id="TradeDiv6" className="TradeDiv2">
            <img className="imgs" id="img_globe" src="/images/globe.svg" />
            <div className="options" id="options7">
              <span>العربية</span>
              <span>বাংলা</span>
              <span>Engspansh</span>
              <span>Deutsch</span>
              <span>Ελληνικά</span>
              <span>Español</span>
              <span>Suomalainen</span>
              <span>Fispanpino</span>
              <span>Français</span>
              <span>हिंदी</span>
              <span>Magyar</span>
              <span>Bahasa Indonesia</span>
              <span>Itaspanano</span>
              <span>日本語</span>
              <span>한국어</span>
              <span>Nederlands</span>
              <span>Polski</span>
              <span>Português (Brazil)</span>
              <span>Português</span>
              <span>Română</span>
              <span>Русский</span>
              <span>Svenska</span>
              <span>தமிழ்</span>
              <span>Türkçe</span>
              <span>Українська</span>
              <span>Tiếng Việt</span>
              <span>简体中文</span>
              <span>繁體中文</span>
            </div>
          </div>
          <img className="imgs" id="img_settings" src="/images/settings.svg" />
          <div id="TradeDiv7" className="TradeDiv3">
            <span id="div_bnb" className="div_bnb">
              <img className="imgs" id="img_bnb" src="/images/56.png" />
              <p id="bnb_word" className="bnb_word">
                BNB Smart Chain
              </p>
              <img className="darr" src="/images/down_arrow.svg" />
            </span>
            <div id="options6">
              <span id={"sln"} className="opt_kids">
                Select a Network
              </span>
              <span id={"bnbsc"} className="opt_kids">
                <img className={"eth"} src={"/images/56.png"} />
                BNB Smart Chain
              </span>
              <span id={"apt"} className="opt_kids">
                <img id={"eth"} className={"eth"} src={"/images/1.png"} />
                Ethereum
              </span>
              <Link to={"/Aptos"}>
                <span id={"apt2"} className="opt_kids">
                  <img className={"eth"} src={"/images/apt.png"} />
                  Aptos
                </span>
              </Link>
            </div>
          </div>
          <div className="btn_cwallect">Connect Wallet</div>
        </div>
      </div>
      <a href="#" className="page-up">
        <svg
          viewBox="0 0 24 24"
          color="invertedContrast"
          width="20px"
          xmlns="http://www.w3.org/2000/svg"
          className="sc-231a1e38-0 duevIU"
          style={{ marginLeft: 0 }}
        >
          <path d="M13 19V7.83001L17.88 12.71C18.27 13.1 18.91 13.1 19.3 12.71C19.69 12.32 19.69 11.69 19.3 11.3L12.71 4.71001C12.32 4.32001 11.69 4.32001 11.3 4.71001L4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7C5.08997 13.09 5.71997 13.09 6.10997 12.7L11 7.83001V19C11 19.55 11.45 20 12 20C12.55 20 13 19.55 13 19Z" />
        </svg>
      </a>
    </div>
  );
}
export function MbNavbar() {
  useEffect(function () {
    const EarnBtn = document.querySelector("#earnBtn");
    const WinBtn = document.querySelector("#winBtn");
    const NftBtn = document.querySelector("#nftBtn");
    const DotsBtn = document.querySelector("#dotsBtn");
    const Earn = document.querySelector("#earn");
    const Win = document.querySelector("#win");
    const Nft = document.querySelector("#nft");
    const Dots = document.querySelector("#dots");

    EarnBtn.addEventListener("mouseover", function () {
      Earn.style.display = "flex";
      Win.style.display = "none";
      Nft.style.display = "none";
      Dots.style.display = "none";
    });

    EarnBtn.addEventListener("mouseout", function () {
      Earn.style.display = "none";
      Win.style.display = "none";
      Nft.style.display = "none";
      Dots.style.display = "none";
    });
    WinBtn.addEventListener("mouseover", function () {
      Earn.style.display = "none";
      Win.style.display = "flex";
      Nft.style.display = "none";
      Dots.style.display = "none";
    });
    WinBtn.addEventListener("mouseout", function () {
      Earn.style.display = "none";
      Win.style.display = "none";
      Nft.style.display = "none";
      Dots.style.display = "none";
    });
    NftBtn.addEventListener("mouseover", function () {
      Earn.style.display = "none";
      Win.style.display = "none";
      Nft.style.display = "flex";
      Dots.style.display = "none";
    });
    NftBtn.addEventListener("mouseout", function () {
      Earn.style.display = "none";
      Win.style.display = "none";
      Nft.style.display = "none";
      Dots.style.display = "none";
    });
    DotsBtn.addEventListener("mouseover", function () {
      Earn.style.display = "none";
      Win.style.display = "none";
      Nft.style.display = "none";
      Dots.style.display = "flex";
    });
    DotsBtn.addEventListener("mouseout", function () {
      Earn.style.display = "none";
      Win.style.display = "none";
      Nft.style.display = "none";
      Dots.style.display = "none";
    });
  });
  return (
    <>
      <div id="mbNavbar" className="mbNavbar">
        <div className="cover">
          <span className="mbBtns">
            <img className="mbImgs" src="/images/1s.svg" />
            <span>Trade</span>
          </span>
        </div>
        <div id="earnBtn" className="mbBtns">
          {" "}
          <img className="mbImgs" src="/images/2s.svg" />
          <span>Earn</span>
        </div>
        <div id="winBtn" className="mbBtns">
          {" "}
          <img id="trophy" className="mbImgs" src="/images/3strophy.svg" />
          <span>Win</span>
        </div>
        <div id="nftBtn" className="mbBtns">
          {" "}
          <img className="mbImgs" src="/images/4snft.svg" />
          <span>NFT</span>
        </div>
        <div id="dotsBtn" className="mbBtns">
          <span>
            <span className="cir_dot" />
            <span className="cir_dot" />
            <span className="cir_dot" />
            &nbsp;
          </span>
        </div>
        .
      </div>
    </>
  );
}
