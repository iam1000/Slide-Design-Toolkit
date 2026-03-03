import React, { useState } from "react";
import "./App.css";
import * as PromptsData from "./data/prompts-data";

function App() {
  const categories = PromptsData.categories || [];
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeIndustry, setActiveIndustry] = useState(null);

  const generatePrompts = (catName, industryName) => {
    switch (industryName) {
      case "반도체":
        return PromptsData.SEMICONDUCTOR_PROMPTS;
      case "자동차":
        return PromptsData.AUTOMOTIVE_PROMPTS;
      case "조선":
        return PromptsData.SHIPBUILDING_PROMPTS;
      case "철강":
        return PromptsData.STEEL_PROMPTS;
      case "병원":
        return PromptsData.HOSPITAL_PROMPTS;
      case "한의원":
        return PromptsData.ORIENTAL_PROMPTS;
      case "약국":
        return PromptsData.PHARMACY_PROMPTS;
      case "의료기기":
        return PromptsData.MEDDEVICE_PROMPTS;
      case "학원":
        return PromptsData.ACADEMY_PROMPTS;
      case "유치원":
        return PromptsData.KINDERGARTEN_PROMPTS;
      case "대학":
        return PromptsData.UNIVERSITY_PROMPTS;
      case "직업훈련":
        return PromptsData.VOCATIONAL_PROMPTS;
      case "은행":
        return PromptsData.BANK_PROMPTS;
      case "증권":
        return PromptsData.SECURITIES_PROMPTS;
      case "보험":
        return PromptsData.INSURANCE_PROMPTS;
      case "핀테크":
        return PromptsData.FINTECH_PROMPTS;
      case "편의점":
        return PromptsData.CVS_PROMPTS;
      case "백화점":
        return PromptsData.DEPARTMENT_PROMPTS;
      case "온라인쇼핑":
        return PromptsData.ECOMMERCE_PROMPTS;
      case "프랜차이즈":
        return PromptsData.FRANCHISE_PROMPTS;
      case "식당":
        return PromptsData.RESTAURANT_PROMPTS;
      case "카페":
        return PromptsData.CAFE_PROMPTS;
      case "급식":
        return PromptsData.CATERING_PROMPTS;
      case "식품제조":
        return PromptsData.FOODMFG_PROMPTS;
      case "건설사":
        return PromptsData.CONSTRUCTION_PROMPTS;
      case "공인중개사":
        return PromptsData.REALTOR_PROMPTS;
      case "인테리어":
        return PromptsData.INTERIOR_PROMPTS;
      case "소프트웨어":
        return PromptsData.SOFTWARE_PROMPTS;
      case "앱개발":
        return PromptsData.APPDEV_PROMPTS;
      case "AI":
        return PromptsData.AI_PROMPTS;
      case "게임":
        return PromptsData.GAME_PROMPTS;
      case "의류":
        return PromptsData.FASHION_PROMPTS;
      case "화장품":
        return PromptsData.COSMETICS_PROMPTS;
      case "미용실":
        return PromptsData.SALON_PROMPTS;
      case "네일샵":
        return PromptsData.NAIL_PROMPTS;
      case "농협":
        return PromptsData.NONGHYUP_PROMPTS;
      case "스마트팜":
        return PromptsData.SMARTFARM_PROMPTS;
      case "수산시장":
        return PromptsData.FISHMARKET_PROMPTS;
      case "지자체":
        return PromptsData.LOCALG_PROMPTS;
      case "공기업":
        return PromptsData.PUBCORP_PROMPTS;
      case "복지관":
        return PromptsData.WELFARE_PROMPTS;
      case "여행사":
        return PromptsData.TRAVEL_PROMPTS;
      case "호텔":
        return PromptsData.HOTEL_PROMPTS;
      case "관광지":
        return PromptsData.ATTRACTION_PROMPTS;
      case "항공":
        return PromptsData.AIRLINE_PROMPTS;
      default:
        return PromptsData.DESIGNER_BEST_7 || [];
    }
  };

  const toggleCategory = (catId) => {
    setActiveCategory((prev) => (prev === catId ? null : catId));
  };

  const selectIndustry = (industryText) => {
    setActiveIndustry(industryText);
  };

  const activeCategoryData = categories.find((c) => c.id === activeCategory);

  const renderPrompts = () => {
    if (!activeCategory || !activeIndustry) {
      return (
        <div className="welcome-screen">
          <div className="welcome-icon">
            <svg
              width="38"
              height="38"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"
                stroke="white"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
                stroke="white"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h2>Slides Design Toolkit by Coda</h2>
          <p>
            업종을 클릭하면 디자인 슬라이드에 최적화된
            <br />
            업종별 7가지 창의적인 슬라이드가 만들어집니다.
          </p>
          <div className="welcome-grid">
            <div className="welcome-chip">
              <div className="num">12</div>
              <div className="lbl">대분류</div>
            </div>
            <div className="welcome-chip">
              <div className="num">45</div>
              <div className="lbl">세부 업종</div>
            </div>
            <div className="welcome-chip">
              <div className="num">315</div>
              <div className="lbl">프롬프트</div>
            </div>
          </div>
        </div>
      );
    }

    const designs = generatePrompts(activeCategoryData.name, activeIndustry);

    const colorSets = [
      ["#e8f0fe", "#1a1a2e", "#0071e3"],
      ["#0a0a0f", "#c9a84c", "#2d2d44"],
      ["#1a0a2e", "#667eea", "#764ba2"],
      ["#f5ede0", "#5c4033", "#8db87b"],
      ["#f7f4ef", "#e63946", "#1a1a1a"],
      ["#e8f2ff", "#003d82", "#0066cc"],
      ["#fce4ec", "#9b59b6", "#e91e8c"],
    ];

    return (
      <div id="promptArea">
        <div className="prompt-header">
          <div className="prompt-header-top">
            <span className="ph-category">
              {activeCategoryData.emoji} {activeCategoryData.name}
            </span>
            <span className="ph-arrow">›</span>
            <span className="ph-industry">{activeIndustry}</span>
          </div>
          <h2>{activeIndustry} 슬라이드 프롬프트 7선</h2>
          <p>
            NotebookLM에 최적화된 7가지 디자인 스타일의 슬라이드 프롬프트입니다.
          </p>
        </div>
        <div className="prompt-grid">
          {designs.map((design, i) => (
            <div className="prompt-card" key={i}>
              <div className="card-top">
                <div
                  className="card-num"
                  style={{ background: design.numBg, color: design.numColor }}
                >
                  {i + 1}
                </div>
                <div className="card-title-block">
                  <div className="card-design-name">{design.name}</div>
                  <div className="card-design-type">{design.type}</div>
                </div>
              </div>
              <div className="card-body">
                <div className="prompt-text">{design.prompt}</div>
              </div>
              <div className="card-footer">
                <div className="color-swatches">
                  {(design.colors || colorSets[i]).map((c) => (
                    <div
                      className="swatch"
                      key={c}
                      style={{ background: c }}
                    ></div>
                  ))}
                </div>
                <button
                  className="copy-btn"
                  onClick={(e) => {
                    navigator.clipboard.writeText(design.prompt);
                    const btn = e.currentTarget;
                    const orig = btn.innerHTML;
                    btn.innerHTML =
                      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> 복사됨';
                    btn.classList.add("copied");
                    setTimeout(() => {
                      btn.innerHTML = orig;
                      btn.classList.remove("copied");
                    }, 2000);
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <rect x="9" y="9" width="13" height="13" rx="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </svg>
                  복사
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <nav className="topnav">
        <div className="topnav-logo">
          <div className="logo-icon">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h1>Slide Design Toolkit</h1>
        </div>
        <div className="topnav-stats">
          <div className="stat-chip">
            대분류 <span>12</span>
          </div>
          <div className="stat-chip">
            세부 업종 <span>45</span>
          </div>
          <div className="stat-chip">
            프롬프트 <span>315</span>
          </div>
        </div>
      </nav>

      <div className="app-body">
        <aside className="sidebar">
          <div className="sidebar-header">
            <div className="sidebar-title">45개 업종별 선택</div>
          </div>
          <div className="sidebar-scroll">
            {categories.map((cat) => (
              <div className="category-group" key={cat.id}>
                <button
                  className={`category-btn ${activeCategory === cat.id ? "active" : ""}`}
                  onClick={() => toggleCategory(cat.id)}
                >
                  <span className="cat-emoji">{cat.emoji}</span>
                  <span className="cat-info">
                    <span className="cat-name">{cat.name}</span>
                    <span className="cat-count">
                      {cat.industries.length}개 업종
                    </span>
                  </span>
                  <span className="cat-chevron">▶</span>
                </button>
                <div
                  className={`industry-list ${activeCategory === cat.id ? "open" : ""}`}
                >
                  {cat.industries.map((industry) => (
                    <button
                      key={industry}
                      className={`industry-btn ${activeIndustry === industry ? "active" : ""}`}
                      onClick={() => selectIndustry(industry)}
                    >
                      <span className="industry-dot"></span>
                      {industry}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="sidebar-footer">
            <a
              href="https://www.youtube.com/@AI_Coda"
              target="_blank"
              rel="noreferrer"
              className="made-by-coda"
            >
              Made by Coda
            </a>
          </div>
        </aside>

        <main className="content-area">{renderPrompts()}</main>
      </div>
    </div>
  );
}

export default App;
