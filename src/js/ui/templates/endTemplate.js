export const upperContainerTemplate = ({header, cta, href}) => 
{
    return `
        <div class="end__upper_container">
          <h1 class="end_header__upper">${header}</h1>
          <a href="${href}">
            <button class="end__cta" btn>
              ${cta}
            </button>            
          </a>
        </div>
    `;
} 

export const leftLowerContainerAddressTemplate = ({ coords, location, reservedRights }) => {
  return `<p class="end__adress">${coords.lat} ${coords.lon} ${location.city} ${location.country} ${reservedRights}</p>`;
};

export const leftLowerContainerTemplate = ({ img, adress }) => {
  const adressTemplate = leftLowerContainerAddressTemplate(adress);
  const image = `<img src="${img.src}" alt="${img.alt}" class="end__logo">`;
  return `
        <div class="lower__left">
            ${image}
            ${adressTemplate}
        </div>  
    `;
};

export const lowerContainerTemplate = ({leftLowerContainerData, rightLowerContainerData}) => 
{
    const leftLowerTemplate = leftLowerContainerTemplate(leftLowerContainerData);
    const rightLowerTemplate = rightLowerContainerData.map(container => rightLowerContainerTemplate(container)).join('');

    return `
      <div class="end__lower_container">
          <div class="lower__left">
            ${leftLowerTemplate}
          </div>
          <div class="lower__right">
            ${rightLowerTemplate}
          </div>
        </div>
    `
}


export const rightLowerContainerTemplate = ({ header, sub }) => {
    const subItems = sub.map(sub => `<a href="${sub.href}"><p>${sub.title}</p></a>`).join('');
    return `
      <div class="end__right_container">
        <div class="end_title">
          <p class="end__references_title">${header}</p>
        </div>
        <div class="end__sub">
          ${subItems}
        </div>
      </div>
    `;
  };

  export const licenseTemplate = ({title}) => 
  {
    return `
        <p class="license">${title}</p>
    `;
  }

  export const endTemplate = ({ upperContainerData, leftLowerContainerData, rightLowerContainerData, licenseData }) => {
    const upperContainerHtml = upperContainerTemplate(upperContainerData);
    const lowerContainerHtml = lowerContainerTemplate({ leftLowerContainerData, rightLowerContainerData });
    const licenseHtml = licenseTemplate(licenseData);
  
    return `
        <div class="end__section">
          ${upperContainerHtml}
          ${lowerContainerHtml}
          ${licenseHtml}
        </div>
    `;
  };