
export function Card(pricingCard){
    return (` <div class="pricing-card">
            <h2 >${pricingCard.name} </h2>
            <div class="month">
              <h1>${pricingCard.price}</h1>
              <h2>/ ${pricingCard.session}</h2>
            </div>
            <p>${pricingCard.quotes} 
            </p>
            <div class="button basicButton">
              <button>Subscribe</button>
            </div>

            <p class="centeringPara">Save with annual billing (20% off)</p>
            <ol>
              <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon">
                  <path fill-rule="evenodd"
                    d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                    clip-rule="evenodd" />
                </svg>

                <p>Limited genertion ~ 200</p>

              </li>
              <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon">
                  <path fill-rule="evenodd"
                    d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                    clip-rule="evenodd" />
                </svg>
                <p>Limited genertion ~ 200</p>

              </li>
              <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon">
                  <path fill-rule="evenodd"
                    d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                    clip-rule="evenodd" />
                </svg>
                <p>Limited genertion ~ 200</p>

              </li>
              <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon">
                  <path fill-rule="evenodd"
                    d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                    clip-rule="evenodd" />
                </svg>
                <p>Limited genertion ~ 200</p>

              </li>

            </ol>
          </div>
    `)
}
export function sideBar(options) {

    return (`
    <div class="slideBarTop">
      <a href="html"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
          stroke="currentColor" class="icon">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="${options.svg}" />
        </svg>
         ${options.name}
      </a>
    
      </div>
  `)
  }